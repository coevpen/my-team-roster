const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const email = 'email@email.com'
    const id = 1;
    const employee = new Employee('Sana', id, email);
  
    expect(employee.name).toBe('Sana');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@email.com');
    
  });

describe('employee get functions', () => {
    describe('get name', () => {
        it('should return the employee name', () => {
        const employee = new Employee('Sana', 1, 'email@email.com');

        const name = employee.getName();

        expect(name).toBe('Sana');
        });
    });

    describe('get id', () => {
        it('should return the employee id', () => {
            const employee = new Employee('Sana', 1, 'email@email.com');

            const id = employee.getId();
            expect(id).toEqual(1);
        });
    });

    describe('get email', () => {
        it('should return the employee email', () => {
            const employee = new Employee('Sana', 1, 'email@email.com');

            const email = employee.getEmail();
            expect(email).toBe('email@email.com');
        });
    });

    describe('get role', () => {
        it('should return the role as Employee', () => {
            const employee = new Employee('Sana', 1, 'email@email.com');

            const role = employee.getRole();
            expect(role).toBe('Employee');
        });
    });
});