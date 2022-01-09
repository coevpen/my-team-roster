const Employee = require('./Employee');

class Intern extends Employee{
    constructor(){
        super();
        this.school = school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;