let a = "";
let b = "";
let operator = "";
const displayScreen = document.getElementById("display");
const decimal = document.getElementById(".");

function clr() {
    displayScreen.innerHTML = "";
    decimal.disabled = false;
}

function oneDecimal() {
    decimal.disabled = true;
}

function decimalReset(){
    decimal.disabled= false;
}

function operate(equation) {

    const inputArray = equation.split(" ");
    a = parseFloat(inputArray[0]);
    b = parseFloat(inputArray[2]);
    operator = inputArray[1];

    if (operator === "+") {
        displayScreen.innerHTML = add(a, b);
        return add(a, b);
    }

    if (operator === "-") {
        displayScreen.innerHTML = subtract(a, b);
        return subtract(a, b);
    }

    if (operator === "x") {
        displayScreen.innerHTML = multiply(a, b);
        return multiply(a, b);
    }

    if (operator === "/") {
            displayScreen.innerHTML = divide(a, b);
            return divide(a, b);
    }
}

//display function 
function display(event) {
    //take button ID or the content of button (change to div?)
    //append to innerHTML of disply
    displayScreen.innerHTML += event.target.id;
    console.log(displayScreen.innerHTML)
    return displayScreen.innerHTML;
}

// Operator functions
// math.round and 10000 keep decimals at 5 digits or fewer
function add(a, b) {
    return Math.round((a + b)* 100000)/ 100000;
}
console.log(add(5.6787, 4.556));

function subtract(a, b) {
    return Math.round((a - b)* 100000)/ 100000;
}
console.log(subtract(5.8, 4.2));

function multiply(a, b) {
    return Math.round((a*b)* 100000)/ 100000;
}
console.log(multiply(1.2, 2.768));

function divide(a, b) {
    if (b == 0) {
        return "ERR";
    } else {
    return Math.round((a/b)* 100000)/ 100000;
    }
}
console.log(divide(5, 4));
console.log(divide(5, 0));
