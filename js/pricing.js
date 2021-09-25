let stickyPosition = document.getElementById("stickyPosition");
let header = document.getElementById("header");

let sticky = stickyPosition.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();
$(window).on("load resize orientationchange", function () {
  $(".future__inner-row").each(function () {
    var $carousel = $(this);

    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 980) {
      if ($carousel.hasClass("slick-initialized")) {
        $carousel.slick("unslick");
      }
    } else {
      if (!$carousel.hasClass("slick-initialized")) {
        $carousel.slick({
          dots: true,
          infinite: false,
          speed: 300,
          arrows: false,
          slidesToScroll: 1,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 4,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 440,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 0,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    }
  });
});
