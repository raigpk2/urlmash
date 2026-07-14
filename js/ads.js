/**
 * Ad Rotator Logic
 * Manages ad URL rotation with a cooldown timer using localStorage.
 */
const ADSTERRA_URL = "https://bonnetdetectiveshomecoming.com/rqbamyp64c?key=866bc5ba1e525b6c9b55bb8d072f8b91";
const MONETAG_URL = "https://bonnetdetectiveshomecoming.com/rqbamyp64c?key=866bc5ba1e525b6c9b55bb8d072f8b91";
const COOLDOWN = 120000;

function getAdURL() {
  const now = Date.now();
  let net = localStorage.getItem("net");
  let time = localStorage.getItem("time");

  if (!net || !time) {
    localStorage.setItem("net", ADSTERRA_URL);
    localStorage.setItem("time", now);
    return ADSTERRA_URL;
  }

  if (now - time >= COOLDOWN) {
    net = net === ADSTERRA_URL ? "monetag" : ADSTERRA_URL;
    localStorage.setItem("net", net);
    localStorage.setItem("time", now);
  }

  return net === ADSTERRA_URL ? ADSTERRA_URL : MONETAG_URL;
}
