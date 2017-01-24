$(document).ready(function(){

console.log("Hello");
  
   /* addEventListener("click", function() {
    var el = document.documentElement,
      rfs = el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen 
    ;

    rfs.call(el);
});*/

    
// if i click people then link to people.html
// then fade in blur and dark background
// then fade in page info
    
    $(".nav1").click(function(){
    $(".content").fadeToggle();
    $('.fill').fadeToggle();
});
    function fullscreen()
      {
        
        var fullscrn = document.getElementsByClassName("fullscreen")[0];
        req= fullscrn.requestFullScreen || fullscrn.webkitRequestFullScreen || fullscrn.mozRequestFullScreen;
        req.call(fullscrn);
          


      }
    $('.full').click(fullscreen);
    
    
    $('.xde').click(function(){
            $('.inactive').css({"color":"white"});
            $('.xde').css({"color":"orange"});
              $('.bio').hide();
              $('#xde').fadeIn();
        });
    $('.tax').click(function(){
        $('.inactive').css({"color":"white"});
            $('.tax').css({"color":"orange"});
              $('.bio').hide();
              $('#tax').fadeIn();
        });
   $('.workday').click(function(){
       $('.inactive').css({"color":"white"});
            $('.workday').css({"color":"orange"});
              $('.bio').hide();
              $('#workday').fadeIn();
        });
    $('.service').click(function(){
        $('.inactive').css({"color":"white"});
            $('.service').css({"color":"orange"});
              $('.bio').hide();
              $('#service').fadeIn();
        });
    $('.oracle').click(function(){
        $('.inactive').css({"color":"white"});
            $('.oracle').css({"color":"orange"});
              $('.bio').hide();
              $('#oracle').fadeIn();
        });
    $('.tbm').click(function(){
        $('.inactive').css({"color":"white"});
            $('.tbm').css({"color":"orange"});
              $('.bio').hide();
              $('#tbm').fadeIn();
        });
    $('.lighthouse').click(function(){
        $('.inactive').css({"color":"white"});
            $('.lighthouse').css({"color":"orange"});
              $('.bio').hide();
              $('#lighthouse').fadeIn();
        });
});