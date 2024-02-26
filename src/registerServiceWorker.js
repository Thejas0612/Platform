const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export default function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

<<<<<<< HEAD
    window.addEventListener("load", () => {
=======
    window.addEventListener('load', () => {
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
<<<<<<< HEAD
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
=======
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
<<<<<<< HEAD
              console.log("New content is available; please refresh.");
=======
              console.log('New content is available; please refresh.');
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
<<<<<<< HEAD
              console.log("Content is cached for offline use.");
=======
              console.log('Content is cached for offline use.');
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
            }
          }
        };
      };
    })
<<<<<<< HEAD
    .catch((error) => {
      console.error("Error during service worker registration:", error);
=======
    .catch(error => {
      console.error('Error during service worker registration:', error);
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
    });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
<<<<<<< HEAD
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get("content-type").indexOf("javascript") === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
=======
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
<<<<<<< HEAD
      console.log("No internet connection found. App is running in offline mode.");
=======
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
    });
}

export function unregister() {
<<<<<<< HEAD
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
=======
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
>>>>>>> 7ab059954ea3281d4c8d01e2ca44e52cc22a4859
      registration.unregister();
    });
  }
}
