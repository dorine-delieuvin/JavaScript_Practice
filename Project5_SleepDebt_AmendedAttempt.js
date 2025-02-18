/*
Sleep Debt Calculator

Programme calculating weekly sleep debt using JavaScript - Codecademy Project

This project calculates if you’re getting enough sleep each week using a sleep debt calculator.
The program determines actual and ideal hours of sleep for each night of the last week.
It also calculates, in hours, how far you are from your weekly sleep goal.

User can amend their ideal sleep goal by changing the value of 'idealSleepPerNight' in the 'calculateIdealSleep' const.
Hours slept can be changed by amending the values the 'getActalSleep' const returns for each day of the week.
*/

// actual weekly sleep (hours)
const getActualSleep = (day) => {
  switch (day) {
    case "Monday":
      return 5.2;
    case "Tuesday":
      return 6.5;
    case "Wednesday":
      return 4;
    case "Thursday":
      return 6;
    case "Friday":
      return 8;
    case "Saturday":
      return 10;
    case "Sunday":
      return 9.51;
  }
};

const calculateActualSleep = () => {
  return Math.round(
    getActualSleep("Monday") +
      getActualSleep("Tuesday") +
      getActualSleep("Wednesday") +
      getActualSleep("Thursday") +
      getActualSleep("Friday") +
      getActualSleep("Saturday") +
      getActualSleep("Sunday")
  );
};

// ideal weekly sleep (hours)
const calculateIdealSleep = (idealSleepPerNight = 7) => {
  return idealSleepPerNight * 7;
};

// calculating sleep debt
const calculateSleepDebt = () => {
  let sleepDebt = calculateIdealSleep() - calculateActualSleep();
  if (sleepDebt === 0) {
    return `You slept ${calculateActualSleep()} hours of sleep this week. Just the right amount.`;
  } else if (sleepDebt > 0) {
    return `You slept ${calculateActualSleep()} hours this week. This is ${sleepDebt} hours short of your goal.`;
  } else if (sleepDebt < 0) {
    return `You slept ${calculateActualSleep()} hours this week. This is ${Math.abs(
      sleepDebt
    )} hours more than your goal.`;
  } else {
    return "There is an error.";
  }
};

// starting programme, displaying results
console.log(calculateSleepDebt());
