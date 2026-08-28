const CACHE='happy-channie-v3';
const FILES=["./", "./index.html", "./manifest.webmanifest", "./assets/members/wolfchan.png", "./assets/members/leebit.png", "./assets/members/dwaekki.png", "./assets/members/jiniret.png", "./assets/members/han-quokka.png", "./assets/members/bbokari.png", "./assets/members/puppym.png", "./assets/members/foxyin.png", "./assets/wolf/ready.png", "./assets/wolf/low-energy.png", "./assets/wolf/active.png", "./assets/wolf/rest.png", "./assets/wolf/complete.png", "./assets/wolf/pr.png", "./assets/wolf/max.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
