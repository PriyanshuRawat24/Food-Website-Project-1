$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
});


$(document).ready(function(){
    $('.wish-click').click(function(e){
        e.preventDefault();
        $(this).toggleClass('wishlisted');
    })
});
  
