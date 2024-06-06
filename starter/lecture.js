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

//! 175 Lecture: Working with BigInt

// * BigInt is a special type of integer category that was introduced in 2020. 

// * Numbers are stored in 64 bits as we know, though only 53 0s and 1s are used. The rest is for spacing, decimals, etc. 
// * This means that numbers are limited in size. We can calculate this accordingly. 

console.log(2 ** 53 - 1); //* <--- 9007199254740991 as the result. This is the biggest number that JavaScript can "safely" represent.
console.log(Number.MAX_SAFE_INTEGER); //* this number is important enough to be stored in the Number object as MAX_SAFE_INTEGER
console.log(2 ** 53 + 1); 

// * BigInt allows us to store numbers as large as desired, in the event that it's necessary say from an API. 

console.log(456412131235464561231316564654n);
console.log(BigInt(4564121312));

// ? Operations with Big Int numbers

console.log(10000n + 10000n);
console.log(5145132135214651n * 100000000n);

//* it is not possible to mix Big Ints with regular numbers

const huge = 546545613213546456415161n;
const num = 23;

// console.log(huge * num); // * returns error. 
console.log(huge * BigInt(num)); 

// ? Exceptions 
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);


// ? Divisions
console.log(10n / 3n);
console.log(10 / 3);


//! 176 Lecture: Creating Dates 

// ? Create a date (four methods to create a date)

// const now = new Date();
// console.log(now);
// console.log(new Date('Jun 04 2024 11:02:53')); //* JavaScript parses the string here based upon info within the string
// console.log(new Date(account1.movementsDates[0])); //* the Z at the end of this string represents a universal time zone. explains why the time is different. 

// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(2037, 10, 33, 15, 23, 5)); //* JavaScript automatically corrects the date, given there is a miscalculation or input error

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //* <--- this is how to convert timestamp

//? Working with dates


// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); //* this is actually getDay
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // * gets time stamp

// console.log(new Date(2142278580000)); 

// console.log(Date.now()); //* returns current time stamp

// future.setFullYear(2040);
// console.log(future);


//! 177 Lecture: Adding Dates to Bankist App (see script file)


//! 178 Lecture: Operations with dates

//* we can do calculations with dates (obviously), i.e., calculating two dates, etc

//* time stamps are going to be useful in this situation

const future = new Date(2037, 10, 19, 15, 23);
console.log(+(future));

//* function that takes in two dates, and calculates number of days passed between both dates

const calcdaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000*60*60*24)

const days1 = calcdaysPassed(new Date(2037, 3, 14),new Date(2037,3,4));
console.log(days1);

//! 179 Lecture: Internationalization with dates (intl) - see script file 

//* JavaScript developed a internationalization API for different time zones, to set a standard to allow us to simply support different languages for users around the world. 

//! 180 Lecture: Internationalizing Numbers (intl) 

//? Experiments with numbers

const number = 3884764.23;

const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR',
    useGrouping: false,
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(number));
console.log('Germany: ', new Intl.NumberFormat('de-DE',options).format(number));
console.log('Browser: ', new Intl.NumberFormat(navigator.language, options).format(number));

//! 181 Lecture: Timers: setTimeout and setInterval

//* we can use set timeout to execute some code at some point in the future

// ? Simulating ordering a pizza

const ingredients = ['olives', 'green peppers']
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 5000, ...ingredients); //* as soon as javascript hits this line of code, it counts the time in the background and registers the callback function to be called after the time has elapsed. Also called asynchronous javascript.

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(function(){
//     const newDate = new Date();
//     console.log(newDate);
// }, 1000)