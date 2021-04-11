'use strict'; //because use to secure the js code and create visible error.

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive :D")

//const interface = 'Audio';
//const private = 534;

//Functions---
function logger() {
    console.log("My name is Harshit");
}
//calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,0));
//or
const appleJuice = fruitProcessor(10,20);
console.log(appleJuice);
const num = Number('23');

function calAge1(birthYear) {
    return 2021 - birthYear;
}
console.log(calAge1(1997));
//Function vs Expression function

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

console.log(calcAge2(1997));

//Arrow Functions
console.log('Arrow functions--');
//return works implicitly.note-birthYear is a parameter and calcAge3 is a function name
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1996);
console.log(`current age is ${age3}`);

//more parameters
const yearsUntilsRetirement = (birthYear,firstName) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`;
}

//console.log(`Harshit age left for the retirment is ${yearsUntilsRetirement(1997)}`);
console.log(yearsUntilsRetirement(1997,'Harshit'));

//Introduction arrays
const friend1 = 'Prabhat';
const friend2 = 'Rahul';
const friend3 = 'asdf';

const friends = ['Prabhat', 'Harshit' ,'Rahul'];
console.log(friends);

const years = new Array(1991,2002,2021);
console.log(years);
console.log(friends.length);

//Here array is not a primitive type so it can mutate.
friends[2] = 'jay';
console.log(friends);
//Hold different types of values
const harshit = ['Harhit','Verma', 2021 - 1998];
console.log(harshit);