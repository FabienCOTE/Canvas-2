var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Fond
ctx.fillStyle = "#0000ff";
ctx.fillRect(0,0,400,400);

// Cockpit
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,50,250,200);
ctx.fill();

// Structure haut
ctx.beginPath();
ctx.fillStyle = "#e0e1f3";
ctx.moveTo(75,200);
ctx.quadraticCurveTo(200,130,325,200);
ctx.fill();

// Structure bas
ctx.beginPath();
ctx.fillStyle = "#e0e1f3";
ctx.moveTo(75,200);
ctx.quadraticCurveTo(200,280,325,200);
ctx.fill();
