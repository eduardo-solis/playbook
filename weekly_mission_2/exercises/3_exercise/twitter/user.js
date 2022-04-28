class user {

    constructor(name, last_name, second_last_name, username, phone, email, verified, protected_tweets, date_Created, country, languages, gender, birth_date, age, bio) {

        this.name = name
        this.last_name = last_name
        this.second_last_name = second_last_name
        this.username = username
        this.phone = phone
        this.email = email
        this.verified = verified
        this.protected_tweets = protected_tweets
        this.date_Created = date_Created
        this.country = country
        this.languages = languages
        this.gender = gender
        this.birth_date = birth_date
        this.age = age
        this.bio = bio

    }

    getGeneralInfo() {
        let info = `Username: @${this.username}\nBio: ${this.bio}\nJoined: ${this.date_Created}`
        return info
    }

    getNameAndEmail() {
        return `Name: ${this.name} ${this.last_name} ${this.second_last_name}, Email: ${this.email}`
    }

}

const myUser = new user('Eduardo Ruben', 'Solís', 'Hernández', 'EduardoRubnSol1', '+521111111111', 'an_email@email.com', true, false, new Date(), 'Mexico', ['English', 'Spanish'], 'M', 'Jan 9, 2000', 22, "Hello World !, I'm Eduardo")

console.log(myUser.getGeneralInfo())
console.log(myUser.getNameAndEmail())