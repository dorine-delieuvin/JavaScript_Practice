/*
Race Day

Create a programme that assign runners a number and a start time
depending on their age and time of registration
using JavaScript - Codecademy Project

There are adult runners 18+ and youth runners -18 years of age. 
They can register early or late. 
Runners are assigned a race number and start time based on their age and registration.

Race number:
- Early adults receive a race number at or above 1000.
- All others receive a number below 1000.

Start time:
- Early adults run at 9:30 am.
- Late adults run at 11:00 am.
- Youth registrants run at 12:30 pm regardless of registration.
- But, runners exactly 18 will have to see the desk.
*/

// variables
const myAge = 52;
const myRegistration = "Early";

let giveNumber = Math.ceil(Math.random() * 1000);

// giving a number at or above 1000 to early adults, below 1000 otherwise
if (myAge > 18 && myRegistration === "Early") {
  giveNumberEarlyAdult = giveNumber + 1000;
  console.log(`Your attributed number is ${giveNumberEarlyAdult}.`);
} else {
  console.log(`Your attributed number is ${giveNumber}.`);
}

// defining the race start time depending on age and registration time
if (myAge > 18 && myRegistration === "Early") {
  console.log("Your race starts at 9:30 am.");
} else if (myAge > 18 && myRegistration === "Late") {
  console.log("Your race starts at 11:00 am.");
} else if (myAge < 18) {
  console.log("Your race starts at 12:30 pm.");
} else if (myAge === 18) {
  console.log(
    "Please see the desk for further information on your race start time."
  );
} else {
  console.log(
    'Please check the information you entered, the Registration accepts only "Early" and "Late" as values'
  );
}
