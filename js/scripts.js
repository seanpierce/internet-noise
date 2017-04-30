var noise_win;

function startNoise() {
  noise_win = window.open('https://www.google.com/search?btnI&q=filetype:html+cats');
  function change_noise() {
    a = nouns[Math.floor(Math.random()*nouns.length)];
    b = nouns[Math.floor(Math.random()*nouns.length)];
    var url = "https://www.google.com/search?btnI&q=filetype:html+" + a + " " + b;
    noise_win.location.href=url;
    setTimeout(function() {
      change_noise();
    }, 8000);
  };
  change_noise();
};

function stopNoise() {
  noise_win.close();
}

$(document).ready(function() {

  $('#start').on('click', function() {
    startNoise();
  });
  $('#stop').on('click', function() {
    stopNoise();
  });

});
