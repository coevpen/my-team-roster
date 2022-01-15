const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const email = 'email@email.com'
    const id = 1;
    const officeNum = 502;
    const manager = new Manager('Jihyo', id, email, officeNum);
  
    expect(manager.name).toBe('Jihyo');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNum).toEqual(expect.any(Number))
    
  });

  describe('manager get functions', () => {
    describe('get name', () => {
        it('should return the manager name', () => {
        const manager = new Manager('Jihyo', 1, 'email@email.com', 502);

        const name = manager.getName();

        expect(name).toBe('Jihyo');
        });
    });

    describe('get id', () => {
        it('should return the manager id', () => {
            const manager = new Manager('Jihyo', 1, 'email@email.com', 502);

            const id = manager.getId();
            expect(id).toEqual(1);
        });
    });

    describe('get email', () => {
        it('should return the manager email', () => {
            const manager = new Manager('Jihyo', 1, 'email@email.com', 502);

            const email = manager.getEmail();
            expect(email).toBe('email@email.com');
        });
    });

    describe('get role', () => {
        it('should return the role as Manager', () => {
            const manager = new Manager('Jihyo', 1, 'email@email.com', 502);

            const role = manager.getRole();
            expect(role).toBe('Manager');
        });
    });
});