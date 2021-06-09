class Player
{ 
	constructor(hp, money)
  {
  	this.hp = hp;
    this.money = money
	  this.level = 0;
  }
  gethp()
  {
  	return this.hp;
  }
  getmoney()
  {
  	return this.money;
  }
  setmoney(val)
  {
  	this.money = val;
  }
	addLevel()
	{
		this.level++;
	}
  buyTower(tower)
  {
  	if(this.money >= tower.getCost())
    	{
  		tower.drawTower();
     		this.money -= tower.getCost;
    	}
  }
}
