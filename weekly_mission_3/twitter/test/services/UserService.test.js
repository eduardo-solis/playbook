
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

    test('Test 2.- Get all user data in a list', () => {

        const user = UserService.create(1, 'Lalo', 'Eduardo Solis')
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('Lalo')
        expect(userInfoInList[2]).toBe('Eduardo Solis')
        expect(userInfoInList[3]).toBe('Sin bio')

    })
})