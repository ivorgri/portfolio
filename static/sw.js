importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "portfolio",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.bf22f6a91d07f53e86b3.js",
    "revision": "673f5b3dcf137e0de015dddb44dec2cb"
  },
  {
    "url": "/_nuxt/layouts/default.a486d4ae4c3664dde50c.js",
    "revision": "5d8c0360bdf9349c524269313b2ce211"
  },
  {
    "url": "/_nuxt/manifest.e521edcf5cdfca6da3ae.js",
    "revision": "52ffc1072a999e5ae5a406f2d7df7201"
  },
  {
    "url": "/_nuxt/pages/index.de01e14a59e619f5a76c.js",
    "revision": "7cdd8516530715020f884eaad4a8d6da"
  },
  {
    "url": "/_nuxt/vendor.1a87f6f65ff10f5e4230.js",
    "revision": "3cb16ff24be47808c702c5f0049e036c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

