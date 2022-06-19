const fs = require('fs');

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(!license || license == 'None') {
    return '';
  }
  if(license == 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if(license == 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if(license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license || license == 'None') {
    return '';
  }
  if(license == 'Apache License 2.0') {
    return 'This application is covered under Apache License 2.0. Read the license at https://opensource.org/licenses/Apache-2.0';
  }
  if(license == 'GNU GPLv3') {
    return 'This application is covered under GNU GPLv3. Read the license at https://opensource.org/licenses/gpl-3.0.html';
  }
  if(license == 'MIT') {
    return 'This license is covered under the MIT License. Read the license at https://opensource.org/licenses/MIT';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#contribution)
  [Tests](#tests)
  [License](#license)
  [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  Visit my Github profile at github.com/${data.github}
  Send me an email at ${data.email}

`;
}

module.exports = generateMarkdown;