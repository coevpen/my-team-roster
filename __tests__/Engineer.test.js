const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const email = 'email@email.com'
    const id = 5;
    const gitHubId = 'minatwice';
    const engineer = new Engineer('Mina', id, email, gitHubId);
  
    expect(engineer.name).toBe('Mina');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.gitHubId).toBe('minatwice')
    
  });

  // tests the get functions for engineer
  describe('Engineer get functions', () => {
    describe('get name', () => {
        it('should return the Engineer name', () => {
            const engineer = new Engineer('Mina', 5, 'email@email.com', 'minatwice');

            const name = engineer.getName();

            expect(name).toBe('Mina');
        });
    });

    describe('get id', () => {
        it('should return the Engineer id', () => {
            const engineer = new Engineer('Mina', 5, 'email@email.com', 'minatwice');

            const id = engineer.getId();
            expect(id).toEqual(5);
        });
    });

    describe('get email', () => {
        it('should return the Engineer email', () => {
            const engineer = new Engineer('Mina', 5, 'email@email.com', 'minatwice');

            const email = engineer.getEmail();
            expect(email).toBe('email@email.com');
        });
    });

    describe('get role', () => {
        it('should return the role as Engineer', () => {
            const engineer = new Engineer('Mina', 5, 'email@email.com', 'minatwice');

            const role = engineer.getRole();
            expect(role).toBe('Engineer');
        });
    });
});