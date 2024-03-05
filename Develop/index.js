// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
        type:'input',
        name:'title',
        message:'Please enter the title of the project'
    },
    {
        type:'input',
        name:'Description',
        message:'Please provide a brief description of the project'
    },

    {
        type:'input',
        name:'Installation',
        message:'Please enter the instructions to install'
    },
    {
        type:'input',
        name:'Usage',
        message:'please enter the usage information'
    },
    {
        type:'input',
        name:'contributing',
        message:'Please enter guidelines to your contribution:'
    },
    {
        type:'input',
        name:'Tests',
        message:'Add test instructions'
    },
    {
        type:'input',
        name:'githubUsername',
        message:'Please enter you GitHub Username'
    },
    {
        type:'input',
        name:'email',
        message:'Please enter you email address here'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for application:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${README} has been successfully generated`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // Generate a README content based on user's answers
        const readmeContent = generateMarkdown(answers);

        // Write README content to a file
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
