// Preliminaries

var variable1 = 'cat';
var variable2 = 'dog';


5 > 3 ? console.log('is greater than') : '';


if (variable1.length == 3) {
    console.log('is the length');
}


if (variable1.length == variable2.length) {
    console.log('equal');
} else {
    console.log('not the same');
}



// Bronze Medal

var person = {
    firstName: 'Bobby',
    age: 12
};


person.age >= 18 ? console.log(person.firstName + ' is allowed to go to the movie.') : console.log(person.firstName + ' is too young!');


if (person.firstName.charAt(0) === 'B') {
    console.log('Welcome.');
} else {
    console.log('Not allowed!');
}


if (person.firstName.charAt(0) === 'B' && person.age >= 18) {
    console.log(person.firstName + ' is allowed to go to the movie.');
} else {
    console.log(person.firstName + ' is not allowed.');
}



// Silver Medal

if (1 === '1') {
    console.log('strict');
} else if (1 == '1') {
    console.log('abstract');
} else {
    console.log('not equal at all');
}


1 <= 2 && 2 == 4 ? console.log('yes') : '';



// Gold Medal

if (typeof variable2 === 'string') {
    console.log('Variable 2 is a String.');
}


if (typeof true === 'boolean') {
    console.log('true is a boolean.');
}


var variable3;
if (typeof variable3 === 'undefined') {
    console.log('Variable 3 has not yet been defined.');
}


var variable4 = 's';
if (variable4 > 12) {
    console.log(variable4 + " is greater than 12.");
}


var variable5 = 52432543;
variable5 % 2 === 0 ? console.log('This number is even.') : console.log('This number is odd.');