// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
      message: 'Please describe the usage of this app',
      name: 'usage',
      },
      {
        type: 'list',
      message: 'Choose from which licenses you would like included',
      choices: ['MIT', 'GNU', 'Apache'],
      name: 'license',
      },
      {
        type: 'input',
      message: 'Does your application have any collaborators?  If not, enter "There were no collaborators on this project"',
      name: 'collaborators',
      },
      {
        type: 'input',
      message: 'Is there any relevant testing information?',
      name: 'tests',
      },
      {
        type: 'input',
      message: 'Please enter your email',
      name: 'email',
      }
   
]) 
.then((data) => {
    // console.log(data);
    fs.writeFile('README.md', generateMarkdown(data), (err) => {
      if (err) {
        console.log(err);
      }
    });
});





