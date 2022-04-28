const user = {
    name : 'Eduardo Ruben',
    last_name : 'Solís',
    second_last_name : 'Hernández',
    username : 'EduardoRubnSol1',
    phone : '+521111111111',
    email : 'an_email@email.com',
    verified : true,
    protected_tweets: false,
    date_Created : new Date(),
    country : 'Mexico',
    languages : ['English', 'Spanish'],
    gender : 'M',
    birth_date : 'Jan 9, 2000',
    age : 22,
    bio : "Hello World !, I'm Eduardo",

    getGeneralInfo : function() {
        let info = `Username: @${this.username}\nBio: ${this.bio}\nJoined: ${this.date_Created}`
        return info
    },
    getNameAndEmail : function() {
        return `Name: ${this.name} ${this.last_name} ${this.second_last_name}, Email: ${this.email}`
    }
}

console.log(user.getGeneralInfo())
console.log(user.getNameAndEmail())