/*Converting Temperatures
Converting temperature measured in Kelvin into Fahrenheit, then Newton, using JavaScript - Codecademy
*/

// Converting Kelvin to Fahrenheit
// measured temperature in Kelvin
const kelvin = 293

// Kelvin converted to Celcius
let celsius = kelvin - 273

// Kelvin converted to Celcius
let fahrenheit = celsius * (9/5) + 32

// rounding down the result
fahrenheit = Math.floor(fahrenheit)

// printing the result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


// Converting to the Newton scale
// Celsius converted to Newton scale
let newton = celsius * (33/100)

// rounding down the result
newton = Math.floor(newton)

// printing the result
console.log(`The temperature is ${newton} degrees Newton.`)