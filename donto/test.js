const canvas = document.getElementById('bad');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 500;

var selected = false;
var selection;


const towerList = ["tower1", "tower2", "tower3", "tower4", "tower5", "tower6"];

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
        console.log("e");
    }
});

canvas.addEventListener('mousedown', e => {
    if(selected) {
        if(selection == towerList[0]) {
            drawTower("https://github.com/Zekromeon/LameTD/blob/main/logan/Tower%201.png?raw=true",e.x,e.y);
        } else if(selection == towerList[1]) {
            drawTower("https://github.com/Zekromeon/LameTD/blob/main/logan/Tower%202.png?raw=true",e.x,e.y);
        } else if(selection == towerList[2]) {
            drawTower("https://github.com/Zekromeon/LameTD/blob/main/logan/Tower%203.png?raw=true",e.x,e.y);
        } else if(selection == towerList[3]) {
            drawTower("https://github.com/Zekromeon/LameTD/blob/main/logan/Tower%204.png?raw=true",e.x,e.y);
        } else if(selection == towerList[4]) {
            drawTower("https://github.com/Zekromeon/LameTD/blob/main/logan/Tower%205.png?raw=true",e.x,e.y);
        } else if(selection == towerList[5]) {
            drawTower("https://github.com/Zekromeon/LameTD/blob/main/logan/Tower%206.png?raw=true",e.x,e.y);
        }
        console.log(e.x, e.y);
        selected = false;
        selection = null;
        enable();
    }
});

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
    } else {
        alert("Not enough funds to purchase!");
    }
}
