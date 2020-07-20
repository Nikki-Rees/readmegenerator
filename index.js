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
            name: "title",
            message: "Please enter your project name"
        }
        ,
        {
            type: "input",
            name: "description",
            message: "Please enter a description for this project"
        }
        ,
        {
            type: "input",
            name: "installation",
            message: "Please enter installation information for this project"
        }
        ,
        {
            type: "input",
            name: "usage",
            message: "Please enter usage information for this project"
        }
        ,
        {
            type: "input",
            name: "licence",
            message: "Please enter Licence information for this project"
        }
        ,
        {
            type: "input",
            name: "contributing",
            message: "Please enter contribution information for this project"
        }
        ,
        {
            type: "input",
            name: "test",
            message: "Please enter test information for this project"
        }
        ,
        // check how to ask two questions withint he same input name?
        {
            type: "input",
            name: "githubusername",
            message: "Please enter your Github username"
        }
        ,
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        }

    ])
}


//const answers =

function generateREADME(answers) {
    return `Title:${answers.title}
Licence: ${answers.licence} ![alt text](http://url/to/img.png)

Table of contents:
    1[Description](#1 Description)
    2[Installation](#2 Installation)
    3[Usage](#3 Usage)
    4[Licence](#4 Licence)
    5[Contributing](#5 Contributing)
    6[Test](#6 Test)
    7[Questions](#7 Questions)

# 1 Description
${answers.description}

# 2 Installation
${answers.installation}

# 3 Usage
${answers.usage}

# 4 Licence
${answers.licence}

# 5 Contributing
${answers.contributing}

# 6 Test
${answers.test}

# 7 Questions 
Github username: ${answers.githubusername}
If you have any questions about this application, please email me at ${answers.email}
`
}

async function init() {
    console.log("Hi");
    try {
        const answers = await promptUser();
        console.log(answers);
        const README = generateREADME(answers);
        await writeFileAsync("README.md", README);
        console.log("Success!")
    } catch {
        console.log(err);
    }
    // const answers = promptUser().then(answers => {
    //     console.log(answers);
    //     const README = generateREADME(answers);
    //     return writeFileAsync("README.md", README);
    // }).then(o => {
    //     console.log("Success!");
    // }).catch(err => {
    //     console.log(err);
    // })
}

init();
