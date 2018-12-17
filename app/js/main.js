particlesJS.load('particles-js', 'js/particlesjs-config.json')

particlesJS.load('particle', 'js/particlesjs-config.json')

$( window ).on("load", function(e) {
  AOS.init({
    duration: 1200,
    once: true
  })
})

let startOffsetY = $(".navigation").offset().top - $(window).scrollTop()
$(window).on("scroll", function(e) {
  if (
    $(window).scrollTop() - $(".navigation").height() - startOffsetY < 
    $(".navigation").offset().top - $(window).scrollTop()
  ) 
    $(".navigation").css({top: (startOffsetY - $(window).scrollTop()/3) + 'px' })
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

    const prevMenuItem = $(".navigation__navItem .hr").get(prevIndex)
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
  const red = Math.round(Math.random() * 70) + 74;
  const green = Math.round(Math.random() * 60) + 84;
  const blue = Math.round(Math.random() * 50) + 54;
  $(".about__particle").css("background-color", `rgb(${red}, ${green}, ${blue})`)
}, 2000) 