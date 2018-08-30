$( document ).ready(function() {
  $('body').css('display', 'block');  
  
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 100) {
      $('.second-banner-content').addClass('animated fadeInUp slow');
      $('.second-banner-img').addClass('animated fadeInUp slow');
    }
  });
  
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 300) {
      $('.third-banner-content').addClass('animated fadeIn slow');
    }
  });
  


    
  $('.testimonial-carousel').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
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