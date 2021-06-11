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
  	this.health = this.health - taken;
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
  
  drawEnemy(x, y, dimX, dimY)
  {
  	var canvas = document.getElementById("bad");
		var ctx = canvas.getContext("2d");
  	var base_image = new Image();
  	base_image.src = this.sourceImage;
  	base_image.onload = function()
		{
			ctx.drawImage(base_image, x, y, dimX, dimY);
		}
  }
}

function makeT1Enemy(x, y)
{
	var t1Enemy = new Enemy(x, y, 3, 5, 10, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACCUlEQVRYR8WXLW/DQAyGXVIpfIMtSWFQyEBVOjK0P1JUOjQ6tD8yNDI6FYwUBTakgSuvVJLJXnz1Xa4X30XTSio1sd/Hr30fncC4T9uFT1LTJAcCQLtcLkl3u93iV1KupKCu2n8FIPHT6UQsWZYlu5DqwJ8A4EBpgcYCGC0pqAUw4ufzmVownU5j29ADoKTKaR4LYGmxA1EAZVkCV8/rH13Y7Xaa5dgDMBUpp7kdAdDTQgdiALziES6EAdDWASsJYP+whvnbi7X7Hh43sHh/DbXBwMuhtRxQA9ytYf7pAKw2sPhKBHB7GnAhtQW9ONYgB5QAQfGBOYgD4M3FWVZX+8/iV+YguGq8DngA2qIoSAdF4AjeGYAbMMNZVRXvCaMBSNgArDY9ceOAeNYB0KPQvnHVgdQbjjYuOIScRFbBDkgBagdcbJfPhmIHAUQPMa+ZATlwUtDdmIbiowHyPKcjVwOAN6W6ruXB1CvAAnCTO/Ss2fJ7bL3bb3TBI27iZRv5PRpCCRBKMBbAp2MBBMRpDjDB9/0T4Hr3fo4Atx/Prv3yVVOs1wE1AKZ0IY6/OkkAs9mMjmFncHxFXlyQEDpxa5bw5G2ahm7BbSwAr4bDqtsHuqN5wMEwANIor+XW0HJWpbiBwKItB2IA2DHZI7ZUW4QEoAlXBloVSICIAkwO1NT+E/IOpPNjUq4fuPkCKt84HNcAAAAASUVORK5CYIIA");
	t1Enemy.drawEnemy(x, y, 32, 32);
	return t1Enemy;
}

function makeT2Enemy(x, y)
{
	var t2Enemy = new Enemy(x, y, 10, 10, 20, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACP0lEQVRYR8WXr3ICQQzGF8MMD1BRAQYkCstzVNXWFlNsVS011NZW9TmwKCQYEBV9AGYw1/nSy052L7uXW6bTM8DeJvkl+fYPPXfdU9XmvVI3xYbOuWo+n1PczWaDjyJfRUZ1tv8CwCV3yP58PhPLYDDgKnAnzIlZJ1JgLjm+I/jlcqGA/X6fIPipW2JqiwRICaqazWbeOQfFwPL4ROOr0at/Dxh+ttutBhHEsQDACRlNp9NA7PfHJf3+GK2C8d1ul2uFCmAVFBmjIrIS3IY641zpG3G4AlYAqkYLQE5XKgANKopOOSoFUOMgiH+BskJECfEks+eGW2151WC1NACifsZVoOwX+8dA+bwi1pO3FHxQtasB7vaLhvKxIj4n6zKADqJS+9/SgqxmqAVGgGzwDIQdQO5siqCS/efgsFd04AE0/0EF4q1VQPhdEHO+XE/VwK2rvDh5N5TVbQVIba1yn8WceOvl97l3mCP9c3JJDQSb+x/8MAGIQ6VxEKVOQ2Zts20FqB34syI+CbmfHFAeyRhrs+8MMB6Pg0tHDgDnyuFwkKdiFScQAMTOI3pOsuJ5cXBZBSW4t5cQPI9EKAFyDq4F0OIEAJngdBLCwcP3s8N61x7sD+83L3H55VSfrFoBKwA8xhAIjqcIYDgc0j0gEo6WpK+ChDAGD7SEu8fpdPq9D3QF4Ct4vHO2VDAPABrj36tAtOzVGNxDIOmgAl0AuGKyR1xSaxISgBRuNAwykAAdEvA+ENP610wVZDRY5OsHfJQQKnovK+UAAAAASUVORK5CYIIA");
	t2Enemy.drawEnemy(x, y, 32, 32);
	return t2Enemy;
}

function makeT3Enemy(x, y)
{
	var t3Enemy = new Enemy(x, y, 24, 15, 30, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXElEQVRYR82XPWsCQRCGVwLCVUIgpTYKNla2/icr21RprfxPtlY2AW3OMhCwOhCCYcZ9N7N7+zGnFrlG3duZ95mv9a5nHruu1rx3r5t7DVl4sViw7na7hX5nf10NPOGmaVi4qqq7QboAXOfzOYtB+HK5sHC/33cgdG+329FvlW/VJmMMi+OCcFh3gNC6FkID4MRTwikQDYQaQCsOGMrGUwGWh4MxU2PWzcgFvKpr/r4eibWqNubTmM1k0hmAOjzMCKefol9VtSdOwjEAXrd7M1lwWhC80kyLeebIIB47ZCCOezILcr+AcMtCq0cALH4+n81gMOBN4ZiFAKG4BkKeF9CigD2AWKRYI1FEWQKQe1M+KdgWQKqmrt62CXMAVH9qwlhJpH8PgGq9fDmwIV9Bt8vGks0XRucyFGtYCwb/m5/blHAJNAClPkg1oSvhswBS6S81IkqTzABmnQ8WcdjIyEviKgjrH+PpSqACkGlMtXekf7wy5AByYxg6cQ2LG9Pbl1T2Qt/RDGgAUk2lFYZ9EQCnIQzw1IORjGVAQuTsyUcWgI7K0+nkJWQ8HrtHL6+jRQkAQOLH49GzHw6H7qhvAUjndHO/39NH65+R9r2/fv0dWGHNpsZ8fL9BvGU/m82cBSB5CiSAoE8DkBucmkET5gBiOh5ARpxkHCiXQEKICdD6iGZAaxyba6xpfXgA1CDUlbZxUs+JXqlSI1sAcJmkg48anUvwLwDs2D0UvbIMnAUK2stACQBZkgdSrAxUAqQ383bkATCR4lWKjTRXIRi4YE3Ni4nUxOt4iUPt9xdtgNAcJH6FygAAAABJRU5ErkJgggAA");
	t3Enemy.drawEnemy(x, y, 32, 32);
	return t3Enemy;
}

function makeT4Enemy(x, y)
{
	var t4Enemy = new Enemy(x, y, 36, 20, 40, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTElEQVRYR82XoU9DMRDGO7NkiqBAMAQLalOz+3tQWIJCoggWxd8zOzUUGYKHALWgXjLzyF32Xa7Xvq7tDDPL+l57v/vuu7YbuPpPZ6YOapaqmuSc6xaLhRdvuVzS7+L1iicgeNu2HsBoNHI1EKUAnDkF3+12HsBwOHQ1EP8KgEyVAgqy/3mYsgpnj2/8XaCCxNIBUwDdfD7nIJAewVEHDUFjq9UqZcoAgLOLmIhbzQansT4AKKEgLIgXCwrEAIKske337ZUbnI48E3bb1p2/fATGjKgRAEhtIy6OKkAAsQ8AyAs9CgSxSIEUAOL0qmFBTHBr6igArcEByGC0QI+B5B2qP0wHAIzlzNfviAcyAAT08+YiqDeV5fL1K+X+aJJeG85mM+nnQyrEPJCTPc1br9fSGSUAkkHUgfvBHghv7kEA9LJRgRdp7q+D+msfjJ/ebRkC8BqADuUhs8V6HnsDzKmCHA3ACQKAAtkNR29QeLYH4EcwON7LUiBV52OfZQPoLKCADm5PQ/0sNTcLQL9EG5UFSB1GttXs/CqAyWTCNx7teJ2x3hnpxrTZbKTXiwFM9nIeAMJmjxcIIhJc5kPFpAKpBY4FwPwYANc4EZzPAVrg924a3AUkxW3rTp7frPy6UrwGlRIQchiVAHBxIxcSGq8B6MbjMR/DxjixdhcVNATtjBnBPS/R0d80Dd+CiwHQDbgZYfc7UMI0ANFk/rWSOmqJMoMLBKnuKVACgJJpAEiam4QGYIdnTvQy0AAFCcgaFLP0r5nXUsalVWv9AV/n+CrnuSntAAAAAElFTkSuQmCC");
  t4Enemy.drawEnemy(x, y, 32, 32);
	return t4Enemy;
}

function makeT5Enemy(x, y)
{
	var t5Enemy = new Enemy(x, y, 45, 25, 50, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACEElEQVRYR62Xra4CMRCFiyHhIcBgWYPFYXleLA6LYS0GHoIEszfTMM3pMD8t3CqynZ7zzXS2W2apf0zBklmPZGtwMd3tdq7++XzG+VA/CsjGaPp8Pl2AxWJR5gHG9LEmKmM0fb1eLsB8Pi/zDOOBSIBsvN1uEy1mY2l6vV7T/X5Ph8Mhmx2Px7RardIwDBUcw7DW5XLh+eKLABMZ42BjMqTBBmTI5hyPz2Q8VoXi3yDZ+wMgyra1w72qaAA5+/8yx6pYW8MQXIEPALnPLErP5V57c1olaEsQoNmcjCwwq+RWkzIEVUAtv7XXWgNqjRj1igsguzgSi+Y1PROAg1nU2m/eDnw9NRBL72eAVtAuAG4kzARPPHzeAuDpqRXoAcBYC7IbAF8Z+m0JY9fTb3ksY6UsUPctoEWRcNT5EkLqfX0O9Bh7sU0A4zgWjc1m86HnnRfR2hDgLVC+FRIgegui9d0A6/U6X1Lww4MlwQOLLjK3242mzQQqACku6Nln4jiZPZ6ainlZj1XkuPwxQgBP4FcAzacCcMwpiwx6Op3y/U8bdG7s93tZfgwtyaoVaAUgRQlB5jS+Algul4maQjSOlmSpAkI0mle9RNe/x+ORu3TqBeC3QZ6YQQV9AKIRt2TrIKualoMazQsEJV1VoAeAK4aEXNLWJBAgd3jjwioDBOhIoGiQZ/Tn1PueyL/pX2n9AST4BCqvPM1TAAAAAElFTkSuQmCC");
  t5Enemy.drawEnemy(x, y, 32, 32);
	return t5Enemy;
}

function makeT6Enemy(x, y)
{
	var t6Enemy = new Enemy(x, y, 57, 30, 60, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACR0lEQVRYR62XoU4DQRCGtwlpUgcCEkIaRG1VbV8AhSUoXgCFAoPAgELxAiiCRfECtVW1FaQhJCDANWlIjvybm8vs3Ozs7R0rb2fm/3Zmbm6v57qtonTvtQ3T1tELT6dTrzubzUg/O162g3OuIOH1eu2FB4MBB8mKmWVM4iS82Wy8cL/fr0DKbDSO29iQi5OwrDtAkI0ciKYAxWQy8XoxcYKhbMznczxKxk8a4OQQ5+m2MsDtmkCkAAJxqvf96bs7f9wNKvBw9uUung6CDCEbKQgLQE07gl4evbmbl/0A4Pr4w929HtYAYGRBJAFkugHQpAS8JzoDIL1IuSXOBQHIff4VQKs/ifM+6AoQNB/qSzVH4M/vX7UH9na2qubkPlYzxnqg1v10Sh5YDqLYXi5AVLztF49eX60XtAw0BkA5sORM0EBjWZAA2eIk1hbCBLBOSHsWgPTXssABgtNbAnJPg4j5SwgVICXQZT8GUIzH46p38DrhneaL3n1tj+wsGzk7FouF/1xTBgIA7HAhOF89b/vLBp5jaYB4joGFG9PtyU9low2uJABBUFCeDQkBActOfjlhGwUAPV0yU4OHQDQBzZfHVgFgsFwuHe+HFETOPkRHo5E/oAkQCwpnrFiG6LaMQ1gxVAAELx3NS0oMQognY5BW9RYkAOgXzKfQWuL06reGa1UAZdDaaMbz4XAYaNLVW4LIq9pqtSITNW4wBxSAQgpzQQlh/S+UIMHUJT2egRqlBZDT/QoA3FHWahLG4lW1zxFUbKNN+Qdd+ZUw4fICBwAAAABJRU5ErkJgggAA");
  t6Enemy.drawEnemy(x, y, 32, 32);
	return t6Enemy;
}

function createWave(waveNumber)
{
	var wave = [];
	if(waveNumber == 1)
	{
		for(var i = 0; i < 10; i++)
		{
			var t1Enemy = makeT1Enemy(32, 32);
			wave.push(t1Enemy);
		}
	}
	if(waveNumber > 1 && waveNumber < 10)
	{
		for(var i = 0; i < 10 + waveNumber * 2; i++)
		{
			var t1Enemy = makeT1Enemy(32, 32);
			wave.push(t1Enemy);
		}
	}
	if(waveNumber > 9 && waveNumber < 14)
	{
		for(var i = 0; i < 10 + waveNumber * 2; i++)
    {
    	if(i > 10 + waveNumber)
      {
      	var t2Enemy = makeT2Enemy(0 + i * 32, 32)
        wave.push(t2Enemy);
      }
      else
      {
      	var t1Enemy = makeT1Enemy(0 + i * 32, 32);
			  wave.push(t1Enemy);
      }
    }
	}
}



