const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// copy css to dist foler
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
            name: 'Manager',
            message: `What is the team manager's name?`,
            validate: managerName => {
                if(managerName){
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
            name: 'description',
            message: questions[1],
            validate: descrip => {
                if(descrip){
                    return true;
                }
                else{
                    console.log("Please enter a description of your project.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: installation => {
                if(installation){
                    return true;
                }
                else{
                    console.log("Please enter installation instructions.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            default: 'N/A'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[4],
            choices: ['MIT', 'PDDL','Artistic License 2.0', 'None']
            
        },
        {
            type: 'input',
            name: 'username',
            message: questions[5],
            validate: username => {
                if(username){
                    return true;
                }
                else{
                    console.log("Please enter your Github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[6],
            validate: email => {
                if(email){
                    return true;
                }
                else{
                    console.log("Please enter an email address for contact.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[7],
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'test',
            message: questions[8],
            default: 'npm test'
        },
      ])
      .then(managerInfo => {
        // create the index.html page with html before the employee cards
        const topPage = generatePage.generateTop();
        writeFile(topPage);

        // create the manager card and append it to the html page
        const managerHTML = generatePage.addManager(managerInfo);
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