// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your application?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Please describe the application (what does it do? how did you build it?)',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What was the motivation for building this application?',
        name: 'motivation',
      },
    {
        type: 'input',
      message: 'Please enter your GitHub Repository URL',
      name: 'github',
      },
      {
        type: 'input',
      message: 'If there were any licenses, please enter them here.  If none, enter "None were used"',
      name: 'licenses',
      },
      {
        type: 'input',
      message: 'Does your application have any collaborators?  If not, enter "There were no collaborators on this project"',
      name: 'collaborators',
      }
   
]) 
.then((data) => {
    console.log(data);
    fs.writeFile('README.md', createReadme(data), (err) => {
      if (err) {
        console.log(err);
      }
    });
});



function createReadme(userResponses) {
console.log(userResponses);
return `#${userResponses.name}

## Description
${userResponses.description}
${userResponses.motivation}
    
## Installation
The GitHub Repository can be found here: ${userResponses.github}

## Credits
${userResponses.collaborators}

## License
${userResponses.licenses}

## Badges` 
}

