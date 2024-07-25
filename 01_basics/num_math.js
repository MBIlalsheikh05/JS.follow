// const score = 4001
// const balance = new Number(100.5)
// console.log(balance);
// console.log(typeof balance);

const { Long } = require("mongodb");

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // use for e-com website to keep points valeus

// const round_Num= 85.4
// console.log(round_Num.toPrecision(2)); // use round num

// const ten_thous=100000
// console.log(ten_thous.toLocaleString('en-IN'));

// ---------------------- Maths ------------------------
// Properties
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.max(4,5,2,7,3));
// console.log(Math.min(4,6,7,8,9,2));
// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.round(Math.random()*10)+1);

// Generate a random number between 0 and 1
// let randomNum = Math.random();
// console.log("Random number between 0 and 1: " + randomNum);

// // Multiply by 10 to get a number between 0 and 10
// randomNum = randomNum * 10;
// console.log("Random number between 0 and 10: " + randomNum);

// // Round the number to the nearest integer
// let roundedNum = Math.round(randomNum);
// console.log("Rounded number: " + roundedNum);

// // Add 1 to get a number between 1 and 11
// let finalNum = roundedNum + 1;
// console.log("Final number (between 1 and 11): " + finalNum);

// // All in one line
// console.log("Result of Math.round(Math.random() * 10) + 1: " + (Math.round(Math.random() * 10) + 1));

// const min = 10
// const max = 20
// console.log(Math.round((Math.random() * (max-min +1)) + min))

console.log(Math.round((Math.random()*10)+10));