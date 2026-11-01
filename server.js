/**
 * ROOT_GAP Backend Server & Secure Gemini AI Gateway
 * Zero external dependencies - uses Node.js native http, fs, path, and fetch
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Load .env file safely
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const idx = trimmed.indexOf('=');
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
}
loadEnv();

const PORT = parseInt(process.env.PORT || '3000', 10);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY || '';
const ELEVENLABS_AGENT_ID = process.env.ELEVENLABS_AGENT_ID || 'agent_0101m6bb7qwkemyty7444cwtt0cp';

// Supported Gemini models in priority order for resilience
const GEMINI_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-3.5-flash'
];

// Rate limiting state: IP -> timestamps[]
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 40;

function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

// Clean up stale rate limit entries every 5 minutes
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of rateLimitMap.entries()) {
    const valid = times.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) rateLimitMap.delete(ip);
    else rateLimitMap.set(ip, valid);
  }
}, 300000);
if (cleanupInterval && cleanupInterval.unref) {
  cleanupInterval.unref();
}

// Safe Gemini Call with model fallback and timeout
async function callGemini(prompt, systemInstruction = '', temperature = 0.4) {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: temperature,
          maxOutputTokens: 2048
        }
      };

      if (systemInstruction) {
        payload.systemInstruction = {
          parts: [{ text: systemInstruction }]
        };
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 18000);

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await res.json();

      if (!res.ok) {
        const errMsg = data.error?.message || `HTTP ${res.status}`;
        lastError = new Error(`Model ${model}: ${errMsg}`);
        // If 404, 503, or 429, try next model
        if ([404, 429, 503].includes(res.status)) {
          continue;
        }
        throw lastError;
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return { text, model };
      }
    } catch (err) {
      lastError = err;
      // Continue to next model on network/timeout error
    }
  }

  throw lastError || new Error('All Gemini models failed to respond.');
}

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon'
};

// Helper to send JSON responses
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

// Parse request body
function parseBody(req) {
  if (req.body) {
    if (typeof req.body === 'object') return Promise.resolve(req.body);
    if (typeof req.body === 'string') {
      try {
        return Promise.resolve(JSON.parse(req.body));
      } catch (e) {
        return Promise.reject(new Error('Invalid JSON'));
      }
    }
  }
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 100000) { // 100KB limit
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

// System prompts for educational AI persona
const TUTOR_SYSTEM_PROMPT = `You are Rooty, a simple, friendly, and intelligent AI maths tutor for students in Classes 6 to 10 on the RootGap platform.

Your core requirements:
1. Short, concise, and direct:
   - For basic calculations, arithmetic, or direct questions (e.g. "What is 1 + 2?", "5 × 2 = 10", "-3 - 4"), answer in 1 or 2 simple sentences directly without stories.
     Example: "1 + 2 = 3. 😊"
     Example: "Because 5 + 5 = 10. So, 5 × 2 = 10."
   - For concept definitions (e.g. "Explain fractions"), give a short, clear definition and at most 1 brief relatable example.
     Example: "A fraction represents a part of a whole. For example, if you divide a pizza into 4 equal pieces and take 1, you have 1/4 of the pizza."
   - Do NOT give long explanations unless the student explicitly asks for one (such as "explain in detail", "step by step", "show all steps").

2. Tone and style:
   - Written in simple English suitable for Classes 6-10.
   - Friendly and polite, but NOT overly enthusiastic.
   - Avoid patronizing praises like "You're a math rockstar!" or "Don't worry at all!".
   - Avoid unnecessary follow-up questions after every answer. Answer the question and stop.
   - Avoid repeating the same explanation in different words.
   - Use at most 1 subtle emoji if appropriate.

3. Clean mathematical presentation:
   - NEVER use LaTeX formatting or wrap expressions in dollar signs ($).
   - Write clean, plain text: 1 + 2 = 3, -3 - 4 = -7, 5 × 2 = 10, x = 4, x² = 16.

4. Language:
   - If language is Telugu or Hindi, respond naturally in simple Telugu/Hindi with English mathematical numerals and symbols.`;

const MISCONCEPTION_SYSTEM_PROMPT = `You are an expert diagnostic cognitive researcher and math teacher.
Analyze student mistakes to find the underlying root misconception rather than superficial errors.
Identify whether the student is:
- Adding denominators instead of finding LCM
- Dropping or mixing negative signs
- Failing to invert operations when crossing "="
- Missing negative roots for x^2 = k
- Guessing due to language barrier or confusion
Respond with structured, compassionate analysis and a 2-step remedy.`;

// Server Router
async function handleRequest(req, res) {
  const ip = (req.headers && (req.headers['x-forwarded-for'] || req.headers['x-real-ip'])) || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // --- API ROUTES ---
  if (pathname.startsWith('/api/')) {
    if (!checkRateLimit(ip)) {
      sendJSON(res, 429, { error: 'Rate limit exceeded. Please wait a moment.' });
      return;
    }

    // Health Check
    if (pathname === '/api/health' && req.method === 'GET') {
      sendJSON(res, 200, {
        status: 'online',
        aiConfigured: !!GEMINI_API_KEY,
        elevenlabsConfigured: !!ELEVENLABS_API_KEY,
        elevenlabsAgentId: ELEVENLABS_AGENT_ID ? (ELEVENLABS_AGENT_ID.slice(0, 12) + '...') : null,
        models: GEMINI_MODELS,
        timestamp: Date.now()
      });
      return;
    }

    // ElevenLabs Conversation Credentials (Feature 2 & 20 - Conversational AI)
    if (pathname === '/api/elevenlabs/conversation-credentials' && (req.method === 'GET' || req.method === 'POST')) {
      let signedUrl = null;
      let conversationToken = null;

      // 1. If an API key is provided, try getting signedUrl and/or token with xi-api-key
      if (ELEVENLABS_API_KEY) {
        try {
          const signedUrlRes = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${encodeURIComponent(ELEVENLABS_AGENT_ID)}`, {
            headers: { 'xi-api-key': ELEVENLABS_API_KEY }
          });
          if (signedUrlRes.ok) {
            const data = await signedUrlRes.json();
            signedUrl = data.signed_url;
          }
        } catch (err) {
          console.warn('Signed URL fetch error:', err.message);
        }

        try {
          const tokenRes = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${encodeURIComponent(ELEVENLABS_AGENT_ID)}`, {
            headers: { 'xi-api-key': ELEVENLABS_API_KEY }
          });
          if (tokenRes.ok) {
            const data = await tokenRes.json();
            conversationToken = data.token;
          }
        } catch (err) {
          console.warn('Token fetch error:', err.message);
        }
      }

      // 2. Fallback to public agent conversation token (for public agents with enable_auth: false)
      if (!conversationToken && !signedUrl) {
        try {
          const publicTokenRes = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${encodeURIComponent(ELEVENLABS_AGENT_ID)}`);
          if (publicTokenRes.ok) {
            const data = await publicTokenRes.json();
            conversationToken = data.token;
          }
        } catch (err) {
          console.warn('Public token fetch error:', err.message);
        }
      }

      if (!signedUrl && !conversationToken) {
        sendJSON(res, 502, {
          error: 'Failed to authenticate with ElevenLabs API. Please verify your ELEVENLABS_API_KEY has convai_write permissions or check ELEVENLABS_AGENT_ID.'
        });
        return;
      }

      sendJSON(res, 200, {
        signedUrl,
        conversationToken,
        agentId: ELEVENLABS_AGENT_ID
      });
      return;
    }

    // AI Personal Tutor (Feature 2 & 20)
    if (pathname === '/api/tutor' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const { question, studentClass = 8, topic = 'general', language = 'en', history = [] } = body;

        if (!question || typeof question !== 'string') {
          sendJSON(res, 400, { error: 'Question text is required.' });
          return;
        }

        const langInstructions = {
          te: 'Respond primarily in simple Telugu (తెలుగు) with English math symbols.',
          hi: 'Respond primarily in simple Hindi (हिन्दी) with English math symbols.',
          en: 'Respond in clear, friendly English.'
        }[language] || 'Respond in clear, friendly English.';

        const prompt = `Student Class: Class ${studentClass} (Classes 6-10).
Topic: ${topic}.
Language instruction: ${langInstructions}
Recent conversation: ${JSON.stringify(history.slice(-4))}
Student Question: "${question}"

Instructions:
- Keep the answer short, clear, and focused directly on the question.
- If it is a basic calculation or simple question (e.g. "What is 1 + 2?", "5 × 2 = 10", "−3 − 4"), answer in 1 or 2 concise sentences without food stories or analogies.
- If asking to explain a concept (e.g. "Explain fractions"), give a simple 1-2 sentence definition and at most 1 brief example.
- Do NOT provide a long multi-step explanation or story unless the student explicitly asks to "explain in detail" or "step by step".
- Do NOT use LaTeX formatting or dollar signs ($). Use plain text math.
- Do NOT ask a follow-up question. Answer cleanly and stop.`;

        try {
          const result = await callGemini(prompt, TUTOR_SYSTEM_PROMPT);
          // Strip any accidental dollar signs or LaTeX wrappers that LLMs sometimes generate
          let cleanAnswer = (result.text || '')
            .replace(/\$([^\$]+)\$/g, '$1')
            .replace(/\\times/g, '×')
            .replace(/\\div/g, '÷')
            .replace(/\\pm/g, '±')
            .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');
          sendJSON(res, 200, { answer: cleanAnswer, model: result.model });
        } catch (aiErr) {
          // Graceful fallback if Gemini API is temporarily unavailable
          const fallbackAnswers = {
            frac: "A fraction represents a part of a whole. For example, if you divide a pizza into 4 equal pieces and take 1, you have 1/4 of the pizza.",
            neg: "Negative numbers are numbers less than zero. On a number line, numbers to the left of 0 are negative.",
            lin: "A linear equation is a balance: whatever operation you do to one side, you must do to the other to keep both sides equal.",
            quad: "A quadratic equation has x², which gives two solutions (positive and negative), since both 4² and (−4)² equal 16."
          };
          const fb = fallbackAnswers[topic] || "Mathematics builds step by step. Break the problem into what you know and solve step by step.";
          sendJSON(res, 200, { answer: fb, fallback: true });
        }
      } catch (err) {
        sendJSON(res, 500, { error: 'Failed to process tutor request.' });
      }
      return;
    }

    // AI Misconception Detector (Feature 11)
    if (pathname === '/api/misconception' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const { question, studentAnswer, correctAnswer, mistakeTag, confidence, studentClass = 8 } = body;

        const prompt = `Analyze this math mistake for a Class ${studentClass} student:
Question: "${question}"
Student picked: "${studentAnswer}" (Correct was: "${correctAnswer}")
Confidence level: ${confidence} (0=Unsure, 1=Okay, 2=Very Sure)
Identified error tag: ${mistakeTag}

1. What is the false mental rule the student likely applied?
2. Which foundational prerequisite skill is missing?
3. Provide one quick 1-minute real-world fix activity.
4. Give a follow-up check question with options and correct answer.`;

        try {
          const result = await callGemini(prompt, MISCONCEPTION_SYSTEM_PROMPT);
          sendJSON(res, 200, { diagnosis: result.text, model: result.model });
        } catch (aiErr) {
          sendJSON(res, 200, {
            diagnosis: `Identified Root Misconception: [${mistakeTag}]. When a student selects this option with confidence ${confidence}, they are confusing the operational order or sign rules. Recommendation: revisit the prerequisite bridge lesson before attempting higher-level questions.`,
            fallback: true
          });
        }
      } catch (err) {
        sendJSON(res, 500, { error: 'Failed to diagnose misconception.' });
      }
      return;
    }

    // AI-Generated Practice Worksheet (Feature 14)
    if (pathname === '/api/worksheet' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const { topic = 'fractions', studentClass = 8, difficulty = 'standard', count = 5 } = body;

        const prompt = `Generate a high quality practice worksheet for Indian CBSE/State board Class ${studentClass} students.
Topic: ${topic}
Difficulty: ${difficulty}
Number of questions: ${count}

Format requirement:
Return valid JSON only in this exact structure:
{
  "title": "Practice Worksheet: ${topic}",
  "class": ${studentClass},
  "questions": [
    {
      "id": 1,
      "text": "Question text here",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "explanation": "Step by step solution here"
    }
  ]
}`;

        try {
          const result = await callGemini(prompt, 'You are an NCERT mathematics question designer. Return JSON only.');
          let jsonText = result.text.trim();
          if (jsonText.startsWith('```json')) jsonText = jsonText.replace(/^```json/, '').replace(/```$/, '').trim();
          else if (jsonText.startsWith('```')) jsonText = jsonText.replace(/^```/, '').replace(/```$/, '').trim();
          const worksheet = JSON.parse(jsonText);
          sendJSON(res, 200, { worksheet, model: result.model });
        } catch (aiErr) {
          // Deterministic fallback worksheet
          const fallbackWorksheets = {
            frac: {
              title: "Fractions Mastery Worksheet",
              class: studentClass,
              questions: [
                { id: 1, text: "Which fraction is equivalent to 3/4?", options: ["6/8", "9/15", "4/3", "3/8"], correctIndex: 0, explanation: "Multiply numerator and denominator by 2: 3×2 / 4×2 = 6/8." },
                { id: 2, text: "Solve: 2/7 + 3/7", options: ["5/14", "5/7", "6/7", "1/7"], correctIndex: 1, explanation: "When denominators match, add only the numerators: 2+3=5, so 5/7." },
                { id: 3, text: "Which is greater: 1/4 or 1/3?", options: ["1/4", "1/3", "They are equal", "Cannot be determined"], correctIndex: 1, explanation: "Cutting a whole into 3 pieces produces bigger slices than cutting into 4 pieces. So 1/3 > 1/4." }
              ]
            },
            neg: {
              title: "Integers & Sign Rules Worksheet",
              class: studentClass,
              questions: [
                { id: 1, text: "Calculate: -5 + (-7)", options: ["-12", "12", "-2", "2"], correctIndex: 0, explanation: "Same signs: add the absolute values (5+7=12) and keep the negative sign: -12." },
                { id: 2, text: "Calculate: (-4) × (-6)", options: ["-24", "24", "-10", "10"], correctIndex: 1, explanation: "Two negative numbers multiplied always produce a positive product: 24." },
                { id: 3, text: "Solve: 8 - (-3)", options: ["5", "11", "-11", "-5"], correctIndex: 1, explanation: "Subtracting a negative number is equivalent to addition: 8 + 3 = 11." }
              ]
            }
          };
          const ws = fallbackWorksheets[topic] || fallbackWorksheets.frac;
          sendJSON(res, 200, { worksheet: ws, fallback: true });
        }
      } catch (err) {
        sendJSON(res, 500, { error: 'Failed to generate worksheet.' });
      }
      return;
    }

    // Real-Life Scenario Generator (Feature 3 & 18)
    if (pathname === '/api/scenario' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const { topic = 'fractions', scenarioType = 'shopping', studentClass = 8 } = body;

        const prompt = `Create an interactive practical real-life math story scenario for Class ${studentClass}.
Topic: ${topic}
Scenario theme: ${scenarioType} (e.g. Hyderabad street market, cricket match run rate, cooking festival recipe).

Return JSON only:
{
  "title": "Scenario Title",
  "story": "Short engaging setup (2-3 sentences)",
  "problem": "The practical challenge to solve",
  "options": ["Choice A", "Choice B", "Choice C"],
  "correctIndex": 1,
  "conceptExplanation": "Why this math matters in everyday life"
}`;

        try {
          const result = await callGemini(prompt, 'You are an educational storytelling game designer. Return JSON only.');
          let jsonText = result.text.trim();
          if (jsonText.startsWith('```json')) jsonText = jsonText.replace(/^```json/, '').replace(/```$/, '').trim();
          else if (jsonText.startsWith('```')) jsonText = jsonText.replace(/^```/, '').replace(/```$/, '').trim();
          const scenario = JSON.parse(jsonText);
          sendJSON(res, 200, { scenario, model: result.model });
        } catch (aiErr) {
          sendJSON(res, 200, {
            scenario: {
              title: "The Weekend Cricket Match",
              story: "Your school team needs to score runs across the final 5 overs. The current run rate equation determines how fast the team must play.",
              problem: "If your target is 45 runs in 5 overs, what is the required rate per over (x)? Solve: 5x = 45.",
              options: ["8 runs per over", "9 runs per over", "10 runs per over"],
              correctIndex: 1,
              conceptExplanation: "Linear equations help athletes, captains, and analysts determine required rates and pacing under pressure."
            },
            fallback: true
          });
        }
      } catch (err) {
        sendJSON(res, 500, { error: 'Failed to generate scenario.' });
      }
      return;
    }

    // Smart Doubt Analytics for Teachers (Feature 19)
    if (pathname === '/api/doubt-analytics' && req.method === 'POST') {
      try {
        const body = await parseBody(req);
        const { doubts = [], classNumber = 8 } = body;

        const prompt = `Analyze these student math questions/doubts collected in Class ${classNumber}:
${JSON.stringify(doubts)}

1. Cluster the common themes and persistent misconceptions.
2. Highlight which foundational concepts (Class 6-7) are blocking these Class ${classNumber} students.
3. Suggest a 15-minute hands-on classroom activity for the teacher to conduct tomorrow without computers.`;

        try {
          const result = await callGemini(prompt, 'You are a master teacher coach and educational curriculum advisor.');
          sendJSON(res, 200, { insights: result.text, model: result.model });
        } catch (aiErr) {
          sendJSON(res, 200, {
            insights: "Class Doubt Analytics:\n1. 60% of doubts relate to signs when transposing terms across '='.\n2. Prerequisite block: Integer subtraction on the number line.\n3. Recommended 15-min activity: 'Human Balance Scale' - students represent terms with positive (green) and negative (red) cards on either side of the classroom line.",
            fallback: true
          });
        }
      } catch (err) {
        sendJSON(res, 500, { error: 'Failed to analyze class doubts.' });
      }
      return;
    }

    sendJSON(res, 404, { error: 'API route not found' });
    return;
  }

  // --- STATIC FILE SERVING ---
  // Default to index.html
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

  // Security: prevent path traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing if needed
      filePath = path.join(__dirname, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const isNoCache = ext === '.html' || ext === '.js' || ext === '.json';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Error loading file');
        return;
      }
      const headers = { 'Content-Type': contentType };
      if (isNoCache) {
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        headers['Pragma'] = 'no-cache';
        headers['Expires'] = '0';
      }
      res.writeHead(200, headers);
      res.end(content);
    });
  });
}

const server = http.createServer(handleRequest);

let activePort = PORT;

function startServer(currentPort) {
  activePort = currentPort;
  server.listen(currentPort, () => {
    console.log(`====================================================`);
    console.log(`ROOT_GAP Adaptive Learning Server running at:`);
    console.log(`  http://localhost:${currentPort}`);
    console.log(`AI Gateway Status: ${GEMINI_API_KEY ? 'Active (Google Gemini)' : 'Offline (Missing Key)'}`);
    console.log(`Supported Models: ${GEMINI_MODELS.join(', ')}`);
    console.log(`====================================================`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const nextPort = activePort + 1;
    console.log(`Port ${activePort} in use, trying next port ${nextPort}...`);
    startServer(nextPort);
  } else {
    console.error('Server error:', err);
  }
});

if (require.main === module) {
  startServer(PORT);
}

module.exports = handleRequest;
