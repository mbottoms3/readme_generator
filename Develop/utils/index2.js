 // {
    //     type: 'confirm',
    //   message: 'Does your README have collaborators?',
    //   name: 'collab',
    // }

    // const response1 = userResponses.collab;
// const response1a = userResponses.collaborators;
// const response2 = userResponses.liveSite;
// const response3 = userResponses.license;
// console.log(response1);
// console.log(response2);
// console.log(response3);
// if (response1 === true) {
//     respond1();
    
// }
// switch (response1) {
//     case true:
//         respond1();
//         // console.log(response1a);
//         break;
//     case false:
//         question2();
//         break;
//     default:
//         console.log("default");
//         break;
// }


// switch (response2) {
//     case true:
//         respond2();
//         break;
//     case false:
//         question3();
//         break;
//     default:
//         console.log("default");
//         break;
// }

// switch (response3) {
//     case true:
//         respond3();
//         break;
//     default:
//         console.log("default");
//         break;
// }



// function respond1() {
//     inquirer.prompt([{
//         type: 'input',
//         message: 'Who were your collaborators?',
//         name: 'collaborators',
//         }])
//     .then(data => {
//         // console.log(data);
//         question2()
//     })  
// }

// function question2() {
//     inquirer.prompt([{
//         type: 'confirm',
//         message: 'Does your repo have a live site?',
//         name: 'liveSite',
//     }])
// }

// function respond2() {
//     inquirer.prompt([{
//         type: 'input',
//         message: 'Please input the live sit URL',
//         name: 'siteURL',
//         }])
//     .then(data => {
//             // console.log(data);
//         question3()
//     })
// }

// function question3() {
//     inquirer.prompt([{
//         type: 'confirm',
//         message: 'Does your README have licenses?',
//         name: 'license',
//     }])
    
// }

// function respond3() {
//     inquirer.prompt([{
//         type: 'input',
//         message: 'Please enter the licenses',
//         name: 'licenseInput',
//     }])
    
// }