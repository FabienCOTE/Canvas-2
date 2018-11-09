var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Cône
ctx.beginPath();
ctx.fillStyle = "#d58636";
ctx.moveTo(200,350);
ctx.lineTo(150,200);
ctx.lineTo(250,200);
ctx.fill();

// Boule
ctx.beginPath();
ctx.fillStyle = "#8a0908";
ctx.moveTo(150,200);
ctx.quadraticCurveTo(210,70,250,200);
ctx.fill();
