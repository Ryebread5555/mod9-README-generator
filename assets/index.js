// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ([
{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
}, 
{   type: "input",
    message: "Give a detailed description of your project.",
    name: "description"
},
{
    type: "input",
    message: "Table of Contents.",
    name: "table of contents"
},
{
    type: "input",
    What: "What are the required installations to run this app?",
    name: "installations"
},
{
    type: "input",
    message: "What is this app used for?",
    name: "usage"
},
{
    type: "list",
    message: "What liscensing is being used?",
    name: "license",
    choices: [
        "MIT"
    ]
},
{
    type: "list",
    message: "Who contributed to this project?",
    name: "contributing"
},
{
    type: "list",
    message: "What commands are needed to test this app?",
    name: "tests"
},
{
    type: "list",
    message: "Contact info for inquirers.",
    name: "questions"
}
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
