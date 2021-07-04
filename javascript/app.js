// Carousel

$(document).ready(() => {
  $(".owl-theme").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });
});

const humberger = document.querySelector(".humburger");
const link = document.querySelector(".nav-link2");

humberger.addEventListener("click", () => {
  link.classList.toggle("open");
});

// Swipe slider
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 3,
    depth: 0,
    modifier: 1,
    slideShadows: true,
    loop: true,
  },
});


// Slick slider
$('.slick-gerak').slick({
  dots: false,
  infinite: false,
  speed: 900,
  slidesToShow:2,
  slidesToScroll: 2,
  prevArrow: '.arrow-prev',
  nextArrow: '.arrow-next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
