
const User = require('./../../app/models/User');

describe('Unit Test for User class', () => {
    
    test('Test 1.- Create an User object', () => {

        // Create an User object
        const user = new User(1, 'Lalo', 'Eduardo Solis', 'Bio')

        // Validate the User object
        expect(user.id).toBe(1);
        expect(user.username).toBe('Lalo');
        expect(user.name).toBe('Eduardo Solis');
        expect(user.bio).toBe('Bio');

        // This line check the value isn't "undefined"
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();

    });

})