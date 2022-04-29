
const User = require('./../../app/models/User');

describe('Unit Test for User class', () => {
    
    test('Test 1.- Create an User object', () => {

        // Create an User object
        const user = new User(1, 'Lalo', 'Eduardo Solis', 'Bio', 'dateCreated', 'lastUpdate')

        // Validate the User object
        expect(user.id).toBe(1);
        expect(user.username).toBe('Lalo');
        expect(user.name).toBe('Eduardo Solis');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).toBe('dateCreated');
        expect(user.lastUpdated).toBe('lastUpdated');

    });

})