'use strict';

//! 171 Lecture: Converting and Checking Numbers

//* In javascript, all numbers are represented as floating point numbers or decimals. 

console.log(23 === 23.0);

//* Numbers are always represented in binary form. Base 10 is #0-9, binary is base 2-0 1. Example: 

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 === 0.3); // * <--- this is a common error in javascript that we have to deal with. 

// string to number conversion
console.log(Number('23'));
console.log(+'23'); // * <--- allows you to convert string to number, using + operator 

// parsing 

console.log(Number.parseInt('30px', 10)); // * <--- parsing allows us to retreive the number in a string, although there may be additional characters

// * the string must start with a number, or it will log as NaN
console.log(Number.parseInt('px30', 10));

console.log(Number.parseInt('2.5rem')); 
console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(20/0));

// * Best way to check if something is a number - using isFinite. See below: 
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(20 / 0));


//! 172 Lecture: Math and Rounding 

