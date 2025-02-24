/*
Secret Message

Use array methods to find a secret message
using JavaScript - Codecademy Project

Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any methods with which you are not familiar.
*/

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// remove the last string of the 'secretMessage' array.
secretMessage.pop();

// add 'to' and 'Programme' to the end of the array.
secretMessage.push("to", "Programme");

// change the word 'easily' to the word 'right'.
secretMessage[secretMessage.indexOf("easily")] = "right";

// remove the first string from the array.
secretMessage.shift(secretMessage[0]);

// add the word 'Programming' to the beginning of the array.
secretMessage.unshift("Programming");

// replace strings 'get', 'right', 'the', 'first' and 'time,' in the array and replace with a single string, 'know,'.
secretMessage.splice(
  secretMessage.indexOf("get"),
  secretMessage.indexOf("time,") - secretMessage.indexOf("get") + 1,
  "know,"
);

// use .join() to print the message to the console as a sentence, separating the strings with a space.
console.log(secretMessage.join(" "));
