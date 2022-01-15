const inquirer = require('inquirer');
const fileWriting = require('./src/fileWrite');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// prompt the user for info
const initManager = () => {
  console.log("Please build your team");
  return inquirer
      .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: name => {
                if(name){
                    return true;
                }
                else{
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: id => {
                if(id){
                    return true;
                }
                else{
                    console.log("Please enter an ID numer.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: email => {
                if(email){
                    return true;
                }
                else{
                    console.log("Please enter an email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the team manger's office number?",
            validate: officeNum => {
              if(officeNum){
                  return true;
              }
              else{
                  console.log("Please enter an office number.");
                  return false;
              }
          }
        }
      ])
      .then(managerInfo => {
        // create the index.html page with html before the employee cards
        const topPage = generatePage.generateTop();
        fileWriting.writeFile(topPage);

        // creates the manager object with the info given
        const { name, id, email, officeNum} = managerInfo;
        const manager = new Manager(name, id, email, officeNum);

        // create the manager card and append it to the html page
        const managerHTML = generatePage.addManager(manager);
        fileWriting.appendFile(managerHTML);
      })
};

const addEmployees = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the team member's name?",
        validate: name => {
            if(name){
                return true;
            }
            else{
                console.log("Please enter the team member's name.");
                return false;
            }
        }
      },
      {
        type: 'number',
        name: 'id',
        message: "What is the team member's id?",
        validate: id => {
            if(id){
                return true;
            }
            else{
                console.log("Please enter an ID numer.");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team member's email?",
        validate: email => {
            if(email){
                return true;
            }
            else{
                console.log("Please enter an email address.");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your team member's github username?",
        when: (input) => input.role === "Engineer",
        validate: github => {
          if(github){
              return true;
          }
          else{
              console.log("Please enter a github username.");
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "What is your team member's school name?",
        when: (input) => input.role === "Intern",
        validate: school => {
          if(school){
              return true;
          }
          else{
              console.log("Please enter a school.");
              return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployees',
        message: "Would you like to add more team members?",
        default: false
      },
    ])
    .then(employeeInfo => {
      let { role, name, id, email, github, school, confirmAddEmployees} = employeeInfo;

      if(role === "Engineer"){
        let engineer = new Engineer(name, id, email, github);
        let engineerHMTL = generatePage.addEngineer(engineer);
        fileWriting.appendFile(engineerHMTL);

      }
      else if(role === "Intern"){
        let intern = new Intern(name, id, email, school);
        let internHTML = generatePage.addIntern(intern);
        fileWriting.appendFile(internHTML);
      }
      if(confirmAddEmployees){
        addEmployees();
      }
    })
};

// Function call to initialize app
initManager()
  .then(addEmployees)
  .then(fileWriting.appendFile(generatePage.generateBottom()))
  .then(fileWriting.copyFile());