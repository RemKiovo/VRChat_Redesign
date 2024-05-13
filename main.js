document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
});

var images = ['background1.jpg', 'background2.jpg'];
var world = ['Exoplanet Journey', 'VRChat Home World'];
var authors = ['*Niko', 'VRChat'];
var index = 0;

setInterval(function() {
    document.getElementById("main").style.backgroundImage = 'url(\"assets/backgrounds/' + images[index] + '\")';
    document.getElementById("worldinfo").innerHTML = world[index] + ' by ' + authors[index];
    index = (index + 1) % images.length;
}, 10000);