$(document).ready(function() {
    $(".buttonbox").click(function(){
      $(".menu").slideToggle("slow", function(){
      });
  });

  $(window).scroll(function() {
      var ViewportHeight = $(window).height();
      var ViewportHeight = ViewportHeight - 60

      if ($(this).scrollTop() >= ViewportHeight) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
        console.log("You've scrolled" + ViewportHeight + "pixels.");
        $(".menubar").addClass("sticky");
      }
      else {
        $(".menubar").removeClass("sticky");
      }
  });
});
