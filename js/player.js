/**
 * Video Player Logic
 * Handles random video selection, custom play button, and opening video in a new window with ad redirection.
 */
const playBtn = document.getElementById("customPlay");
const data = document.getElementById("videoData");
const list = data.dataset.src.split(",").map(v => v.trim());
const selected = list[Math.floor(Math.random() * list.length)];

playBtn.onclick = () => {
  const adURL = getAdURL();

  if (selected.endsWith(".mp4")) {
    const w = window.open("about:blank", "_blank");
    w.document.write(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<style>
html,body{margin:0;height:100%;background:#000;display:flex;justify-content:center;align-items:center;}
video{width:96%;max-width:1200px;height:88vh;object-fit:contain;border-radius:16px;}
</style>
</head>
<body>
<video id="v" src="${selected}" autoplay controls></video>
<script>
document.getElementById("v").onended = function() {
  location.href = "${adURL}";
};
<\/script>
</body>
</html>`);
    w.document.close();
  } else {
    window.open(selected, "_blank");
  }

  location.href = adURL;
};
