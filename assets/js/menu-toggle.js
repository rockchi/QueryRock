$(document).ready(function() {
    //slide out toggle for menu
  $(".buttonbox").click(function(){
    $(".menu").slideToggle("slow", function(){
    });
  });


  //sticky scroll effect - menu sticks (classes added) when scroll > Viewheight - Height of navbar
  $(window).scroll(function() {
      var ViewportHeight = $(window).height();
      var ViewportHeight = ViewportHeight-60;

      if ($(this).scrollTop() >= ViewportHeight) {
        //logs point of viewport height transition
        console.log("You've scrolled" + ViewportHeight + "pixels.");
        $(".menubar").addClass("sticky");
      }
      else {
        $(".menubar").removeClass("sticky");
      }
  });

  //navigation smooth scrolling
  $('.menu ul li a').click(function(event) {
      var id = $(this).attr("href");
      var target = $(id).offset().top;
      $('html, body').animate({
          scrollTop: target
      }, 500);

      event.preventDefault();
  });

});
