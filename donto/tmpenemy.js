function update(canvas) {
  
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF6A6A";
  ctx.fill();
 
  requestAnimationFrame(update);
}
update();   
