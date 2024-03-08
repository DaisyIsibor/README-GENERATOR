// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  
  const licenseBadges={

    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-purple.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-red.svg)](https://opensource.org/licenses/BSD-3-Clause)'
     
  };
  // If there is no license, return an empty string
  return licenseBadges[license] || '';
}


// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  // Map license names to their respective URLs
  const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
      
  };
  // If there is no license, return an empty string
  return licenseLinks[license] || '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //using the IF condition for below.
  if (!license || license ==='None' ){
    return '';
  }
  // this will display the license and license links
  return `## License
  This project is licensed under the [${license} License](${renderLicenseLink(license)}).
`;
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  - **GitHub**: [${data.githubUsername}](https://github.com/${data.githubUsername})
  - **Email**: ${data.email}
  
  ## License
  ${renderLicenseSection(data.license)}
  `;
  }

module.exports = generateMarkdown;
