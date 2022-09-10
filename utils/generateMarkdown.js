// Function return the selected license's badge
function renderLicenseBadge(license) {
  let yourLicense = "";
  yourLicense = `This project uses the ${license} license.  
  
  [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`;
  return yourLicense;
}

// Function to choose the appropriate license based on user selection
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


// Function to be called in index.js which will write the following template including the user's responses
function generateMarkdown(userResponses) {
  return `##${userResponses.name}

  ## Description
  ${userResponses.description}

  ${userResponses.motivation}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#usage)
  4. [Licensing](#licensing)
  5. [Tests](#test)
  6. [Questions](#questions)
  
      
  ## Installation
  The GitHub Repository can be found here: ${userResponses.github}
  
  ## Usage
  ${userResponses.usage}
  
  ## Credits
  ${userResponses.collaborators}
  
  ## Licensing
  ${renderLicenseBadge(userResponses.license)}
  
  ## Tests
  ${userResponses.tests}
  
  ## Questions
  If there are any questions please reach out to me at ${userResponses.email}

  Github profile: [${userResponses.profile}](https://github.com/${userResponses.profile})` 
  
}

module.exports = generateMarkdown;



