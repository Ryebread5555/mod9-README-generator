// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ([
{
    type: "input",
    message: "This is a README generator! Start by providing your name:",
    name: "name"
},
{
    type: "input",
    message: "Enter your GitHub Username:",
    name: "github"
},
{
    type: "input",
    message: "Enter your email address:",
    name: "email"
},
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
    What: "What are the required installations to run this app?",
    name: "installation"
},
{
    type: "input",
    message: "What is this app used for?",
    name: "usage"
},
{
    type: "list",
    message: "What liscensing is being used?",
    name: "licenses",
    choices: [
        "MIT",
        "GPL"
    ]
},
{
    type: "input",
    message: "Who contributed to this project?",
    name: "contributing"
},
{
    type: "input",
    message: "What commands are needed to test this app?",
    name: "tests"
},
]);

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./gen.README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('Success! Your README is located in the "gen" folder.')
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
