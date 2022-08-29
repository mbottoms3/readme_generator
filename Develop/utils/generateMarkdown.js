function renderLicenseBadge(license) {
  let yourLicense = "";
  yourLicense = `This project uses the ${license} license.  
  
  [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`;
  return yourLicense;
}

function renderLicenseLink(license) {
  if (license === 'GNU') {
    return `https://choosealicense.com/licenses/agpl-3.0/`;
  }
  if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`;
  } 
  if (license === 'Apache') {
    return `https://choosealicense.com/licenses/apache`;
  }
}

function generateMarkdown(userResponses) {
  return `##${userResponses.name}

  ## Description
  ${userResponses.description}
  ${userResponses.motivation}
  
  ## Table of Contents
  1. Installation
  2. Usage
  3. Credits
  4. License Information
  5. Tests
  6. Questions
  
      
  ## Installation
  The GitHub Repository can be found here: ${userResponses.github}
  
  ## Usage
  ${userResponses.usage}
  
  ## Credits
  ${userResponses.collaborators}
  
  ## License Information
  ${renderLicenseBadge(userResponses.license)}
  
  ## Tests
  ${userResponses.tests}
  
  ## Questions
  If there are any questions please reach out to me at ${userResponses.email}` 
  
}

module.exports = generateMarkdown;
