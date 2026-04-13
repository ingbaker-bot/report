// ══════════════════════════════════════════
// Service Worker - 社區智慧通報系統
// 版本更新：改 CACHE_NAME 的版本號即可清除舊快取
// ══════════════════════════════════════════
const CACHE_NAME = 'smart-community-v1';

// 要快取的靜態資源（離線也能開啟）
const CACHE_FILES = [
  './',
  './index.html',
  './admin.html',
  './config.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './manifest.json',
];

// ── 安裝：快取靜態資源 ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] 快取靜態資源');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => self.skipWaiting())
  );
});

// ── 啟動：清除舊快取 ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('[SW] 清除舊快取：', key);
              return caches.delete(key);
            })
      )
    ).then(() => self.clients.claim())
  );
});

// ── 攔截請求：網路優先，失敗才用快取 ──
self.addEventListener('fetch', event => {
  // GAS 請求不快取（即時資料）
  if (event.request.url.includes('script.google.com') ||
      event.request.url.includes('googleapis.com') ||
      event.request.url.includes('line.me') ||
      event.request.url.includes('liff.line.me')) {
    return; // 讓這些請求直接走網路
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // 更新快取
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // 網路失敗，用快取
        return caches.match(event.request)
          .then(cached => cached || new Response(
            '<div style="text-align:center;padding:40px;font-family:sans-serif">' +
            '<h2>📶 目前無網路連線</h2>' +
            '<p>請連線後重新整理</p></div>',
            { headers: { 'Content-Type': 'text/html;charset=utf-8' } }
          ));
      })
  );
});
