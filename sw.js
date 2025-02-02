const CACHE_NAME = 'mi-pwa-v1';
const URLS_TO_CACHE = [
    '/',
    'index.html',
    'styles.css',
    'app.js',
    'manifest.json',
    'icon-192x192.png',
    'icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(URLS_TO_CACHE))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
