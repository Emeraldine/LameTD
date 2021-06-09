const canvas = document.getElementById('bad');
const ctx = canvas.getContext('2d');

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
	var t1Enemy = new Enemy(x, y, 3, 5, 10, "https://github.com/Zekromeon/LameTD/blob/main/logan/Enemy%201.png?raw=true");
	t1Enemy.drawEnemy(64, 64);
}

function makeT2Enemy(x, y)
{
	var t2Enemy = new Enemy(x, y, 10, 10, 20, "https://github.com/Zekromeon/LameTD/blob/main/logan/Enemy%202.png?raw=true");
	t2Enemy.drawEnemy(32, 32);
}

function makeT3Enemy(x, y)
{
	var t3Enemy = new Enemy(x, y, 24, 15, 30, "https://github.com/Zekromeon/LameTD/blob/main/logan/Enemy%203.png?raw=true");
	t3Enemy.drawEnemy(32, 32);
}

function makeT4Enemy(x, y)
{
	var t14nemy = new Enemy(x, y, 36, 20, 40, "https://github.com/Zekromeon/LameTD/blob/main/logan/Enemy%204.png?raw=true");
}

function makeT5Enemy(x, y)
{
	var t5Enemy = new Enemy(x, y, 45, 25, 50, "https://github.com/Zekromeon/LameTD/blob/main/logan/Enemy%205.png?raw=true");
}

function makeT6Enemy(x, y)
{
	var t6Enemy = new enemy(x, y, 57, 30, 60, "https://github.com/Zekromeon/LameTD/blob/main/logan/Enemy%206.png?raw=true");
}
