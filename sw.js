// Service Worker для ИПЭК
// Стратегии:
//   - Статика (HTML/CSS/JS/изображения): stale-while-revalidate
//   - data.js: network-first (нужны свежие данные)
//   - config.js: network-first
//   - Google Sheets/pilot-ipek: network-only (динамические данные)

const VERSION = "ipek-v1";
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./assets/ipek-logo.png",
  "./assets/college-photo-1.jpg",
  "./assets/college-photo-2.jpg",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => !name.startsWith(VERSION)).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  // Динамические данные — всегда из сети
  if (url.hostname.includes("docs.google.com") || url.hostname.includes("pilot-ipek.ru")) {
    return;
  }

  if (!sameOrigin) return;

  // data.js, config.js — network-first с фолбэком на кэш
  if (url.pathname.endsWith("/data.js") || url.pathname.endsWith("/config.js")) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Всё остальное — stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request));
});

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw _;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then((response) => {
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || networkPromise;
}
