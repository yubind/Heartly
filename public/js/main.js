$( document ).ready(function() {
    
$('.testimonial-carousel').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
});