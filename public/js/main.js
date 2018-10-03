$( document ).ready(function() {
  $('body').css({ "display" : "block" });
  $('.fadeinup-animate').css({ "opacity" : "0" });

  //fadeinup animation
  $('.fadeinup-animate').waypoint(function() {
    $(this.element).addClass('fadeinup');
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
        breakpoint: 1070,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
  
  
////about
  //sticky-nav
  var sticky = new Waypoint.Sticky({
    element: $('#about-nav')[0]
  });
  
  $('#introduction').waypoint(function() {
     $('.intro-content').addClass('fadeInLeft'); 
  }, { offset: '100%'});
  
  
  //scroll animation 
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
    
   
   //highlight about page nav
   $(window).scroll(function() {
    var position  = window.pageYOffset;

    $('.section').each(function() {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      var navLinks = $('#about-nav li a');
      var navHeight = $('#about-nav').height();
      
      if(position >= target - navHeight) {
        navLinks.removeClass('current');
        $('#about-nav li a[href="#' + id + '"]').addClass('current');
      }
    });
   });
   
   
   
   //menu
  
    
});