
class User {

    constructor(id, username, name, bio, dateCreated, lastUpdated) {
        this.id = id
        this.name = name
        this.username = username
        this.bio = bio
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

}

module.exports = User