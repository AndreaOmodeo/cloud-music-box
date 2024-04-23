/** @type {import('next').NextConfig} */


// import withPWA from "next-pwa";

// const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// // import runtimeCaching from 'next-pwa/cache.js'
// const runtimeCaching = [
//   {
//     urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
//     handler: 'CacheFirst',
//     options: {
//       cacheName: 'google-fonts-webfonts',
//       expiration: {
//         maxEntries: 4,
//         maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
//       }
//     }
//   },
//   {
//     urlPattern: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'google-fonts-stylesheets',
//       expiration: {
//         maxEntries: 4,
//         maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-font-assets',
//       expiration: {
//         maxEntries: 4,
//         maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-image-assets',
//       expiration: {
//         maxEntries: 64,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\/_next\/image\?url=.+$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'next-image',
//       expiration: {
//         maxEntries: 64,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:mp3|wav|ogg)$/i,
//     handler: 'CacheFirst',
//     options: {
//       rangeRequests: true,
//       cacheName: 'static-audio-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:mp4)$/i,
//     handler: 'CacheFirst',
//     options: {
//       rangeRequests: true,
//       cacheName: 'static-video-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:js)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-js-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:css|less)$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'static-style-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\/_next\/data\/.+\/.+\.json$/i,
//     handler: 'StaleWhileRevalidate',
//     options: {
//       cacheName: 'next-data',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: /\.(?:json|xml|csv)$/i,
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'static-data-assets',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       }
//     }
//   },
//   {
//     urlPattern: ({ url }) => {
//       const isSameOrigin = self.origin === url.origin
//       if (!isSameOrigin) return false
//       const pathname = url.pathname
//       // Exclude /api/auth/callback/* to fix OAuth workflow in Safari without impact other environment
//       // Above route is default for next-auth, you may need to change it if your OAuth workflow has a different callback route
//       // Issue: https://github.com/shadowwalker/next-pwa/issues/131#issuecomment-821894809
//       if (pathname.startsWith('/api/auth/')) return false
//       if (pathname.startsWith('/api/')) return true
//       return false
//     },
//     handler: 'NetworkFirst',
//     method: 'GET',
//     options: {
//       cacheName: 'apis',
//       expiration: {
//         maxEntries: 16,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       },
//       networkTimeoutSeconds: 10 // fall back to cache if api does not response within 10 seconds
//     }
//   },
//   {
//     urlPattern: ({ request, url: { pathname }, sameOrigin }) =>
//       request.headers.get("RSC") === "1" && request.headers.get("Next-Router-Prefetch") === "1" && sameOrigin && !pathname.startsWith("/api/"),
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "pages-rsc-prefetch",
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60, // 24 hours
//       },
//     },
//   },
//   {
//     urlPattern: ({ request, url: { pathname }, sameOrigin }) => request.headers.get("RSC") === "1" && sameOrigin && !pathname.startsWith("/api/"),
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "pages-rsc",
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60, // 24 hours
//       },
//     },
//   },
//   {
//     urlPattern: ({ url }) => {
//       const isSameOrigin = self.origin === url.origin
//       if (!isSameOrigin) return false
//       const pathname = url.pathname
//       if (pathname.startsWith('/api/')) return false
//       return true
//     },
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'others',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 24 * 60 * 60 // 24 hours
//       },
//       networkTimeoutSeconds: 10
//     }
//   },
//   {
//     urlPattern: ({ url }) => {
//       const isSameOrigin = self.origin === url.origin
//       return !isSameOrigin
//     },
//     handler: 'NetworkFirst',
//     options: {
//       cacheName: 'cross-origin',
//       expiration: {
//         maxEntries: 32,
//         maxAgeSeconds: 60 * 60 // 1 hour
//       },
//       networkTimeoutSeconds: 10
//     }
//   }
// ]

// export default withPWA({
//   dest: "public",
//   runtimeCaching,
//   register: false,
//   buildExcludes: [/app-build-manifest.json$/],
//   // additionalManifestEntries: [
//   //   { url: "/index.html", revision: null }
//   // ],
// })({
//   basePath: basePath,
//   reactStrictMode: true,
//   output: "export",
// });

import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
});

export default withSerwist({
  basePath: basePath,
  reactStrictMode: true,
  output: "export",
});
