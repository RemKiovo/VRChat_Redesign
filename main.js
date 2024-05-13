document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
});

var images = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'];
var world = ['Exoplanet Journey', 'VRChat Home World', 'VirtualFurence Furry Convention Hotel Estrel Berlin', 'Solar Cabins ˸˸˸ ソーラーキャビン', 'Infinity Bridge (Halo 4)'];
var authors = ['*Niko', 'VRChat', 'Reimajo', 'Artsy Glitch', 'The_Heavynator'];
var index = 0;

setInterval(function() {
    document.getElementById("main").style.backgroundImage = 'url(\"assets/backgrounds/' + images[index] + '\")';
    document.getElementById("worldinfo").innerHTML = "<b>"+ world[index] + "</b>" +  ' by ' + "<b>" + authors[index] + "</b>";
    index = (index + 1) % images.length;
}, 10000);