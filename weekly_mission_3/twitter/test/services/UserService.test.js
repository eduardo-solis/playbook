
const UserService = require('./../../app/services/UserService');

describe('Test for UserService', () => {

    test('Test 1.- Create a new user using the UserService', () => {
        
        // Create an UserService object
        const user = UserService.create(1, 'lalo', 'Eduardo Solis')

        expect(user.username).toBe('lalo')
        expect(user.name).toBe('Eduardo Solis')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

})