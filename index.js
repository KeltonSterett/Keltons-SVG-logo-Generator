// importing node package manager modules
const inquirer = require('inquirer');
const fs = require('fs');

// importing class from shapes.js
const {Square, Triangle, Circle} = require('./lib/shapes.js');

// function to write to file using 'fs' module from npm to use inquirer answers to create logo
function writeToFile(fileName, answers) {
    let svgString = "";
    // set width and height of logo
    svgString = 
    '<svg version="1.1"  width="300" height="300" xmlns="http://www.w3.org/2000/svg">';
    
    svgString += "<g>"; 

    svgString += `${answers.shape}`;

    let shapeInput;
    if (answers.shape === "square") {
        shapeInput = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "circle") {
        shapeInput = new Circle();
        svgString += `<circle cx="150" cy="150" r="80" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "triangle") {
        shapeInput = new Triangle();
        svgString += `<polygon points="150,40 73,200 227,200" fill="${answers.shapeColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>` ;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log('Success! Logo created! in logo.svg');
    });
}

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
            choices: ['square', 'circle', 'triangle'],
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