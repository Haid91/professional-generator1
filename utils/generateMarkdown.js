// Function to return a license badge based on the license input
function renderLicenseBadge(license) {
    if (!license) return '';
    return `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    if (!license) return '';
    return `[License](https://opensource.org/licenses/${encodeURIComponent(license)})`;
  }
  
  // Function to return the license section of the README
  function renderLicenseSection(license) {
    if (!license) return '';
    return `## License
  
  This project is licensed under the terms of the ${license} license.`;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ${renderLicenseSection(data.license)}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
  }
  
  module.exports = generateMarkdown;