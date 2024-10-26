// src/serviceWorkerRegistration.ts

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.\d+){0,2}\.\d+$/)
  );
  
  export function register(config?: {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
  }) {
    if ('serviceWorker' in navigator) {
      // Ensure PUBLIC_URL is defined or use a fallback
      const publicUrl = process.env.PUBLIC_URL
        ? new URL(process.env.PUBLIC_URL, window.location.href)
        : new URL('/', window.location.href); // Fallback to root URL
  
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${publicUrl}/service-worker.js`; // Use publicUrl here
  
        if (isLocalhost) {
          checkValidServiceWorker(swUrl, config);
        } else {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl: string, config?: any) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        if (config && config.onSuccess) {
          config.onSuccess(registration);
        }
  
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker && config && config.onUpdate) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('New content is available; please refresh.');
                  config.onUpdate(registration);
                } else {
                  console.log('Content is cached for offline use.');
                  if (config && config.onSuccess) {
                    config.onSuccess(registration);
                  }
                }
              }
            };
          }
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl: string, config?: any) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }
  