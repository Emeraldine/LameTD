const canvas = document.getElementById('bad');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 500;


var background = new Image();
background.src = "data:image/png;base64,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";

background.onload = function(){
    ctx.drawImage(background,0,0,900,500);   
}


var selected = false;
var selection;
var canPlace = true;
var placedTowers = [];


const towerList = ["tower1", "tower2", "tower3", "tower4", "tower5", "tower6"];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function func() {
    document.getElementById('test').style.backgroundColor = "blue";
}

function getMoney() {
    return Number(document.getElementById('cash').innerHTML);
}

function addMoney(money) {
    let a = document.getElementById('cash').innerHTML;
    document.getElementById('cash').innerHTML = Number(a) + money;
}

function rmMoney(money) {
    let a = document.getElementById('cash').innerHTML;
    document.getElementById('cash').innerHTML = Number(a) - money;
}

function addWave() {
    let a = document.getElementById('wave').innerHTML;
    document.getElementById('wave').innerHTML = Number(a) + 1;
}

canvas.addEventListener('mousemove', e => {
    if(selected) {
        if(ctx.getImageData(e.x, e.y, 1, 1).data[2] == 255) {
            canPlace = false;        	
        } else {
        	canPlace = true;
        }
        if(!canPlace) {
    	   canvas.style.cursor = "not-allowed";
        } else {
            canvas.style.cursor = "default";
        }
    }
});

canvas.addEventListener('mousedown', e => {
    if(selected) {
        if(canPlace) {

            if(selection == towerList[0]) {
                drawTower("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACi0lEQVRYR+VXO28TQRAe+84cKSCOoEAQxbJkWf45dIiGDtrUoaEDWlroaFA6fo5lWbKMBKLg4ZAinO3zoW98s1rv7cuJI5CYxvbd7sw33zzdoL8sjYD9koh8Z/AeEjrjfO+9OBgMaDgcugyU/X6fVqsVjcdj75nRaOQE+c8CKOH9crlkfh0ehhhQ74uioMlkYmXBxYANwEa6gH4IQqAZqJ0x3tfsRQN4d3DEyl+2E0qSpJa7AAF5Plt/Pv35iSRHtmVgw3sogwIo/lYs6e2dTAGoQkO9Xo+N4tyT2ZwOKakBdYGwMRAFAMbBCkCd/PrCIGDk2fec7ibp9QJAQr26fZ+9/p00KG8Qvf7xmbrdLgOA6EwJO7ZEtDKACxI/uWwqBgMvDh5sGMdZFwAJl9m0nEkYAqCVJ3uOxJQQmAxsm4S4r2rYxQCeLxYLajabKil3CkAPgyhGvN+3b1jLUK8CfJdzRo+I7gMbLOwIgDXc3lmgNxIkVwwDj87mlJVWBq4GwFRca4VVTjw+X8+P0/11qHwJiHNRDCDZRPGHWym1Wi0ZUAoHKgF93wSAu9Pp1GnrUgCgUNsV1PdOp0MPz3LaayYkQK8CQCVinufs2cWqoDezr2wQo1qfBWma8vJy3L6nAECBz/tQCITeEp5tAwAXP+5nQeNbAQC1kBgGdg2AQyF0WDYlNY4lDFqFhJZebxWYlVYb0+Y+gAsaiKDx2BCoXNC911usDKP/B4Dsf9WCweMYgs53XSHg8Yx+oEtV44Qy1SXLMvL9GdHPRiWK7AcAIEZtswDPAGbXANh7SOUVr2KQm4WqTv6N5RRinPc6GcMAAxDjaLUQ9HuMXREBo4OICUPoX62L6cs8t9r6A7O1TT8L/JDDAAAAAElFTkSuQmCC",e.x,e.y);
            } else if(selection == towerList[1]) {
                drawTower("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChElEQVRYR82XvWobQRSFjyQrDhjbmBQWNlgoCEVpQwp1rtKlyjukyCO4sjv7DVz4HVy5ywuoCGkjCxGhQIIM/kEJgSiytOGM9orZ1fxp5ZAMGKzd2TnfPXNmZzaHf9xyHv0IgKsP77P5+ljvOx+sVCrodrs2gaharSr1Tqdj7VMul9Hr9ayQ/y1AxOoLhYKrQp8DEasvFotOl2wOmAAScRH7eXE8HstUJfo8KIAuaAouIfTG7AS4aExvonrXKonDhzQcYSaTycx+GcMUVtMUBAFwsLOtPVyP73Hw/dschAn8wQA40PHGzkxjsJLDye3XhOVLAfDhWq2mbLQ1Qhxu7WKYg1c8n8+j3W7LUAnXravAB6C9gLyVawBzeksBjEYjVZWsdZtbmQBCpsGzj6jbLvu9m0i9Xlc5sGXBtgwFjOL8a7Va2fYCPmWDoPjPj8DVDfD0FeZykBLPBkCBtRduCI6sv3LFdqn88/spoG3Ldu6GBBj8AHb2zRCmEOqVU3z7ybSIpQD4tA1CD2Ja/PEjYHM9OwDHjsSFNAR/SzgpLNYzcKw8RNy3CqS4GcSv39P5ZDBNAIuKZwIYDoHnr6dsAhIvM3y6AFZXw6sPBVBTQVvZCDD4UELjqJ8AaB6VsPmyrwDYXMnXc+M7Fet9FUQIQKj4Ig4oF2ixVK+Tyf/iQjxFQcUFdYoFIgqw0f7muxJwFd/ZBhqnfej3Pd8KM/6FAPSqm29KwGV85RnQOO+nTQkaO6gT7ee5T3Y2pp/J55GM7e3dFxVIXpNzhONjJQGaGYCjyPLTl+PfAEhUTwFp8gbUt2sevRaBCHEgElEOLkdwERcYgaD1en9fGH1ftabVlvWaUesPCMiEMHjI4woAAAAASUVORK5CYIIA",e.x,e.y);
            } else if(selection == towerList[2]) {
                drawTower("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVRYR+2WTYsaQRCGazQQBRUWVMgujBiNeDCHnBPID8mfCLntKcfNKQRyzDk/JIecc4gHMYIozAZ0DPhBNPGjw9tuDW3PdM+4LoRA+jIz/VH19FtV3ePQX25OjH9BRLY5GEeLm2Mcty5sNpvU6XRMDgTG0Wxz6vU69Xo9I+TJAJvNxuZAQloAjdKJRqNBu91O7tCwg2COaRzOAWixcRTAQbqogIoD4xxTGEwhCCmAWB7T4DCBipEKiKTObnZFUfNTqVQQQgaPUiFKgUQAMPbhzCV/u6HL2XUkhK5YYgA1eTi+6i5h6KpwHtif3nPozQ/vAAJzdGUSA8AyQ2DR9Sei8+cUcvD67IJ+ORTp/OLyCXlXX4I1HC790DImoV5ChUKByuXygaqmHBiNRjSbzULAUSdmIgD2CsMqBL7R9D4d9FbngBoGddsMged0OiXf96lWq0kIHRDrttst9ft9NhHacOxRzCeZDoFvz/NotVpJAF0Jnq8ARPq6FQCMTiaTA4Ao2TUFjgfQj1s2COftdpuy2azc6HK5pFarFUrS/wBQYL1e02AwwOvdhECVVYj9D5HjOFStVimdTofuq1MAYOzgVtQzOw4gzrlRFmUbRwFgnarCXQAEKjBUt9uVr/P5nHK5HC0WC/mdz+fls1KpBPy22BtPplAQ9x3890vVt0+p/+qzBFAbAHhM6Y/767b+Tqv2xcP3z0isBf0e/5S3HABwCqJlMhmpAADQeE7M7/o+gQ071rsFjMMw2m65oe/vvtJ4PJbfpVJJOtfHk9j/JwAEyg21XnzxiO67OasCrA6viVMhiQKCM54h/I/fAvk5VgjDg5ePZWjgHNVxUxlWH3EAAnFGkqGh7HD/4/Lhi4gBuK9YLAaliSQFmE2FRACc6SoA+lzXlf6Hw6F8AooBuEJOAQhqP2GlxE2L3OwfF64mP1MT9SIAAAAASUVORK5CYIIA",e.x,e.y);
            } else if(selection == towerList[3]) {
                drawTower("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC80lEQVRYR8VXz2sTQRR+2WyrOagEby0IgRByrJZCQWpvnuxFwYt/SU8e6//g2YugB/HkTUEolGp6CyGQU3vSlriQpJ3NrnzTfePsZGcm2RScS7Mz8973ve/92G2F/vOqePBTInLdwTmW74713GnYbrep2+3aAFKcY7nuNBoNGgwGVpJLEWi1WpQkCfX7fSvJsgRkdHEcywgtAKmHQArwarXq8mHNXRGBXLkwOG9mJHN3liLQbDaVMzjHcxAEag/SuxZsyhLIRe8DwblO1nYf5Hu93kytFBXhDAEYmxEjwrf1B/RrGtP+nzMviYUI6PllQzMlB3fXVLDDsEJvzk9nJNdtFiIAzyCBBdnOvhKt7ealhgKv6+t0WaFC8PX9h3R68FPVTib/XCnAJdVi3IZ6QZmVbzvjfVv0rhGactUj99PpVPWzXmRCCPkIAO53PsdZrVZT123T0jYJecZLB2bPO/svOwzDkEe0fn0GzzmKd3d2KBaCvh8eFpLg4WO2IUsO+yiK6EenY1XbSeDx9jZdCSFTACfmeK6//EbxZEjRpz3Vhhy5aWt7Y85NACEUkcC+WWwAH08mUvokTalzclJOAVuuuSagDBYKUKt0m1lhsE4F7r86Us4SMVa/L94/yU0+Br/z7EMhePT5RTkFkGN9JfGEgvA2eQkEq8osCG/R8OPTcgTMcEDIJMHR33v+5Trn8aUsyoK1eArQRry4HU0SODfBtzY3pZnIPmjKFiF8pCAxGo2kw9WVFTkTdBLXUU9U5I82NlT144cL3JoXQz41FRGZSUKXHeDoiKPjY92F88vb91kuVeBiRPHpJFh6FJkOzt3z+92WN8i5CejFp5MAgg7O6dGK8WYU0PPMBHhM85sQ0t80gRRyxuOLfwMpazOe9Xygg/PePCr4UpAjkFxFhKlmgmMk88xnBWRxZvdd/7p5R7EeveFU5h4re90q+fUW8JHwEpCgYix7nQkwQDbjJTDPA27L7LL8U/pdYMyDZR8Lg/0L7wsuP1iK/T8AAAAASUVORK5CYIIA",e.x,e.y);
            } else if(selection == towerList[4]) {
                drawTower("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACgUlEQVRYR9WXsU4bQRCG5zCmRHIXgZRXwAkgIRHLDxBFoqKnoiJtQkUJtClJkRQ8QJQ3SJRISBGJUV4hICwhLDvo5OPObDQjz2m8t7s3Z9xku7vd2/+b2X9n9yLQNeMYFlnvNGMK09iT2ANo0narRe+zNIX7NIUf5+f4WAB43mzCgzEwF0VQq9V4nGtsrhMCMOurq7BQr5MotrFwaEICbq6sQH1+PhfxAFN/EGBzY8MWL8sYixrMBmZBgDu/9U1I0XMLRRCwkArCC+CIXmdXMUqTBTWAzIiGBLM2LYCR0YfE2JQauNFoBD87nYLvXBlQAaD4+8ZTuBllsD+4gjKIRwGgmG3Kw8UlSs6wFkESARzdXhZSLr+pBICFJ47jfAtdfQFYakMB4qCx7BVf3n8Gl4e/8m+qAKCwsSFcKWYPSLPJravZyt5dIAF8RkyzjLpk1XON9UUfLKkugDLX+/pnAoCTN7a/Qjbsw9/Prwqux/6Pe79hcNeH1x9eTBhyJgDyMHKteah/ZgD2mtspx34+iqUXpgIoq4Yo/unNNelsHT8JFiIE61xcOD2nOgtsZ7N4t/cn79o9WfNCPBpAXERIECOX4kyBELJxHZgGgIoRT8apxmeXsK9OWECVLiQ8p/FFqzmSccwYwnuTKrtiGdzb3JIk0epOeCN09SsDmFgKLYwm9UyoASAI3Jbfz87yyBBGZkSKYqFyXT5c6dMCEAS7mssuAyTpkMov9oeKzn8N4I2eo+rFXXh7+rJyFjRLUCqOSxCnfWKpClEJANcX29hg8G7nGz3j+nPjk1LrhTKAiT8kFsHJ8Sd0fMDQvyA3vh3xyek7hDTb0PW7XbkQiQ+cwf4D1jTXMHwr42oAAAAASUVORK5CYIIA",e.x,e.y);
            } else if(selection == towerList[5]) {
                drawTower("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADr0lEQVRYR8VXv09TURQ+pSVo0xbfwgCJpEmD3SDEgQQJo5Orm2GSTRMNDC6YsGgC0R0G5S8gcXOsxEkhEBckJA0mMtSG2pZUKpSa7/DOy3m39z0edPAst+/dc873nR/39rwY/WeJdYHfNmyv5euqRh5oPp/34e/u7urnyH4vUzSjJBPYzKBBRLYDcWQDQFqJgXO5XEeF9vf3aWRkhHp6enx75+fntLe3F2jjKpsYMbxor62t0czMDHQ8QjZwKIAARJMQ8CDSys7zv7CwQIuLiwzIBEqlEs3PzwuJdjabpXg87kXZarWoWCzSysoK9fX1MWEhCVLw0Ww2aXZ2loJs3QDbS0tLVK/XOwkADSSggFUcafBqtcqkBgYGJGsMjgAg/f39PhJiKz6xQjQBPHtZ0IUFieHhYTo4OODITfBV5zaVW2f0onbIpEWEhNjqPQ2OjHg10VFIFiQjGlzevcoMMt5JPEbNGNHro5+EuqbTaV8mBFz7lOitBKB4WCAanCafQ/M4QO+lM2QFt+lm30xS8flnzpSNgK8McK6j6TiL7gu3aSPrmuD62DEBM9VBwN2819GHEpDozAYymxTPV9EJI+BlAWfZefiJzk6qVP/woCPFQu5j7eKmvp+56GWTCPTeP/lGteMqPX13j/3g8tG3rnlHe2UIqi/er/84YsDkLYcavytULv/i58fjd6wksCc9pS47trESwAbOPNIlx0qOn4AfN/5QKnmTnYDAjWSKfz/KD0UpiYdr+5fivNrOfhA49IXASeM4NBNm0FYC01NTVNjY8JGQ5gEJiV5SHwYuduIzMoFGo0FfNjd96TRJyIlA1LYeEP3JiQlK9PZyUFEI8GkA4zASUHpb+MrAz6bv+k4BgCHoeID/PT3lYCw919GEEpRHAC9cY+5kCIhBlpeXeZ2bm+M1mUx6wPgh4PhH3NrevhoBMYYVHEBcJ0IycIUtBJGLfdcE4ABTEASjl1xCcg/gDpApCXPh+NiYN9BcJwPcB3AikYtzGb9AAOA4EXL0TB1tb6u/tSYqr0wAketJGNFpcNEPIjE2OkrbOzuBWGFjeVuM9QAKAnIX6CYQApgTE4kEb0G3GwJcBnMEl7lfkxBwGGgCalq+9LsgrLPb4hTgMqhiEl7d+s5XMO5/6MgAqvWDai+Al30ZcRa0Qwya+CjBiI6LKJVO890PYogYAyx+Y3R3sxWKEYkAHEIACgKVSoWfa7Uar5lMhlfHcZgAdCD43U0GOr4Lw+oUYc8a7D8F37I8NsfsDwAAAABJRU5ErkJgggAA",e.x,e.y);
            }
            storeCoords(e.x, e.y, selection);
            console.log(e.x, e.y);
            selected = false;
            selection = null;
            canPlace = false;
            enable();
        }
    }
});

function storeCoords(x, y, tower) {
    placedTowers.push({x: x, y: y, type: tower});
}

function disable() {
    for(var i = 1; i <= 6; i++)
    {
        document.getElementById(`button${i}`).disabled = true;
    }
}
function enable() {
    for(var i = 1; i <= 6; i++)
    {
        document.getElementById(`button${i}`).disabled = false;
    }

}

function drawTower(img, x,y) {
    base_image = new Image();
    base_image.src = img;
    ctx.drawImage(base_image, x - 21,y - 21);
}

function doTower1() {
    if(getMoney() >= 50) {
        rmMoney(50);
        disable();
        selection = towerList[0];
        selected = true;
        canPlace = true;
    } else {
        alert("Not enough funds to purchase!");
    }
}
function doTower2() {
    if(getMoney() >= 125) {
        rmMoney(125);
        disable();
        selection = towerList[1];
        selected = true;
        canPlace = true;
    } else {
        alert("Not enough funds to purchase!");
    }
}
function doTower3() {
    if(getMoney() >= 275) {
        rmMoney(275);
        disable();
        selection = towerList[2];
        selected = true;
        canPlace = true;
    } else {
        alert("Not enough funds to purchase!");
    }
}
function doTower4() {
    if(getMoney() >= 575) {
        rmMoney(575);
        disable();
        selection = towerList[3];
        selected = true;
        canPlace = true;
    } else {
        alert("Not enough funds to purchase!");
    }
}
function doTower5() {
    if(getMoney() >= 1175) {
        rmMoney(1175);
        disable();
        selection = towerList[4];
        selected = true;
        canPlace = true;
    } else {
        alert("Not enough funds to purchase!");
    }
}
function doTower6() {
    if(getMoney() >= 2375) {
        rmMoney(2375);
        disable();
        selection = towerList[5];
        selected = true;
        canPlace = true;
    } else {
        alert("Not enough funds to purchase!");
    }
}
