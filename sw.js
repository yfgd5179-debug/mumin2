/* sw.js — çevrimdışı kabuk + akıllı önbellek (PWA)
 *
 *  Gezinti (sayfa açma) ..... ağa öncelik: her zaman taze HTML.
 *                             Ağ yoksa önbelleğe düşer (yoksa ana sayfa).
 *  Statik (css/js/görsel) ... önbelleğe öncelik + arka planda tazeleme.
 *                             `?v=` sürümü değişince URL de değişir →
 *                             önbellek kendiliğinden tazelenir.
 *  Dış originler (analitik) . service worker'a hiç karışmaz.
 *
 *  Sürüm değişince eski önbellekler activate sırasında silinir.
 */
const SURUM = "mumin-v1";
const ONBELLEK = SURUM + "-gezinti";
const STATIK = SURUM + "-statik";

self.addEventListener("install", (olay) => {
  self.skipWaiting();
  olay.waitUntil(
    caches
      .open(ONBELLEK)
      // ağ erişilemezse bile uygulama açılsın diye çekirdek dosyalar hazır dursun
      .then((k) => k.addAll(["/index.html", "/dil.html", "/404.html", "/icon-192.png"]))
      .catch(() => {})
  );
});

self.addEventListener("activate", (olay) => {
  olay.waitUntil(
    caches
      .keys()
      .then((anahtarlar) =>
        Promise.all(anahtarlar.filter((a) => !a.startsWith(SURUM)).map((a) => caches.delete(a)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (olay) => {
  const istek = olay.request;
  if (istek.method !== "GET") return;

  const url = new URL(istek.url);
  if (url.origin !== self.location.origin) return; // 3. taraf (analitik vb.) serbest

  if (istek.mode === "navigate") {
    olay.respondWith(
      fetch(istek)
        .then((cevap) => {
          if (cevap && cevap.ok) {
            const kopya = cevap.clone();
            caches.open(ONBELLEK).then((k) => k.put(istek, kopya).catch(() => {}));
          }
          return cevap;
        })
        .catch(() =>
          caches.match(istek).then((b) => b || caches.match("/index.html"))
        )
    );
    return;
  }

  olay.respondWith(
    caches.match(istek).then((eski) => {
      const taze = fetch(istek)
        .then((cevap) => {
          if (cevap && cevap.ok) {
            const kopya = cevap.clone();
            caches.open(STATIK).then((k) => k.put(istek, kopya).catch(() => {}));
          }
          return cevap;
        })
        .catch(() => eski);
      return eski || taze;
    })
  );
});
