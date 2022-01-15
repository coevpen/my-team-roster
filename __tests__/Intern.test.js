const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const email = 'email@email.com'
    const id = 5;
    const school = 'University of Texas';
    const intern = new Intern('Dahyun', id, email, school);
  
    expect(intern.name).toBe('Dahyun');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('University of Texas')
    
  });

  // tests the get functions for intern
  describe('intern get functions', () => {
    describe('get name', () => {
        it('should return the intern name', () => {
            const intern = new Intern('Dahyun', 5, 'email@email.com', 'University of Texas');

            const name = intern.getName();

            expect(name).toBe('Dahyun');
        });
    });

    describe('get id', () => {
        it('should return the intern id', () => {
            const intern = new Intern('Dahyun', 5, 'email@email.com', 'University of Texas');

            const id = intern.getId();
            expect(id).toEqual(5);
        });
    });

    describe('get email', () => {
        it('should return the intern email', () => {
            const intern = new Intern('Dahyun', 5, 'email@email.com', 'University of Texas');

            const email = intern.getEmail();
            expect(email).toBe('email@email.com');
        });
    });

    describe('get role', () => {
        it('should return the role as Intern', () => {
            const intern = new Intern('Dahyun', 5, 'email@email.com', 'University of Texas');

            const role = intern.getRole();
            expect(role).toBe('Intern');
        });
    });
});