/*
Dog Years

Convert Human age into Dog age equivalent
using JavaScript - Codecademy Project

The 2 first years of a dog are equivalent to 21 human years.
Every dog year after that are equivalent to 4 human years.

The user should enter their age (in human years) in the 'myAge' constant,
and run the programme to convert it in the equivalent in dog years.
*/

// storing my age
const myAge = 29;

// setting value for the early years
let earlyYears = 2;

// dog years calculation for early years
earlyYears *= 10.5;

// removing the 2 early years accounted for from my age
let laterYears = myAge - 2;

// dog years calculation for later years
laterYears *= 4;

// adding early and later years
let myAgeInDogYears = earlyYears + laterYears;

// assign my name in lower case in variable
const myName = "Flower".toLowerCase();

// display age and age in dog years
console.log(
  `My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`
);
