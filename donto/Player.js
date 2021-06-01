class Player {
	constructor(health, money) {
  	this.health = health;
    this.money = money;
    this.unlocked = [];
  }
  
  getHealth() {
  	return this.health;
  }
  
  getMoney() {
  	return this.money;
  }
  
  getUnlocked() {
  	return this.unlocked;
  }
  
  addHealth(h) {
  	this.health = this.health + h;
  }
  
  removeHealth(h) {
  	this.health = this.health - h;
  }
  
  addToUnlocked(thing) {
  	this.unlocked.push(thing);a
  }
  
}
