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
        name:'description',
        message:'Please provide a brief description of the project',
        when: (answers) => !answers.description // prompts back to answer when no answer is provided 
    },

    {
        type:'input',
        name:'Installation',
        message:'Please enter the instructions to install',
        when: (answers) => !answers.installation // prompts back to answer when no answer is provided 
    },
    {
        type:'input',
        name:'Usage',
        message:'please enter the usage information',
        when: (answers) => !answers.usage //  prompts back to answer when usage answer is provided 
    },
    {
        type:'input',
        name:'contributing',
        message:'Please enter guidelines to your contribution:',
        when: (answers) => !answers.contributing // prompt back to answer when contribution answer is not provided 
    },
    {
        type:'input',
        name:'Tests',
        message:'Add test instructions',
        when: (answers) => !answers.tests // prompt back to answer when Tests answer is not provided 
    },
    
    {
        type:'input',
        name:'githubUsername',
        message:'Please enter you GitHub Username',
        when: (answers) => !answers.githubUsername // prompt back to answer when github username answer is not provided 
    },
    {
        type:'input',
        name:'email',
        message:'Please enter you email address here',
        when: (answers) => !answers.email // prompt back to answer when email answer is not provided 
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for application:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause'],
        default: 'MIT' // Set default value to MIT
    },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err); 
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
        console.error('Error initializing app:', error);
    });
}

// Function call to initialize app
init();







// Below are the license used and what it represents

//MIT License: The MIT License is a permissive open-source license that allows users to do almost anything with the software, including modifying, distributing, sublicensing, and using it for commercial purposes, as long as the original copyright notice and license are included.

// Apache License 2.0: The Apache License 2.0 is a permissive open-source license similar to the MIT License, but it also includes an express grant of patent rights from contributors to users. It permits users to modify, distribute, sublicense, and use the software for any purpose, including commercial purposes, as long as the original copyright notice and license are included and any significant modifications are documented.

// GNU General Public License version 3 (GPLv3): The GPLv3 is a copyleft license that requires derivative works of the software to also be distributed under the same license terms. It guarantees users the freedom to use, modify, and distribute the software, but it also requires that any modified versions of the software be made available under the same license terms.

// BSD 3-Clause License: The BSD 3-Clause License is a permissive open-source license that allows users to do almost anything with the software, including modifying, distributing, sublicensing, and using it for commercial purposes, as long as the original copyright notice and license are included. It also includes a disclaimer of liability