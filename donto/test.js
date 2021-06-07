const canvas = document.getElementById('bad');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 500;

function func() {
    document.getElementById('test').style.backgroundColor = "blue";
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
