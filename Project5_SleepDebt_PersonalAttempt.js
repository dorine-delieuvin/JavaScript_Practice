/*
Sleep Debt Calculator

Programme calculating weekly sleep debt using JavaScript - Codecademy Project

This project calculates if you’re getting enough sleep each week using a sleep debt calculator.
The program determines actual and ideal hours of sleep for each night of the last week.
It also calculates, in hours, how far you are from your weekly sleep goal.

This attempt assumed that the user was inputing the data themself,
thus, the actual sleep data and goal should be entered in the function call as described l.69

Another version of tis programme was written, following the intended method more closely.
*/

// actual weekly sleep (hours)
function actualSleep(
  sleepDay1,
  sleepDay2,
  sleepDay3,
  sleepDay4,
  sleepDay5,
  sleepDay6,
  sleepDay7
) {
  let actualWeeklySleep = Math.round(
    sleepDay1 +
      sleepDay2 +
      sleepDay3 +
      sleepDay4 +
      sleepDay5 +
      sleepDay6 +
      sleepDay7
  );
  return actualWeeklySleep;
}

// ideal weekly sleep (hours)
function idealSleep(idealSleepPerNight) {
  let idealWeeklySleep = idealSleepPerNight * 7;
  return idealWeeklySleep;
}

// calculating sleep debt
function sleepDebt(
  sleepDay1,
  sleepDay2,
  sleepDay3,
  sleepDay4,
  sleepDay5,
  sleepDay6,
  sleepDay7,
  idealSleepPerNight = 7
) {
  let sleepDebt =
    idealSleep(idealSleepPerNight) -
    actualSleep(
      sleepDay1,
      sleepDay2,
      sleepDay3,
      sleepDay4,
      sleepDay5,
      sleepDay6,
      sleepDay7
    );
  return `Your current sleep debt is ${sleepDebt} hour(s), rounded to the closest hour.`;
}

// starting programme, displaying results
// user should enter their data as follow:
//sleepDebt(sleepDay1, sleepDay2, sleepDay3, sleepDay4, sleepDay5, sleepDay6, sleepDay7, idealSleepPerNight)
console.log(sleepDebt(7, 7.5, 6.45, 7.15, 7.45, 8, 10, 8));

// testing other data
//console.log(sleepDebt(2, 2, 2, 2, 2, 2, 3, 2)); // should log -1 h
//console.log(sleepDebt(0, 0, 0, 0, 0, 0, 0, 8)); // should log 56 h
//console.log(sleepDebt(8, 8, 8, 8, 8, 8, 8, 8)); // should log 0 h
//console.log(sleepDebt(8, 8, 8, 8, 8, 8, 8)); // should log -7 h
