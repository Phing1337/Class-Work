$( document ).ready(function() {

	$(".readmore a").click(expandMore);

	function expandMore(event){
		event.preventDefault();
        $('.readmore').click( function(){
            $('.readmore').hide();
            $('#show-this-on-click').slideToggle();
            $('.readless').show();
        });
        }
        function showLess(event){
		event.preventDefault();
        $('.readless').click( function(){
            $('.readmore').show();
            $('#show-this-on-click').slideUp();
            $('.readless').hide();
        });
	

});



/*
1) see small version
    click read more button
        show extra content
        hide show more button
        show read less button
    

2) click readless button
    Hide extra version
    hide readless button
    show readmore button



*/