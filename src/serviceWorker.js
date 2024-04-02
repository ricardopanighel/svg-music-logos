// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
export const registerServiceWorker = () => {
  if (navigator.serviceWorker.controller) {
    console.log(
      '[PWA Builder] active service worker found, no need to register',
    )
  } else {
    // Register the ServiceWorker
    navigator.serviceWorker
      .register('service-worker.js', {
        scope: './',
      })
      .then((reg) => {
        console.log(
          `[PWA Builder] Service worker has been registered for scope: ${reg.scope}`,
        )
      })
  }
}
