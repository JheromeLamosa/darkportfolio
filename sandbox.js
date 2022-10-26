jQuery(document).ready(function($) {  

  setTimeout(
    function() 
    {
      $(".loader-wrapper").addClass("removed-already-done");
      $("body").removeClass("not-scrollable-loader");
    }, 2000);


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



  AOS.init({
    duration: 1200,
  })

  $(".skills-main-container").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });



  
});


