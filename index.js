// Global Variables
const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const inquirer = require("inquirer");

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");


const teamMembers = [];

const questionsManager = [{
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's work email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
    },
    {
        type: "list",
        name: "members",
        message: "Do you want to add a team member? If yes, select their role.",
        choices: ["Engineer", "Intern", "I'm done."],
    },
];

// FUNCTION DECLARATIONS 
const askEngineer = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What id your engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your engineer's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's work email?",
            },
            {
                type: "input",
                name: "GitHub",
                message: "What is your engineer's GitHub username?",
            },
            {
                type: "list",
                name: "members",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I'm done."],
            },
        ])
        .then((data) => {
            teamMembers.push(
                new Engineer(data.name, data.id, data.email, data.GitHub)
            );
            if (data.members === "Engineer") {
                askEngineer();
            } else if (data.members === "Intern") {
                askIntern();
            } else {
                let data = generateHTML(teamMembers);
                fs.writeFileSync("team.html", data, "utf-8");
            }
        });
};

const askIntern = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's work email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school?",
            },
            {
                type: "list",
                name: "members",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I'm done."],
            },
        ]).then((data) => {
            teamMembers.push(
                new Intern(data.name, data.id, data.email, data.school)
            );
            if (data.members === "Engineer") {
                askEngineer();
            } else if (data.members === "Intern") {
                askIntern();
            } else {
                let data = generateHTML(teamMembers);
                fs.writeFileSync("team.html", data, "utf-8");
            }
        });
};

const init = () => {
    inquirer.prompt(questionsManager).then((data) => {
        teamMembers.push(
            new Manager(data.name, data.id, data.email, data.officeNumber)
        );
        if (data.members === "Engineer") {
            askEngineer();
        } else if (data.members === "Intern") {
            askIntern();
        } else {
            //end function here so we can generate HTML
            let data = generateHTML(teamMembers);
            fs.writeFileSync("team.html", data, "utf-8");
        }
    });
};

// Function Calls
init();