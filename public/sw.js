if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let t={};const d=e=>i(e,s),r={module:{uri:s},exports:t,require:d};a[s]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"245fb0afa198ce8cf7cc740fc5c31953"},{url:"/_next/static/chunks/216-4c809d9b0990574b.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/840-2feae8a3cb13ce47.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/app/layout-f6bfcb01330b478d.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/app/page-8666fb564794f771.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/b026e9af-ff72568e282f74d6.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/main-3bfd2df4b9ab4f60.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/main-app-9c706ffbe0e838c3.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/pages/_app-641854b241989486.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/pages/_error-57795a61f35c92ae.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2d6df4803aa9bc65.js",revision:"ny6-jXdxZafgwgpCqq-Tk"},{url:"/_next/static/css/0a13157e1e98ea37.css",revision:"0a13157e1e98ea37"},{url:"/_next/static/media/1mg.0659676b.png",revision:"d2530ed4760d221c80287bad12237031"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/abott.19093b84.png",revision:"8da4adc9b8e164631b3a256621abf7cf"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/amazon.55f43ce1.svg",revision:"fea38bbfc301234ea766a621e1998e91"},{url:"/_next/static/media/apollo.f4b7a4ac.png",revision:"d76386fafc48205fc70f9116b6a86ec1"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/book1.f711374f.jpg",revision:"0819360ee29bfbd328a47bc6857151d0"},{url:"/_next/static/media/book2.11c3f99b.jpg",revision:"283102b0877ef69b5e644a70ffb7ea95"},{url:"/_next/static/media/botim.fb785be8.png",revision:"bde7574bfdaa514853e7acb26ce6f941"},{url:"/_next/static/media/bupa.7ec87266.png",revision:"c67033518539a8af25c5261bd4881083"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/cipla.29197745.png",revision:"bcb18a7d42583dd17200cdc000fed516"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/de4067987e9e1eee-s.p.otf",revision:"51fd7406327f2b1dbc8e708e6a9da9a5"},{url:"/_next/static/media/divis.f66fb1d0.png",revision:"12105a970511fccf2b081fc5bb34a172"},{url:"/_next/static/media/facebook.1fd97268.png",revision:"922fb5575fe767699ace81a865b7fc5e"},{url:"/_next/static/media/googlebusiness.b3708a8c.png",revision:"7e6bbe20e38fdb959f583206c345a6b0"},{url:"/_next/static/media/googlerating1.4e07f59c.png",revision:"f8373aed34fce9dfa2a3c22b3234e65a"},{url:"/_next/static/media/googlerating2.562c6aa7.png",revision:"f9e3d55b8aee5cc5384b00b46b8a0eaf"},{url:"/_next/static/media/hdfcergo.e4d44dd7.png",revision:"b1997e44d07cbec6ab30b21c94147bd8"},{url:"/_next/static/media/icici.21a8339a.png",revision:"c0964e07cde75546c4592ceb9e6de25a"},{url:"/_next/static/media/justdial.884cadb2.svg",revision:"268129594deb3d2a1d136ea7bee0ac5c"},{url:"/_next/static/media/justdial.ff7b4689.png",revision:"0e8959f99aa765f799a286df15f74ab5"},{url:"/_next/static/media/link.d1309cce.svg",revision:"10d82bca6202482a3110c78a479ddea3"},{url:"/_next/static/media/linkedin.8e74462b.png",revision:"06b058c6174ba24e6d5ad705d77db5db"},{url:"/_next/static/media/linkedin.ace4f889.svg",revision:"078d249a6bebab537a699476fcaf5c2e"},{url:"/_next/static/media/lupin.58fa4aff.svg",revision:"b0fc9d431f06f70b08592ab281d4c19d"},{url:"/_next/static/media/lybrate.59c56c5f.png",revision:"cf3c9be790c293d7e3059f2501a71436"},{url:"/_next/static/media/medicare.17842cbf.png",revision:"246ff25a95e1ccf5e43c2b99ee39ef04"},{url:"/_next/static/media/pharmeasy.a4f960fc.png",revision:"1bf5d91493722620d30c6f229466e33b"},{url:"/_next/static/media/phone.4238cebe.svg",revision:"86860fe9c1fc81a461c07af5f5ce5724"},{url:"/_next/static/media/practo.17a6e5e2.png",revision:"646deebb9210919a6ec7168a36a5903e"},{url:"/_next/static/media/practo.320d833f.png",revision:"efbd1b2a813987a8f0d46d29373fa53b"},{url:"/_next/static/media/profile.82f6e9cf.png",revision:"99478bc8709a35947c7e1017a635e34d"},{url:"/_next/static/media/reddy.77d03c48.png",revision:"2f8e4f4f62b940f43c36db3f00ce12ef"},{url:"/_next/static/media/sbi.1b17950d.png",revision:"44d9d258c14c0fc80dd22805babd4fc1"},{url:"/_next/static/media/startinsurance.2cf21935.png",revision:"c27616dbb228bc0f587f5230002c636a"},{url:"/_next/static/media/torrent.02a21adc.png",revision:"dfe70bac4ec50867cda25b18b299ce75"},{url:"/_next/static/media/whatsapp.8045b090.svg",revision:"2a3d5baed8a7092d4d60f6c9101874f0"},{url:"/_next/static/media/youtube.59ecb2ba.png",revision:"8b30578ef9c9d661bddf0ec7f5deb828"},{url:"/_next/static/media/youtube1.ad7c6e76.png",revision:"fd497201cd902d6241a2eca92e9db6bf"},{url:"/_next/static/media/youtube2.1adef730.png",revision:"19c7bc640c0bd26c0143cb57b00a5838"},{url:"/_next/static/media/youtube3.afddd2fb.png",revision:"c7d21f8fd83d30dc273c083f9942c741"},{url:"/_next/static/media/zydus.3019ee31.png",revision:"ac6afed16d411beb78f836da89d678bc"},{url:"/_next/static/ny6-jXdxZafgwgpCqq-Tk/_buildManifest.js",revision:"c94471ab3d99c13032b8cc37942057e7"},{url:"/_next/static/ny6-jXdxZafgwgpCqq-Tk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"549a54e09413b7e622a77ac81204e6f5"},{url:"/android-chrome-512x512.png",revision:"caf48e25851e868316b2c902ab4d4a61"},{url:"/android-icon-144x144.png",revision:"4b429bab7b5d5d0ae4bb760a5e2642df"},{url:"/android-icon-192x192.png",revision:"e226126bba6622631397161283b43d28"},{url:"/android-icon-36x36.png",revision:"4db242ba43275a0121707e988f178d24"},{url:"/android-icon-48x48.png",revision:"94ca0cd42c46bd6a05e880acc0fe57d0"},{url:"/android-icon-72x72.png",revision:"a48529dc1ce91e56aa0b03f827b9d9b0"},{url:"/android-icon-96x96.png",revision:"3ec00cccca48e6bc97710b66d6bc7d3a"},{url:"/apple-icon-114x114.png",revision:"af8123a5b1266e27ae7255b09ce05aef"},{url:"/apple-icon-120x120.png",revision:"3162fcbb470b46f5b7df6b08e8aea3d3"},{url:"/apple-icon-144x144.png",revision:"4b429bab7b5d5d0ae4bb760a5e2642df"},{url:"/apple-icon-152x152.png",revision:"d1b85192e09b20ba73f2abf127dab45d"},{url:"/apple-icon-180x180.png",revision:"ddc36cd8c48d2b1b138832bd686d7064"},{url:"/apple-icon-57x57.png",revision:"3150fcb812b8598da81e6291cadaa946"},{url:"/apple-icon-60x60.png",revision:"16c9c5687527fc2a1c557e3936abd9b9"},{url:"/apple-icon-72x72.png",revision:"a48529dc1ce91e56aa0b03f827b9d9b0"},{url:"/apple-icon-76x76.png",revision:"03f61695652aca41852a28bb327d0863"},{url:"/apple-icon-precomposed.png",revision:"c520585575997a3dbc81c56c1b4b39c4"},{url:"/apple-icon.png",revision:"c520585575997a3dbc81c56c1b4b39c4"},{url:"/apple-touch-icon.png",revision:"933220175a146ab44cbdc42bc5af14dd"},{url:"/favicon-16x16.png",revision:"43c5bd05315bc9d4488e8e927a36199d"},{url:"/favicon-32x32.png",revision:"e6c39869bb6fc3e20a8f76bfb29ade58"},{url:"/favicon.ico",revision:"9295c0058549777942118572b796402d"},{url:"/icons/icon-192x192.png",revision:"d5c2bcb149f2689d14788f5f35a94335"},{url:"/icons/icon-256x256.png",revision:"3b117264abe4ea2dd91cefd42b9ca7c7"},{url:"/icons/icon-384x384.png",revision:"ede96af2e90b6316c83c8c00107ba68a"},{url:"/icons/icon-512x512.png",revision:"6aaaca75288315b48e906dc8ad9e0f7c"},{url:"/icons/maskable.png",revision:"624c8cafa6c45f88589a8566a9915d8b"},{url:"/logo.png",revision:"6aaaca75288315b48e906dc8ad9e0f7c"},{url:"/manifest.json",revision:"5656889757cd8b04d77abf28de10d5f6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
