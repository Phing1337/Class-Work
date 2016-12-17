/* Define function that runs when the button is clicks
    get that city name from the input 
    
    
    if - city name || --> then change background
    
    else if check another city and change to background
    
    lastly, alert with no city give random picture
    
    */
console.log('youre getting this far');

function changeBackground() {
    event.preventDefault();
    var cityInput = $('#city-type').val();
    if (cityInput == "NYC" || cityInput == "New York City" || cityInput == "New York") {
        //change background to NYC
        $('body').css('background-image', 'url("../images/nyc.jpg")');
        console.log("changed to NYC");
    }
    else if (cityInput == "San Francisco" || cityInput == "Bay Area" || cityInput == "SF") {
        //change background to SF
        $('body').css('background-image', 'url("../images/sf.jpg")');
        console.log("changed to SF");
    }
    else if (cityInput == "LA" || cityInput == "Los Angeles" || cityInput == "LAX") {
        //change background to LA
        $('body').css('background-image', 'url("../images/la.jpg")');
        console.log("changed to LA");
    }
    else if (cityInput == "Austin" || cityInput == "ATX") {
        //change background to austin
        $('body').css('background-image', 'url("../images/austin.jpg")');
        console.log("changed to Austin");
    }
    else if (cityInput == "Sydney" || cityInput == "SYD") {
        //change background to Sydney
        $('body').css('background-image', 'url("../images/citipix_skyline.jpg")');
        console.log("changed to Sydney");
    }
};

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    changeBackground();
});

//$('#submit-btn').click(changeBackground);