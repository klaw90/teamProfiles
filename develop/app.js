const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function init() {
    function createManager() {
        inquirer.prompt([
            {
    type: "list",
    name: "memberChoice"
    message: "What is the role"
    choices: ""
            }
        ]).then(res) => {
            switch(memberChoice) {
                case: "Engineer"
                createEngineer();
                case: "Intern"
                createIntern();
                default: 
                createTeam();
                break;
            }
        }
    }

    function createEngineer() {

    }

    function createIntern() {

    }

    function createTeam() {

    }


    function buildTeam() {
        fs.writeToFile
    }

    createManager();
}

init();
