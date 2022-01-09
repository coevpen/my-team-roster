const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(){
        super();
    }
    getGithub(){

    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;