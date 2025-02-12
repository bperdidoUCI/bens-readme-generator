// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from '../utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    '(1/6) What is the title of your project?',
    '(2/6) What is your project about?',
    '(3/6) How do you install your project?',
    '(4/6) How do you use your project?',
    '(5/6) Who/where did you receive help from for this project?',
    '(6/6) Which license did you use for this project?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'credits',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'license',
                message: questions[5],
            },
        ])
        .then((answers) => {
            writeToFile('sample.md', answers)
        });
}

// Function call to initialize app
init();
