class Enemy
{
	constructor(x, y, health, speed, reward, sourceImage)
	{
		this.x = x;
		this.y = y;
		this.health = health;
		this.speed = speed;
		this.reward = reward;
		this.sourceImage = sourceImage;
	}
  
  getHealth()
  {
  	return this.health;
  }
  
  damage(taken)
  {
  	this
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
  
  getReward()
  {
  	return this.reward
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

function makeT1Enemy(x, y)
{
	var t1Enemy = new enemy(x, y, 3, 5, 10, "../logan/enemy1.png");
}

function makeT2Enemy(x, y)
{
	var t2Enemy = new enemy(x, y, 10, 10, 20, "../logan/enemy2.png");
}

function makeT1Enemy(x, y)
{
	var t3Enemy = new enemy(x, y, 24, 15, 30, "../logan/enemy3.png");
}

/*function makeT1Enemy(x, y)
{
	var t1Enemy = new enemy(x, y, 3, 5, 10, "../logan/enemy1.png");
}*/
