class Enemy
{
  constructor(x, y, health, speed, sourceImage)
  {
    this.x = x;
    this.y = y;
    this.health = health;
    this.speed = speed;
    this.sourceImage = sourceImage;
  }

  getHealth()
  {
  	return this.health;
  }
  
  getX()
  {
  	return this.x;
  }
  
  getY()
  {
  	return this.y;
  }
  
  getSpeed()
  {
  	return this.speed;
  }
  
  drawEnemy(dimX, dimY)
  {
  	var canvas = document.getElementById("bad");
	var ctx = canvas.getContext("2d");
  	var base_image = new Image();
  	base_image.src = this.sourceImage;
  	base_image.onload = function()
    	{
    		ctx.drawImage(base_image, 0, 0, dimX, dimY);
  	}
  }
}
