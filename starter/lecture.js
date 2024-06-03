'use strict';

//! 171 Lecture: Converting and Checking Numbers

//* In javascript, all numbers are represented as floating point numbers or decimals. 

console.log(23 === 23.0);

//* Numbers are always represented in binary form. Base 10 is #0-9, binary is base 2-0 1. Example: 

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 === 0.3); // * <--- this is a common error in javascript that we have to deal with. 

//? string to number conversion
console.log(Number('23'));
console.log(+'23'); // * <--- allows you to convert string to number, using + operator 

//? parsing 

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

//? Square roots 

// * square roots are also part of the math namespace

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5,18,23,11,2)); //* <--- max value is logged here, i.e., 23. It does not parse. 


console.log(Math.min(5,18,23,11,2)); // * <--- min value 

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

// * Function that always gives a number between min and max, rather than only using random between 0-1
const randomInt = (min,max) => Math.trunc(Math.random() * (max - min) + 1) + min; 

console.log(randomInt(10,20)); 

//? Rounding integers

console.log(Math.floor(23.3)); // * <--- removes decimal point 

console.log(Math.round(23.3)); // * <--- rounds to nearest decimal point
console.log(Math.round(23.5)); // * <--- rounds to nearest decimal point

console.log(Math.ceil(23.3)); // * <--- rounds to nearest max whole number, type coersion goes into effect if using string
console.log(Math.ceil('23.5')); // * <--- rounds to nearest max whole number, type coersion goes into effect if using string

console.log(Math.floor(23.3)); // * <--- rounds to nearest min whole number, type coersion goes into effect if using string
console.log(Math.floor(23.5)); // * <--- rounds to nearest min whole number, type coersion goes into effect if using string

//* example(s) w/ negative numbers per above
console.log(Math.trunc(-23.3)); 
console.log(Math.floor(-23.3)); //* <--- notice that this rounds to the nearest max whole number, since it works the other way around (i.e., being a neg num)

//? Rounding decimals 
console.log((2.7).toFixed(0)); //* toFixed always returns a string and not a number as seen in console log
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

//! 173 Lecture: The Remainder Operator 
 
//* The remainder operator simply returns the remainder of a division - see below:

console.log(5 % 2); //* result is 1 and not 2.5, since one is the remainder 

console.log(5 / 2); //* <--- 5 = 2 * 2 = 1 (with one being the remainder)

console.log(8%3);

console.log(8 / 3); //* <--- 8 = 2 * 3 + 2 

console.log(6 % 2 ); //* <--- this returns 0, as the result is an integer. we can use this to check if a number is even or not. 

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function(){
[...document.querySelectorAll('.movements__row')].forEach(function(row,i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if(i % 3 === 0) row.style.backgroundColor = 'yellow';
});
}); 

//! 174 Lecture: Numeric Separators

//* Numeric separators are best for working with really large numbers. 

// const diameter = 2874600000000; //* <--- for example, reading this without commas is unordinary, therefore we can use built in separators
const diameter = 287_460_000_000; 
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415
console.log(PI);

//* final note - when we attempt to translate strings to numbers using underscore, it does not work properly. 

console.log(Number('230_000')); //* returns as NaN


