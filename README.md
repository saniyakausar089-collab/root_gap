# RootGap: AI-Powered Confidence-Aware Adaptive Learning Platform (Classes 6 to 10)

RootGap identifies **WHY** a student struggles with a mathematics problem by tracing incorrect answers and misconceptions through a prerequisite knowledge graph (`fractions` → `negative numbers` → `linear equations` → `quadratic equations`) to the foundational root gap.

Powered by **Google Gemini AI**, RootGap transforms ordinary quizzes into an intelligent, personalised learning ecosystem for Students, Teachers, and Parents.

---

## 🚀 Quick Start & How to Run

### Option 1: Full AI-Powered Experience (Recommended)
Runs the lightweight backend server with secure Google Gemini API routing:

```powershell
# 1. Install/verify environment (server uses native Node.js, zero dependencies required)
npm run dev
# or
node server.js
```
Open **`http://localhost:3030`** (or the displayed active port) in your browser.

### Option 2: Pure Static / Direct Browser Mode
Open `index.html` directly or serve with any static server:
```powershell
npx serve .
# or double-click index.html
```
*(The full adaptive engine, offline PWA, and curriculum work completely offline in static mode; Gemini AI features operate with built-in instant resilient fallback).*

---

## 🔐 Google Gemini AI Configuration & Security

RootGap uses server-side environment variables to ensure zero credential leakage:
- **No hardcoded keys**: Never exposed in frontend JS, HTML, network requests, or Git.
- **Environment file**: `.env` (automatically ignored in `.gitignore`). A template is provided in `.env.example`.
- **Model Fallback Chain**: Defaults to `gemini-3.5-flash-lite`, with automatic failover to `gemini-3.8-flash` and `gemini-3.5-flash`.
- **Rate-Limiting & Quota Protection**: In-memory rate limiting and request timeouts protect against quota drain.
- **Graceful Degradation**: If offline or if quota limits are exceeded, high-quality deterministic educational fallbacks ensure students are never disrupted.

---

## 🌟 The 20 Complete Features Implemented

1. **Visual Root-Gap Detective (Feature 1)**: Interactive prerequisite concept map showing connected nodes, foundational dependencies, master/developing/weak/locked states, and reasons for learning.
2. **AI Personal Tutor "Rooty" (Feature 2)**: Gemini-powered 24/7 personal tutor explaining doubts step-by-step with real-life analogies, follow-ups, and encouraging tone.
3. **Real-Life Learning Mode (Feature 3)**: Practical scenarios (Hyderabad sweet stall, pizza division, cricket run rates, travel speed, cooking ratios).
4. **Confidence Intelligence Tracker (Feature 4)**: Quadrant matrix comparing accuracy vs confidence (Solid Mastery, Blind Spots, Fragile Luck, Known Gaps) with guessing pattern detection.
5. **Learning Battles (Feature 5)**: Gap Monster Boss Battle with animated HP bars, sure-and-correct critical hits, and XP rewards.
6. **Classroom Learning Heatmap (Feature 6)**: Teacher dashboard matrix showing student-by-concept mastery, class averages, and struggling student alerts.
7. **Voice-Based Learning Assistant (Feature 7)**: Browser-native Web Speech API speech-to-text recognition and text-to-speech reading in English, Telugu, and Hindi.
8. **Student Learning Passport (Feature 8)**: Official digital student identity card with verified mastery visa stamps, badges, XP, and printable format.
9. **Parent Progress Dashboard (Feature 9)**: Dedicated parent portal with jargon-free progress summaries, strength/weakness analysis, and 5-minute at-home practical activities.
10. **Offline Learning Mode (Feature 10)**: Service Worker PWA (`sw.js`) with client-side outbox queue, local persistence, and auto-syncing upon reconnection.
11. **AI Misconception Detector (Feature 11)**: Deep cognitive error diagnosis powered by Gemini, identifying false mental models (e.g. adding denominators, dropping negative signs) and suggesting 1-minute remedies.
12. **Smart Revision Planner (Feature 12)**: Algorithmic spaced repetition scheduler (1, 2, 4, 7, 14, 30 days) prioritizing fragile concepts and blind spots.
13. **Peer Learning Rooms (Feature 13)**: Collaborative topic lounges with question posting, peer replies, and mentor pairings.
14. **AI-Generated Practice Worksheets (Feature 14)**: Teacher generator for custom CBSE/NCERT-aligned printable worksheets with full answer keys and explanations.
15. **Learning Journey Timeline (Feature 15)**: Chronological visual record of student milestones, resolved gaps, and boss achievements.
16. **Smart Study Recommendations (Feature 16)**: Priority next-action engine recommending the optimal prerequisite lesson or practice session based on real performance data.
17. **Gamified Daily Missions (Feature 17)**: 3 daily learning goals with progress bars and bonus XP claims.
18. **Adaptive Story-Based Learning (Feature 18)**: Interactive adventure quest ("The Lost Formula of Golconda") with branching mathematical checkpoints.
19. **Smart Doubt Analysis (Feature 19)**: Teacher doubt aggregator that clusters student queries using Gemini and suggests unplugged 15-minute classroom activities.
20. **Personalized Learning Companion (Feature 20)**: "Rooty" AI companion offering warm welcomes, motivational nudges, and multi-lingual voice/chat support.

---

## 🔑 Demo Access Credentials

- **Students**: Demo PIN `1111` (or create a custom profile)
- **Teachers**: Teacher PIN `1234`
- **Parents**: Parent PIN `5678` (or select student from portal)
