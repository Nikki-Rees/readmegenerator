//require Inquirer package
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//Prompt user for for answers
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "ProjectName",
            message: "Please enter your project name"
        }
        ,
        {
            type: "input",
            name: "Description",
            message: "Please enter a description for this project"
        }
        ,
        {
            type: "input",
            name: "Installation",
            message: "Please enter installation information for this project"
        }
        ,
        {
            type: "input",
            name: "Usage",
            message: "Please enter usage information for this project"
        }
        ,
        {
            type: "input",
            name: "Licence",
            message: "Please enter Licence information for this project"
        }
        ,
        {
            type: "input",
            name: "Contributing",
            message: "Please enter contribution information for this project"
        }
        ,
        {
            type: "input",
            name: "Test",
            message: "Please enter test information for this project"
        }
        ,
        // check how to ask two questions withint he same input name?
        {
            type: "input",
            name: "GithubUsername",
            message: "Please enter your GitHub username?",
            message: "Please enter your email"

        }
        ,
        {
            type: "input",
            name: "Email",
            message: "Please enter your email"

        }

    ])

}


const answers =

    generateREADME = (answers) => {
        return
        `${answers.ProjectName}
Licence: ${answers.licence}

Table of contents:
1[Description](#1 Description)
    2[Installation](#2 Installation)
    3[Usage](#3 Usage)
    4[Licence](#4 Licence)
    5[Contributing](#5 Contributing)
    6[Test](#6 Test)
    7[Questions](#7 Questions)

#1 Description
${answers.Description}

#2 Installation
${answers.Installation}

#3 Usage
${answers.Usage}

#4 Licence
${answers.Licence}

#5 Contributing
${answers.Contributing}

#6 Test
${answers.Test}

#7 Questions 
Github username: ${answers.GithubUsername}
If you have any questions about this application, please email me at ${answers.Email}

`
    }

// add an axio function to get the logo for the licence and append to the file?

async function init() {
    console.log("Hi")
    try {
        const answers = await promptUser();
        const README = generateREADME(answers);

        await writeFileAsync("README.md", README);
        console.log("Successfully wrote a README file");

    } catch (err) {
        console.log(err);
    }
}

init();
