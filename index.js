// importing node package manager modules
const inquirer = require('inquirer');
const fs = require('fs');

// importing class from shapes.js
const {Square, Triangle, Circle} = require('./lib/shapes.js');


// function to promt user for input using 'prompt' module from npm
function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name:'text',
            message: 'Enter text (up to 3 character long) to be displayed on logo',
        },
        {
            type: 'input',
            name:'textColor',
            message: 'Pick a color for the text (Enter color name or hexidecimal value)',
        },
        {
            type: 'list',
            name:'shape',
            message: 'Pick a shape for the logo',
            choicees: ['square', 'circle', 'triangle'],
        },
        {
            type: 'input',
            name:'shapeColor',
            message: 'Pick a color for the shape (Enter color name or hexidecimal value)',
        },
    ])
    .then((answers) => {
        // error handling for text input (must be 3 characters or less for logo text)
        if (answers.text.length > 3) {
            console.log('Error: Text must be 3 characters or less');
            return;
        }
        else {
            writeToFile("logo.svg", answers);
        }
    });
}

// call function to prompt user for input
promptUser();