var add = () => num1 + num2;
var sub = () => num1 - num2;
var mul = () => num1 * num2;
var div = () => num1 / num2;

var num1;
var getNum1 = document.getElementById("num1");
getNum1.addEventListener("change", () =>
    num1 = parseInt(getNum1.value));

var num2;
var getNum2 = document.getElementById("num2");
getNum2.addEventListener("change", () =>
    num2 = parseInt(getNum2.value));

var result = document.getElementById("result");

document.getElementById("add-button").addEventListener("click", () => {
    result.innerHTML = add(),
        ((isNaN(num1)) || (isNaN(num2))) ? result.innerHTML = "Error" : 0;
});

document.getElementById("sub-button").addEventListener("click", () => {
    result.innerHTML = sub(),
        ((isNaN(num1)) || (isNaN(num2))) ? result.innerHTML = "Error" : 0;
});

document.getElementById("mul-button").addEventListener("click", () => {
    result.innerHTML = mul(),
        ((isNaN(num1)) || (isNaN(num2))) ? result.innerHTML = "Error" : 0;
});

document.getElementById("div-button").addEventListener("click", () => {
    result.innerHTML = div(),
        ((isNaN(num1)) || (isNaN(num2))) ? result.innerHTML = "Error" : 0;
});