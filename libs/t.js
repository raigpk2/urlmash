/**
 * Whos.amung.us Widget Loader
 * Dynamically loads the official third-party widget script to ensure 100% functionality 
 * and avoid maintaining minified third-party code locally, adhering to best practices.
 */
(function() {
  var script = document.createElement('script');
  script.src = 'https://waust.at/t.js';
  script.async = true;
  document.head.appendChild(script);
})();
