$(document).ready(function(){

console.log("Hello")

function nextSlide() {
    var q = function(sel) { return document.querySelector(sel); }   
    q(".slides").appendChild(q(".slides img:first-child"));
}
setInterval(nextSlide, 3000)


})