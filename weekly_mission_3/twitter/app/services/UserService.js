
const User = require('./../models/User')

class UserService {

    static create(id, username, name) {
        
        return new User(id, username, name, 'Sin bio')

    }

    static getInfo(user) {

        let list = []
        
        list.push(user.id)
        list.push(user.username)
        list.push(user.name)
        list.push(user.bio)
        list.push(user.dateCreated)
        list.push(user.lastUpdated)


        return list
    }

    static updateUserUsername(user, username) {
        user.setUsername = username
    }

}

module.exports = UserService