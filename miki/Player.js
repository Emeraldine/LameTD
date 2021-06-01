class Player
{ 
	constructor(hp, money)
  {
  	this.hp = hp;
    this.money = money
  }
  get hp()
  {
  	return this.hp;
  }
  set hp(val)
  {
  	this.hp = val;
  }
  get money()
  {
  	return this.money;
  }
  set money(val)
  {
  	this.money = val;
  }
}
