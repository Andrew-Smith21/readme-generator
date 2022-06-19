// packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'installation-instructions',
      message: 'Provide instructions on how to install your project (Required)',
      validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter installation instructions for your project!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'usage-instructions',
      message: 'Provide instructions on how to use your project (Required)',
      validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter usage instructions for your project!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'contribution-guidelines',
      message: 'Provide guidelines on how to contribute to your project (Required)',
      validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter contrbution guidelines for your project!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'test-instructions',
      message: 'Provide instructions on how to test your project (Required)',
      validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter test instructions for your project!');
            return false;
          }
        }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please choose which open source license you would like to use',
      choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your Github Username!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
      validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// Function to initialize app
const promptUser = () => {
  return inquirer.prompt(questions);
}


// Function call to initialize app
promptUser();