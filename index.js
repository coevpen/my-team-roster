const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// prompt the user for info

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

// write index.html to dist folder/call the page-template.js to do so
// const pageHTML = generatePage();

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

// });