// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the title of your project:',
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please provide the table of contents:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide the license information:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide the contributing guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide the test instructions:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide your contact information for questions:',
    },
];


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error writing file:', err);
            return;
        }
        console.log('README file written successfully');
    });
}

// Function to get data from user
async function getData() {
    const data = await inquirer.prompt(questions);
    return data;
}

// Initialize function
async function init() {
    const data = await getData(); // Get user input
    const readmeContent = generateMarkdown(data) // Format the README content
    writeToFile('README.md', readmeContent); // Write the README file
}

// Function call to initialize app
init();