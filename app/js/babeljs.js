"use strict";

particlesJS.load('particles-js', 'js/particlesjs-config.json');
particlesJS.load('particle', 'js/particlesjs-config.json');
$(window).on("load", function (e) {
  AOS.init({
    duration: 1200,
    once: true
  });
});
var sectionOffsets = [];
$(".navigation__navItem").each(function (e) {
  var sectionClass = $(this).data("link");
  sectionOffsets.push($(sectionClass).offset().top);
});
var prevIndex = -1;
var win = $(window);
var interval = null;
$(window).on("scroll", function (e) {
  clearTimeout(interval);
  interval = setTimeout(function () {
    var windowOffsetY = win.scrollTop();
    var sectionIndex = sectionOffsets.findIndex(function (pos) {
      return windowOffsetY <= pos;
    });
    if (prevIndex === sectionIndex) return;
    var prevMenuItem = $(".navigation__navItem .hr").get(prevIndex);
    var currMenuItem = $(".navigation__navItem").get(sectionIndex);
    $(prevMenuItem).removeClass("hr-active");
    $(currMenuItem).find(".hr").addClass("hr-active");
    prevIndex = sectionIndex;
  }, 10);
});
$(".navigation__navItem").on("click", function (e) {
  var sectionSelector = $(this).data("link");
  $('html, body').animate({
    scrollTop: $(sectionSelector).offset().top
  }, 2000, 'swing');
});
setInterval(function () {
  var red = 254;
  var green = Math.round(Math.random() * 200) + 50;
  var blue = Math.round(Math.random() * 100) + 25;
  $(".about__particle").css("background-color", "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"));
  $(".contact__writeUs").css("color", "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"));
  $(".contact__gmail").css("color", "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"));
}, 2000);