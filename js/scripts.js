var noiseWindow;

function startNoise() {
  noiseWindow = window.open('https://www.google.com/search?btnI&q=filetype:html+cats');
  function change_noise() {
    let a = nouns[Math.floor(Math.random()*nouns.length)];
    let b = nouns[Math.floor(Math.random()*nouns.length)];
    let url = "https://www.google.com/search?btnI&q=filetype:html+" + a + " " + b;
    noiseWindow.location.href = url;
    setTimeout(() => {
      change_noise();
    }, 8000);
  };
  change_noise();
};

function stopNoise() {
  noise_win.close();
}

(() => {
  documnet.getElementById('start').addEventListener("click", startNoise);
  documnet.getElementById('stop').addEventListener("click", stopNoise);
})();
