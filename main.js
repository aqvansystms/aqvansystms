$(document).ready(function() {
  "use strict";

  $(window).scroll(function() {
    var nav = $(".navbar");
    if ($(window).scrollTop() > 1000) {
      $(".navbar").css("background-color", "#2B3137 !important");
    } else {
      $(".navbar").css("background-color", "#transparent");
    }
  });
});

$(".links a[href^='#']").on("click", function(e) {
  e.preventDefault();

  var hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    400,
    function() {
      window.location.hash = hash;
    }
  );
});

$(".btns a[href^='#']").on("click", function(e) {
  e.preventDefault();

  var hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    400,
    function() {
      window.location.hash = hash;
    }
  );
});
