/*Magic 8 Ball

Create a programme in which the user inputs a question
and the programme logs randomly one of 5 sentences 
using JavaScript

User should input their question in the myQuestion constant and run the programme
*/

// stores the question
const myQuestion = ''

// create the case that will be returned, generating a random integer between 1 and 5
let myFortune = 'fortune'+ Math.ceil(Math.random() * 5) 

// returning a random fortune when a question is inputed, or request a question if myQuestion is empty
if (myQuestion) {
    switch (myFortune) {
        case 'fortune1':
            console.log('Do not loose hope, your day will come.');
            break;
        case 'fortune2':
            console.log('This is a really good question...');
            break;
        case 'fortune3':
            console.log('I am affraid this will never happen.');
            break;
        case 'fortune4':
            console.log('It might come sooner that you think.');
            break;
        case 'fortune5':
            console.log('You\'re in for a surprise with that one!');
            break;
    }
} else {
    console.log('Please enter a question.');
}