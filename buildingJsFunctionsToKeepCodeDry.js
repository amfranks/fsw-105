// 1. ////////////////////////////////////////////

var sum = 0;

function findSum(num1, num2) {
    sum = num1 + num2;
    return sum;
}

console.log(findSum(3, 7));

console.log("-----------------------------------");

// 2. ////////////////////////////////////////////

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(findMax(4, 43, 367));

console.log("-----------------------------------");

// 3. ////////////////////////////////////////////

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(7));

console.log("-----------------------------------");

// 4. ////////////////////////////////////////////

function lengthOfString(str) {
    if (str.length <= 20) {
        return str + str;
    } else {
        return str.slice(0, str.length / 2);
    }
}

console.log(lengthOfString("Less than 20"));
console.log(lengthOfString("This string is greater than 20 characters."));