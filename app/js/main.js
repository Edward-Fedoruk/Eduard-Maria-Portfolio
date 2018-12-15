particlesJS.load('particles-js', '../libs/particles/particlesjs-config.json')

particlesJS.load('particle', '../libs/particles/particlesjs-config.json')

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
    $(".navigation").css({top: (startOffsetY - $(window).scrollTop()/2) + 'px' })
})

$(".navigation__navItem").on("click", function(e) {
  let section = $(this).data("link")
  
  $(".navigation__navItem .hr").each(function(e) {
    $(this).removeClass("hr-active")
  })

  $(this).find(".hr").addClass("hr-active")

  $('html, body').animate({
      scrollTop: $(section).offset().top
  }, 2000, 'swing')
})