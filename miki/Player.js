class Player
{ 
	constructor(hp, money)
  {
  	this.hp = hp;
    this.money = money
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
  buyTower(tower)
  {
  	if(this.money >= tower.getCost())
    	{
  		tower.drawTower();
     		this.money -= tower.getCost;
    	}
  }
}
