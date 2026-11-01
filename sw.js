const C = "rootgap-v6";
const F = [
  "./",
  "index.html",
  "manifest.json",
  "three.min.js",
  "elevenlabs-client.js",
  "content/real_life_scenarios.js",
  "content/story_quests.js",
  "content/practice_bank.js"
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(F)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== C).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.url.includes("/api/")) {
    return; // Pass through API requests directly
  }
  // Network-first for navigation/HTML documents to prevent stale cache
  if (e.request.mode === "navigate" || e.request.destination === "document" || e.request.url.endsWith("index.html") || e.request.url.endsWith("/")) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const resClone = res.clone();
          caches.open(C).then(c => c.put(e.request, resClone));
          return res;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
