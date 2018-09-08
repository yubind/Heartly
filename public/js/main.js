$( document ).ready(function() {
  $('body').css('display', 'block');
  $('.what-content-container').css('opacity', 0);
  $('.what-img-container').css('opacity', 0);
  $('.kindness').css('opacity', 0);
  $('.home-img-links .container').css('opacity', 0);
  $('.intro-content').css('opacity', 0);

  ////index
  //what fade in 
  $('.what').waypoint(function() {
    $('.what-content-container').addClass('fadeIn');
  }, { offset: '90%'});
  
  $('.what').waypoint(function() {
    $('.what-img-container').addClass('fadeInUp');
  }, { offset: '85%'});
  
  
  //how fade in 
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
  }, { offset: '80%'});
  
  
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
  //sticky-indicator
  $('#about-indicator').waypoint(function() {
     $('#about-indicator').toggleClass('sticky'); 
  }, { offset: '0%'});
  
  $('#introduction').waypoint(function() {
     $('.intro-content').addClass('fadeInLeft'); 
  }, { offset: '100%'});
  
  
  //scroll to element 
  $('a[href^="#"]').on('click', function(e) {
    
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});