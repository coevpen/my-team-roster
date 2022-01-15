const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, gitHubId){
        super(name, id, email);
        this.gitHubId = gitHubId;
    }
    getGithub(){
        //return `<a href="https://github.com/${gitHubId}" target="_blank">${gitHubId}</a>`;
        return gitHubId;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;