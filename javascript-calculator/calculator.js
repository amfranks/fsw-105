var readlineSync = require('readline-sync');

///////////////////////////////////////////////////

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

///////////////////////////////////////////////////

var firstNumber = readlineSync.question("Please enter your first number: ");
var secondNumber = readlineSync.question("Please enter your second number: ");
var operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, or div: ");

///////////////////////////////////////////////////

if (operation === "add") {
    var result = add(parseInt(firstNumber), parseInt(secondNumber));
    console.log("The result is: " + result);
} else if (operation === "sub") {
    var result = subtract(parseInt(firstNumber), parseInt(secondNumber));
    console.log("The result is: " + result);
} else if (operation === "mul") {
    var result = multiply(parseInt(firstNumber), parseInt(secondNumber));
    console.log("The result is: " + result);
} else if (operation === "div") {
    var result = divide(parseInt(firstNumber), parseInt(secondNumber));
    console.log("The result is: " + result);
}