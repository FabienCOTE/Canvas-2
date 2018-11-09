function EmplacementPointeur(Evenement){
  if(!document.all){
    CurseurX = Evenement.clientX;
    CurseurY = Evenement.clientY;
  }
  else {
    CurseurX = event.x + document.body.scrollLeft;
    CurseurY = event.y + document.body.scrollTop;
  }
  console.log(CurseurX+' / '+CurseurY);
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//E
ctx.beginPath();
ctx.fillStyle = "#3c3c3c";
ctx.moveTo(135,136);//1
ctx.lineTo(320,136);//2
ctx.lineTo(305,159);//3
ctx.lineTo(159,159);//4
ctx.lineTo(136,286);//5
ctx.lineTo(288,286);//6
ctx.lineTo(283,310);//7
ctx.lineTo(132,310);//8
ctx.lineTo(108,446);//9
ctx.lineTo(283,446);//10
ctx.lineTo(278,469);//11
ctx.lineTo(77,469);//12
ctx.lineTo(135,136);//13
ctx.fill();

//2
ctx.beginPath();
ctx.fillStyle = "#e84e1c";
ctx.moveTo(293,200);//1
ctx.quadraticCurveTo(338,98,440,31);//2
ctx.quadraticCurveTo(510,-12,582,30);//3
ctx.quadraticCurveTo(700,110,586,282);//4
ctx.quadraticCurveTo(410,500,186,616);//5
ctx.lineTo(190,625);//6
ctx.quadraticCurveTo(380,570,421,625);//7
ctx.quadraticCurveTo(430,630,437,657);//8
ctx.quadraticCurveTo(320,660,140,705);//9
ctx.quadraticCurveTo(120,710,114,705);//10
ctx.quadraticCurveTo(90,695,70,640);//11
ctx.quadraticCurveTo(70,620,78,619);//12
ctx.quadraticCurveTo(288,495,463,317);//13
ctx.quadraticCurveTo(590,175,590,100);//14
ctx.quadraticCurveTo(577,21,502,57);//15
ctx.quadraticCurveTo(450,85,366,211);//16
ctx.quadraticCurveTo(320,265,272,252);//17
ctx.quadraticCurveTo(273,230,293,200);//17
ctx.fill();

//N gauche
ctx.beginPath();
ctx.fillStyle = "#323232";
ctx.moveTo(591,287);//1
ctx.quadraticCurveTo(613,261,633,215);//2
ctx.lineTo(590,458);//3
ctx.lineTo(562,458);//4
ctx.lineTo(591,288);//5
ctx.fill();

//N centre et gauche
ctx.beginPath();
ctx.fillStyle = "#323232";
ctx.moveTo(650,130);//1
ctx.lineTo(784,410);//2
ctx.lineTo(834,124);//3
ctx.lineTo(862,124);//4
ctx.lineTo(804,457);//5
ctx.lineTo(777,457);//6
ctx.lineTo(644,180);//7
ctx.quadraticCurveTo(649,160,650,130);//2
ctx.fill();

//Texte
ctx.font = "59pt 'Roboto', sans-serif";
ctx.fillStyle = "#5b5b5b";
ctx.fillText("École du Numérique", 545, 571);
ctx.font = "59pt 'Roboto', sans-serif";
ctx.fillStyle = "#5b5b5b";
ctx.fillText("du Noyonnais", 527, 655);

//Polygones grand 1
ctx.beginPath();
ctx.fillStyle = "#dbd7d8";
ctx.moveTo(1042,102);//1
ctx.lineTo(1085,132);//2
ctx.lineTo(1082,183);//3
ctx.lineTo(1035,206);//4
ctx.lineTo(992,178);//5
ctx.lineTo(996,124);//6
ctx.lineTo(1042,102);//7
ctx.fill();

//Polygones grand 2
ctx.beginPath();
ctx.fillStyle = "#b4b4b4";
ctx.moveTo(986,181);//1
ctx.lineTo(1028,210);//2
ctx.lineTo(1025,262);//3
ctx.lineTo(978,287);//4
ctx.lineTo(935,257);//5
ctx.lineTo(940,204);//6
ctx.lineTo(986,181);//7
ctx.fill();

//Polygones grand 3
ctx.beginPath();
ctx.fillStyle = "#565656";
ctx.moveTo(1086,195);//1
ctx.lineTo(1124,222);//2
ctx.lineTo(1121,270);//3
ctx.lineTo(1078,290);//4
ctx.lineTo(1040,264);//5
ctx.lineTo(1043,216);//6
ctx.lineTo(1086,195);//7
ctx.fill();

//Polygones grand 4
ctx.beginPath();
ctx.fillStyle = "#e84e1c";
ctx.moveTo(1029,271);//1
ctx.lineTo(1071,301);//2
ctx.lineTo(1067,352);//3
ctx.lineTo(1020,375);//4
ctx.lineTo(978,346);//5
ctx.lineTo(983,293);//6
ctx.lineTo(1029,271);//7
ctx.fill();

//Polygones grand 5
ctx.beginPath();
ctx.fillStyle = "#808080";
ctx.moveTo(973,351);//1
ctx.lineTo(1016,381);//2
ctx.lineTo(1011,434);//3
ctx.lineTo(964,457);//4
ctx.lineTo(922,427);//5
ctx.lineTo(926,374);//6
ctx.lineTo(973,351);//7
ctx.fill();

//Polygones grand 6
ctx.beginPath();
ctx.fillStyle = "#dbd7d8";
ctx.moveTo(1069,359);//1
ctx.lineTo(1112,388);//2
ctx.lineTo(1110,439);//3
ctx.lineTo(1064,464);//4
ctx.lineTo(1019,436);//5
ctx.lineTo(1023,382);//6
ctx.lineTo(1069,359);//7
ctx.fill();

//Polygones petit 1
ctx.beginPath();
ctx.fillStyle = "#dbd7d8";
ctx.moveTo(1150,240);//1
ctx.lineTo(1169,255);//2
ctx.lineTo(1167,276);//3
ctx.lineTo(1147,286);//4
ctx.lineTo(1129,274);//5
ctx.lineTo(1131,251);//6
ctx.lineTo(1150,240);//7
ctx.fill();

//Polygones petit 2
ctx.beginPath();
ctx.fillStyle = "#808080";
ctx.moveTo(1194,276);//1
ctx.lineTo(1210,287);//2
ctx.lineTo(1208,307);//3
ctx.lineTo(1190,315);//4
ctx.lineTo(1175,304);//5
ctx.lineTo(1176,284);//6
ctx.lineTo(1194,276);//7
ctx.fill();

//Polygones petit 3
ctx.beginPath();
ctx.fillStyle = "#e84e1c";
ctx.moveTo(1250,260);//1
ctx.lineTo(1260,268);//2
ctx.lineTo(1260,281);//3
ctx.lineTo(1249,287);//4
ctx.lineTo(1238,280);//5
ctx.lineTo(1238,267);//6
ctx.lineTo(1250,260);//7
ctx.fill();
