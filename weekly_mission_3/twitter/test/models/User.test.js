
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

    test('Test 2.- Add getters', () => {

        // Create an User object
        const user = new User(1, 'Lalo', 'Eduardo Solis', 'Bio')

        // Validate the getters from User class
        expect(user.getUsername).toBe('Lalo');
        expect(user.getBio).toBe('Bio');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();

    });

    test('Test 3.- Add setters', () => {

        // Create an User object
        const user = new User(1, 'Lalo', 'Eduardo Solis', 'Bio')

        user.setUsername = 'LaloQuera'
        expect(user.username).toBe('LaloQuera');

        user.setBio = 'New bio'
        expect(user.bio).toBe('New bio');

    });

})