const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// copy css to dist folder
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
};

//call to write the top of the html page index.html
const writeFile = createHTML => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', createHTML, err =>{
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    }); 
  });
};

//call to write the middle and bottom parts of the file
const appendFile = bodyContent => {
  return new Promise((resolve, reject) => {
    fs.appendFile('./dist/index.html', bodyContent, err=> {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File updated.'
      });
    });
  });
};

// prompt the user for info
const initManager = () => {
  console.log("Please build your team \n");
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
        writeFile(topPage);

        // creates the manager object with the info given
        const { name, id, email, officeNum} = managerInfo;
        const manager = new Manager(name, id, email, officeNum);

        // create the manager card and append it to the html page
        const managerHTML = generatePage.addManager(manager);
        appendFile(managerHTML);
      })
};

const addEmployees = () => {
  return inquirer
    .prompt([
      {

      }

    ])
    .then(employeeInfo => {

    })
};



// Function call to initialize app
initManager()
  .then(addEmployees())
  .then(appendFile(generatePage.generateBottom()))
  .then(copyFile());