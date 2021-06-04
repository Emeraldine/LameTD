var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.onload = function(){update()};


function update() {
  ctx.beginPath();
  //ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
  ctx.rect(100, 100, 50, 100);
  ctx.fillStyle = "#FF6A6A";
  ctx.stroke();
  //ctx.fill();
 
  requestAnimationFrame(update);
}
update();   
