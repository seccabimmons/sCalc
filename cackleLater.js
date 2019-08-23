var x;
var y;
var z;

function add(x, y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x + y;
    document.getElementById("result").innerHTML = z;
}

function subtract(x, y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = Number(x) - Number(y);
    document.getElementById("result").innerHTML = z;
}

function multiply(x, y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = Number(x) * Number(y);
    document.getElementById("result").innerHTML = z;
}

function divide(x, y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = Number(x) / Number(y);
    document.getElementById("result").innerHTML = z;
}

