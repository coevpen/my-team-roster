const Employee = require('./Employee');

class Manager extends Employee{
    constructor(){
        super();
        this.officeNum = officeNum;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;