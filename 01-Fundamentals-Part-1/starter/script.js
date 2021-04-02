// Strings and Template Literals
const firstName = 'Harshit';
const job = 'Software Developer';
const birthYear = 1998;
const year = 2021;

const jonas = "I'm " + firstName + ' a ' + (year - birthYear) + ' Years old ' + job + '!';
console.log(jonas); 
//Template strings--using backtic ``(ES6)
const harshitNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(harshitNew);

console .log(`Just a regular string`);

console.log('String with \n\ multiple \n\ lines');
//using template string
console.log(`String
multiple
lines`);

//Taking Decisions:if/else statements
const age = 15;
const isOldEnough = age >= 19;

if(age >= 18)
{
    console.log('Harshit can start driveing license');
}
else{
    const yearLeft = 18 - age;
    console.log(`Harshit is too young. wait another 
    ${yearLeft} years :`);
}

const bYear = 1998;
let centuary;
if(bYear <= 2000)
{
    centuary = 20;
}
else{
    centuary = 21;
}
console.log(centuary);

//Type conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Harshit'));
console.log(typeof NaN);

console.log(String(23),23);

//Type coercion- it handles when values are dealing with two different datatypes
console.log('I am' + 23 + ' Years old');
console.log('I am' + '23' + ' Years old');
console.log('23' - '10' -3);
//Guess the output
let n = '1' + 1; //11
n = n - 1;
console.log(n);