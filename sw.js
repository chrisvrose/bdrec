if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"17782473bcc35bd2b5dad5ff3923b118"},{url:"/_next/static/3VBku6akSqbAKp8wpi0Yo/_buildManifest.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/3VBku6akSqbAKp8wpi0Yo/_ssgManifest.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/521-f09cc8ec8a8ed9540d43.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/671-6a890aff765829e2c9b4.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/pages/_app-cb990c441fbcabde411f.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/pages/index-70e1b54a94f933565c8d.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/pages/plot-52f261bc94f25162f949.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/_next/static/css/98a38d234e1b7d3d59e0.css",revision:"3VBku6akSqbAKp8wpi0Yo"},{url:"/about.txt",revision:"d03cabcc4e597be1b9ebd814a79919b1"},{url:"/android-chrome-192x192.png",revision:"76073bc35659fef678bdcd338b7be6de"},{url:"/android-chrome-512x512.png",revision:"fac71bce0f1f33a38271c6ab932d128f"},{url:"/apple-touch-icon.png",revision:"fc7e3ad5b5537f031c7e0cb998f5d320"},{url:"/favicon-16x16.png",revision:"8185fcb34ba17e028d0b5d17e3f4a94b"},{url:"/favicon-32x32.png",revision:"143e957ea2bfbbed1ef45b5dc04ee46d"},{url:"/favicon.ico",revision:"b7bd762c50bb13d5ff518826f35cd69c"},{url:"/site.webmanifest",revision:"72ebb1918d748d5b777e0d2924e1fa43"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
