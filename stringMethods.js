// 1. Make a function that will return any given string into all caps followed by the same string all lowercase.

function capitalizeAndLowercase(str) {
    return str.toUpperCase() + str.toLowerCase();
}

console.log(capitalizeAndLowercase("Hello"));
console.log(capitalizeAndLowercase("HelloHowAreYou"));

console.log("------------------------------------------------------------");


// 2. Make a function that returns a number half the length and rounded down. You'll need to use Math.floor().

function findMiddleIndex(str) {
    return Math.floor(str.length / 2);
}

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

console.log("------------------------------------------------------------");

// 3. Make a function that uses slice() and the other functions you've written to return the first half of the string.

function returnFirstHalf(str) {
    return str.slice(0, findMiddleIndex(str));
}

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

console.log("------------------------------------------------------------");


// 4. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

function capitalizeAndLowercase2(str) {

    if (str.length % 2 == 0) { // If string length is even
        return returnFirstHalf(str).toUpperCase() + str.slice(returnFirstHalf(str).length, str.length).toLowerCase();
    }

    if (str.length % 2 !== 0) { // If string length is odd

        if (returnFirstHalf(str).length < str.slice(returnFirstHalf(str), str.length).length) { // If 1st half length is < 2nd half's length

            return returnFirstHalf(str).toUpperCase() + str.slice(returnFirstHalf(str).length, str.length).toLowerCase();

        } else if (returnFirstHalf(str).length > str.slice(returnFirstHalf(str), str.length).length) { // If 1st half length is > 2nd half's length

            return str.slice(returnFirstHalf(str), str.length).toUpperCase() + returnFirstHalf(str).toLowerCase();
        }
    }
}

console.log(capitalizeAndLowercase2("abcdefgh"));
console.log(capitalizeAndLowercase2("Hello"));
console.log(capitalizeAndLowercase2("Hello World"));