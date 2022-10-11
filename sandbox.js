jQuery(document).ready(function($) {

  $(".navbar-toggler-icon").click(function(){
    $(".side-bar-menu").addClass("show-side-bar");
    $("body").addClass("not-scrollable");
  });
  $(".close-button").click(function(){
    $(".side-bar-menu").removeClass("show-side-bar");
    $("body").removeClass("not-scrollable");
  });


  var header = $(".navigation-container");
  
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });

  var lastScrollTop = 0;
  $(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st > lastScrollTop){
      //âíèç
    $('.navigation-container').addClass('scrolling_down');
    $('.navigation-container').removeClass('scrolling_up');
  } else {
      // ââåðõ 
    $('.navigation-container').addClass('scrolling_up');
    $('.navigation-container').removeClass('scrolling_down');
  }
  lastScrollTop = st;
  });	




  $('.works-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  AOS.init({
    duration: 1200,
  })
});


