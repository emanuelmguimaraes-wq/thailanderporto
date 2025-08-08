// Service worker with bumped cache name (v3) to avoid stale files
const CACHE_NAME = 'thailanderporto-en-v3';
const OFFLINE_URLS = [
  './',
  './index.html',
  './styles.css?v=3',
  './script.js?v=3',
  './manifest.webmanifest',
  './icons/app-icon-192.png',
  './icons/app-icon-512.png',
  './images/01.png','./images/02.png','./images/03.png','./images/04.png',
  './images/05.png','./images/06.png','./images/07.png','./images/08.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      const respClone = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, respClone));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
