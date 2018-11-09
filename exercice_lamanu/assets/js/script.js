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
