var noiseWindow

startNoise = () => {
  noiseWindow = window.open('https://www.google.com/search?btnI&q=filetype:html+cats')
  change_noise = () => {
    let noun1 = nouns[Math.floor(Math.random() * nouns.length)]
    let noun2 = nouns[Math.floor(Math.random() * nouns.length)]
    let url = "https://www.google.com/search?btnI&q=filetype:html+" + noun1 + " " + noun2
    noiseWindow.location.href = url
    setTimeout(() => {
      change_noise()
    }, 8000)
  }
  change_noise()
}

stopNoise = () => {
  noise_win.close()
}

document.getElementById('start').addEventListener("click", startNoise)
document.getElementById('stop').addEventListener("click", stopNoise)
