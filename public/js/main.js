$( document ).ready(function() {
  $('body').css('display', 'block');
  $('.second-banner-description').css('opacity', 0);
  $('.second-banner-img').css('opacity', 0);
  $('.home-img-links .container').css('opacity', 0);
  $('.kindness').css('opacity', 0);

  ////index
  //second banner fadeinup
  $('.second-banner').waypoint(function() {
    $('.second-banner-description').addClass('fadeIn');
  }, { offset: '90%'});
  $('.second-banner').waypoint(function() {
    $('.second-banner-img').addClass('fadeInUp');
  }, { offset: '85%'});
  
  //third banner fadein
  $('.kindness').waypoint(function() {
    $('.kindness').addClass('fadeIn');
  }, { offset: '100%'});
  $('.share').waypoint(function() {
    $('.share').addClass('fadeIn');
  }, { offset: '100%'});
  $('.follow').waypoint(function() {
    $('.follow').addClass('fadeIn');
  }, { offset: '100%'});
  
  //img links fade in up
  $('.home-img-links').waypoint(function() {
    $('.home-img-links .container').addClass('fadeInUp');
  }, { offset: '100%'});
  
  //testimonials slick slider  
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
          slidesToShow: 1
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
  
  ////about
  $('.about-indicator').waypoint(function() {
     $('.about-indicator').toggleClass('sticky'); 
  }, { offset: '0%'});
});