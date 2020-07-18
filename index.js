//require Inquirer package
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// Create table of content

// function: 
// {
//     type: "choices",
//     name: "Table of Contents",
//     message: "Table of conetents",
//     choices: ["Description", "Installation", "Usage", "Licence", "Contributing", "Tests", "Questions"]

// }

function promptModule() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Project Name",
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
            name: "Questions",
            message: "Please enter your username?" & "what's your email?"
        }
        ,
        {
            type: "confirm",
            name: "confirm",
            message: "Is the above correct?"
        }

    ])
        .then(function (response) {

            if (response.confirm === y) {
                console.log("Success");
            }
        })

}



async function init() {
    console.log("hi")
    try {
        const answers = await promptModule();

        //   const html = generateHTML(answers);
        // change file name to be input created from input to project name prompt
        await writeFileAsync("README.md", text);
        // await writeFileAsync(`$"Project Name".md text)

        console.log("Successfully wrote a README file");
    } catch (err) {
        console.log(err);
    }
}

init();