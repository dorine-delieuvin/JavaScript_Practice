/*
Kelvin Weather

Convert temperatures measured in Kelvin into Fahrenheit, then Newton
using JavaScript - Codecademy Project

User should enter the measured temperature in Kelvin in the 'kelvin' constant
then run the programme to get the conversions in Fahrenheit and Newton
*/

// Converting Kelvin to Fahrenheit
// measured temperature in Kelvin
const kelvin = 293;

// Kelvin converted to Celcius
let celsius = kelvin - 273;

// Kelvin converted to Celcius
let fahrenheit = celsius * (9 / 5) + 32;

// rounding down the result
fahrenheit = Math.floor(fahrenheit);

// printing the result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting to the Newton scale
// Celsius converted to Newton scale
let newton = celsius * (33 / 100);

// rounding down the result
newton = Math.floor(newton);

// printing the result
console.log(`The temperature is ${newton} degrees Newton.`);
