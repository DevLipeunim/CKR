document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 3000)
});

// Animation on scroll
AOS.init({
  duration: 900,
  easing: "slide",
});

(function ($) {
  "use strict";
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  //   full height
  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight(); //call that function

  // navbar scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");
      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }

      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }
        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }

      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  $.Scrollax();


  /*==================== CHANGE BACKGROUND HEADER ====================*/
// show scroll top
function scrollHeader() {
  const nav = document.getElementById("ftco-navbar");
  // when the scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 130) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
  //   carousel
  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class = 'ion-ios-arrow-back'></span>",
        "<span class = 'ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $(".carousel-testimony").owlCarousel({
      loop: true,
      autoplay: true,
      center: true,
      margin: 30,
      nav: false,
      stagePadding: 0,
      items: 1,
      navText: [
        "<span class = 'ion-ios-arrow-back'></span>",
        "<span class = 'ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  var counter = function () {
    $("#section-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_seperator_number_step = $.animateNumber.numberStepFactories.separator(
            ","
          );
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_seperator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;
          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  $("#book_date").datepicker({
    format: "m/d/yyyy",
    autoclose: true,
  });
  $("#book_time").timepicker();
})(jQuery);

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
// modalCloseBtn.addEventListener('click', modalCloseFunc);

// show popUP 
function popUp() {
  const popUp = document.getElementById("popUp");
  // when the scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 150) popUp.classList.add("show-pop");
  else popUp.classList.remove("show-pop");
}
window.addEventListener("scroll", popUp);

// show Whatsapp icon
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 520) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

function populate(s1, s2, s3){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  var s3 = document.getElementById(s3);
  s2.innerHTML = "";
  s3.innerHTML = "";

  if (s1.value == "Cake"){
      var optionArray = ["|","Black Forest Cake|Black Forest Cake","Red Velvet Cake|Red Velvet Cake","Yellow Butter Cake|Yellow Butter Cake"];
      var optionArrayS = ["|","1000|1000","2500|2500","4000|4000"];
  } else if(s1.value == "Yoghurt") {
      var optionArray = ["|","vanilla|Vanilla","strawberry|Strawberry","chocolate|Chocolate"];
      var optionArrayS = ["|","1000|1000","2500|2500","4000|4000"];
  } else if(s1.value == "Pastries"){
      var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
  } else if(s1.value == "Interior decoration"){
    var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
} else if(s1.value == "Party decoration"){
  var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
} else if(s1.value == "Event planning"){
  var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
} else if(s1.value == "Frames"){
  var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
} else if(s1.value == "Mugs"){
  var optionArray = ["|","mustang|Mustang","shelby|Shelby"];
} else {
  alert("Please choose a category")
}
  for(var option in optionArray){
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
  for(var optionS in optionArrayS){
    var pairS = optionArrayS[optionS].split("|");
    var newOptionS = document.createElement("option");
    newOptionS.value = pairS[0];
    newOptionS.innerHTML = pairS[1];
  s3.options.add(newOptionS);
}
}

// ===== The date that is placed at the footer ====
const date = new Date();
const cYear = date.getFullYear();
document.querySelector(".year_change").innerHTML = cYear;
