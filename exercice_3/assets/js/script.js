var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Tête
ctx.beginPath();
ctx.fillStyle = "#976f0f";
ctx.arc(200,100,60,0,Math.PI*2,true);
//Bras gauche et droit
ctx.fillRect(80,140,240,30);
//Corps
ctx.fillRect(150,140,100,220);
//Main gauche
ctx.moveTo(80,140);
ctx.quadraticCurveTo(50,155,80,170);
//Main droite
ctx.moveTo(320,140);
ctx.quadraticCurveTo(350,155,320,170);
//Pied gauche
ctx.moveTo(150,360);
ctx.quadraticCurveTo(165,380,180,360);
//Pied droit
ctx.moveTo(220,360);
ctx.quadraticCurveTo(235,380,250,360);
ctx.fill();

//Boutons
ctx.beginPath();
ctx.fillStyle = "#7a2976";
//Premier bouton
ctx.arc(200,200,8,0,Math.PI*2,true);
//Deuxième bouton
ctx.arc(200,240,8,0,Math.PI*2,true);
ctx.fill();

//Yeux
ctx.beginPath();
ctx.fillStyle = "white";
//Oeil gauche
ctx.arc(180,90,9,0,Math.PI*2,true);
//Oeil droit
ctx.arc(220,90,9,0,Math.PI*2,true);
//Entre jambes
ctx.moveTo(180,360);
ctx.quadraticCurveTo(200,250,220,360);
ctx.fill();

//Sourcils
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="white";
//Soucil gauche
ctx.moveTo(170,75);
ctx.quadraticCurveTo(180,65,190,75);
//Soucil droit
ctx.moveTo(210,75);
ctx.quadraticCurveTo(220,65,230,75);
ctx.stroke();

//Bouche
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="red";
//Bouche haut
ctx.moveTo(175,120);
ctx.quadraticCurveTo(200,130,225,120);
//Bouche bas
ctx.moveTo(175,120);
ctx.quadraticCurveTo(200,140,225,120);
ctx.stroke();
