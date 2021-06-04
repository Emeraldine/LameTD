var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function update() {
  context.beginPath();
  context.arc(100, 100, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
 
  requestAnimationFrame(update);
}
update();   
