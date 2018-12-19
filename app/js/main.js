particlesJS.load('particles-js', 'js/particlesjs-config.json')

particlesJS.load('particle', 'js/particlesjs-config.json')

$( window ).on("load", function(e) {
  AOS.init({
    duration: 1200,
    once: true
  })
})

let sectionOffsets = []
$(".navigation__navItem").each(function(e) {
  const sectionClass = $(this).data("link")
  sectionOffsets.push($(sectionClass).offset().top)
})

let prevIndex = -1
const win = $(window)
let interval = null
$(window).on("scroll", function(e) {
  clearTimeout(interval)
  interval = setTimeout(function() {

    const windowOffsetY = win.scrollTop()
    const sectionIndex = sectionOffsets.findIndex(pos => windowOffsetY <= pos)

    if(prevIndex === sectionIndex) return   
       
    let prevMenuItem = $(".navigation__navItem .hr").get(prevIndex)
    const currMenuItem = $(".navigation__navItem").get(sectionIndex)

    $(prevMenuItem).removeClass("hr-active")
    $(currMenuItem).find(".hr").addClass("hr-active")

    prevIndex = sectionIndex

  }, 10)
})

$(".navigation__navItem").on("click", function(e) {
  let sectionSelector = $(this).data("link")

  $('html, body').animate({
      scrollTop: $(sectionSelector).offset().top
  }, 2000, 'swing')
})

setInterval(function() {
  const red = 254;
  const green = Math.round(Math.random() * 200) + 50;
  const blue = Math.round(Math.random() * 100) + 25;
  $(".about__particle").css("background-color", `rgb(${red}, ${green}, ${blue})`)
  $(".contact__writeUs").css("color", `rgb(${red}, ${green}, ${blue})`)
  $(".contact__gmail").css("color", `rgb(${red}, ${green}, ${blue})`)

}, 2000) 
