particlesJS.load('particles-js', '../libs/particles/particlesjs-config.json')

particlesJS.load('particle', '../libs/particles/particlesjs-config.json')

$( window ).on("load", function(e) {
  AOS.init({
    duration: 1200,
  })
})