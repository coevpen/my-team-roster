const fs = require('fs');

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

// writes the top of the html page index.html
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

// writes the middle and bottom parts of the file
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

module.exports = {
    copyFile,
    writeFile,
    appendFile
};