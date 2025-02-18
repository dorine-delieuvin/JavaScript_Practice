/*
Training days

Amend a programme to change the scope of the variable to make a code more maintanable
using JavaScript - Codecademy Project

Training days is an app that sends you a message for the event you signed up for and the days you have left to train.
The programme currently uses the wrong scope for its variables.
In this project, the goal is to make Traning Days more maintainable and less error-prone by fixing variable scopes.

Initial code has been included as reference,
Functional amended code below it.
*/

// initial code:
// The scope of `random` is too loose
/*
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  if (event === "Marathon") {
    let days = 50;
  } else if (event === "Triathlon") {
    let days = 100;
  } else if (event === "Pentathlon") {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight
const logEvent = (event) => {
  const name = "Nala";
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days) => {
  const name = "Nala";
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(event);
logTime(days);
*/

//###########################################################################
// amended code:
// The scope of `random` is too loose
// included random in getRandEvent
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
// declared days variable only once at the start of getTrainingDays
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  return days;
};

// The scope of `name` is too tight
// made the constant 'name' global
const logEvent = (event, name) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days, name) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Define a `name` variable. Use it as an argument after updating logEvent and logTime
const event = getRandEvent();
const days = getTrainingDays(event);
const name = "Peter";

logEvent(event, name);
logTime(days, name);
