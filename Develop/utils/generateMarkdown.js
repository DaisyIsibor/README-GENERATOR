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
// If there is no license, return a message.
function renderLicenseSection(license) {
  //using the IF condition for below.
  if (!license || license ==='None' ){
    return 'No license selected.';
  }
  // this will display the license and license links
  return `## License
  This project is licensed under the [${license} License](${renderLicenseLink(license)}).
`;
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubUsername = data.githubUsername.replace(/\s/g, '');
  // Ensure that each section is included only if the corresponding data is provided
  let markdownContent = `# ${data.title}\n`;

  // Render license badge if a valid license is selected
  if (data.license) {
      markdownContent += `${renderLicenseBadge(data.license)}\n\n`;
  }

  // Table of Contents
  markdownContent += `## Table of Contents\n`;
  if (data.description) markdownContent += `- [Description](#description)\n`;
  if (data.Installation) markdownContent += `- [Installation](#Installation)\n`;
  if (data.Usage) markdownContent += `- [Usage](#Usage)\n`;
  if (data.contributing) markdownContent += `- [Contributing](#contributing)\n`;
  if (data.Tests) markdownContent += `- [Tests](#Tests)\n`;

  // TODO: Check if license section should be included in the Table of Contents
  if (data.license) markdownContent += `- [License](#license)\n\n`;

  // Description
  if (data.description) markdownContent += `## Description\n${data.description}\n\n`;

  // Installation
  if (data.Installation) markdownContent += `## Installation\n${data.Installation}\n\n`;

  // Usage
  if (data.Usage) markdownContent += `## Usage\n${data.Usage}\n\n`;

  // Contributing
  if (data.contributing) markdownContent += `## Contributing\n${data.contributing}\n\n`;

  // Tests
  if (data.Tests) markdownContent += `## Tests\n${data.Tests}\n\n`;

  // Questions section
  markdownContent += `## Questions\n`;
  markdownContent += `- **GitHub**: [${data.githubUsername}](https://github.com/${data.githubUsername})\n`;
  markdownContent += `- **Email**: ${data.email}\n\n`;

  // License
  if (data.license) markdownContent += renderLicenseSection(data.license);

  return markdownContent;
}

module.exports = generateMarkdown;