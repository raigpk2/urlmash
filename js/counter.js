/**
 * Visitor Counter Logic
 * Fetches visitor count from counterapi.dev and updates the DOM.
 */
(function () {
  var NAMESPACE = "awildacastro";
  var KEY = "visitas";

  fetch("https://api.counterapi.dev/v1/" + NAMESPACE + "/" + KEY + "/up")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      document.getElementById("visit-number").textContent = data.count + " visitantes en línea";
    })
    .catch(function () {
      document.getElementById("visit-number").textContent = "Visitantes en línea";
    });
})();
