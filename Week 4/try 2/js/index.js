$(document).ready(function () {
    $(".readmore a").click(expandMore);

    function expandMore(event) {
        event.preventDefault();
        $('.readmore a').hide();
        $('#show-this-on-click').slideDown();
        $('.readless').show();
    };
    $('.readless a').click(showLess);

    function showLess(event) {
        event.preventDefault();
        $('.readmore a').show();
        $('#show-this-on-click').slideUp();
        $('.readless').hide();
    };
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