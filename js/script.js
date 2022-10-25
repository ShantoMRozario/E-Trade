// Feahter Icon 
feather.replace();

//Modal
let search = document.querySelector(".search input")
let modal = document.querySelector(".modal_body")

search.addEventListener('click', function () {

  modal.classList.toggle("show_modal");
})

//New arrivals section overflow container slider
let new_arrival = document.querySelector ("#new_arrival");
let silder_container = document.querySelector (".silder_container");
let width = silder_container.offsetWidth;
new_arrival.style.marginLeft = `calc((100% - ${width}px)/2)` 


// close button
$(function () {
  // getoffer close btn
  $('.close_btn').click(function () {
    $(".get_offer").slideUp(500)
  })



})
$(function () {
  // Modal close btn 
  $('.m_close_btn button').click(function () {
    modal.classList.remove("show_modal")
  })


// Swiper Js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});



// Slick slider for product section

$('.slide_wrapper').slick({
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll:2,
  dots: false,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  prevArrow:'.product_prev_arrow',
  nextArrow:'.product_next_arrow',
});


// slick slider for best seller section

$('.sale_slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  speed: 400,
  dots: false,
  arrows: true,
  prevArrow:'.b_s_prev_arrow',
  nextArrow:'.b_s_next_arrow',
});


// slick slider for explore product section

$('.explore_slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  speed: 400,
  dots: false,
  arrows: true,
  prevArrow:'.ex_prev_arrow',
  nextArrow:'.ex_next_arrow',
});

// slick slider for Feedback section

$('.feedback_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  dots: false,
  arrows: true,
  prevArrow:'.fb_prev_arrow',
  nextArrow:'.fb_next_arrow',
  centerMode: true,
  centerPadding: "0px",
});
// slick slider for new arrival 2 section

$('.newarrival2_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 400,
  dots: false,
  arrows: true,
  prevArrow:'.newa2_prev_arrow',
  nextArrow:'.newa2_next_arrow',
});

// explore product active class section
var dots = '.color_btn span';

$(dots).on('click', function(){
    $(dots).removeClass('active');
    $(this).addClass('active');
});

})

// Count down timer
var countDownDate = new Date ("Dec 25, 2022 00:00:00").getTime();
var x = setInterval(function(){
  var now = new Date ().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours ;
  document.getElementById("minutes").innerHTML = minutes ;
  document.getElementById("seconds").innerHTML = seconds ;
},1000);

// Current year for Copyright
var date = new Date();
var c_year = date.getFullYear();
document.getElementById("c_year").innerHTML = c_year;

// AOS js
AOS.init();