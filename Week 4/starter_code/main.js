$(document).ready(function () {
    console.log('hello');
    //------------------------------
    //    this way works
    //------------------------------
    /* 
    var readmoretext = $(".expand").html();
    var readlesstext = readmoretext.substr(0, 150);
    
    
    if (readmoretext.length > 100){
        
        $(".expand").html(readlesstext).append("<a href ='#' class='readmore'> Show More... </a>" );
    } else {
        $(".expand").html(readmoretext);
    }
    
    $('article').on('click', ".readmore", function(event){
        event.preventDefault();
        $(this).parent(".expand").html(readmoretext).append("<a href ='#' class='readless'> Show Less </a>");
        console.log('its working');
        
    })

    $('article').on('click', ".readless", function(event){
        event.preventDefault();
        $(this).parent(".expand").html(readmoretext.substr(0, 150)).append("<a href ='#' class='readmore'> Show More... </a>");
        
        
    })
    
    
//-------------------------------------------------------------


/*

  $('.readmore a').click(reveal);
    
    function reveal(event){
        event.preventDefault();
        $("p").slideDown();
        $('readmore a').hide();
        $('readless a').show();
        alert('something happened');
    }
    
    */
    var n = $('#growShrink');
    
   
    
    console.log( n.height());
    
    if (pLength > 150) {
        $('.expand').html().substr(0, 150);
        $('.readmore').show();
    }
    //$('.expand').click( function(){
    //    $('p').hide();
    //     
    // })
    // $('.expand').click( function(){
    //    $('p').show();
    //})
});