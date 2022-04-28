export default class user {

    constructor(name, last_name, username, cell_phone, email, password, gender, day, month, year) {
        this.name = name
        this.last_name = last_name
        this.username = username
        this.cell_phone = cell_phone
        this.email = email
        this.password = password
        this.gender = gender
        this.day = day
        this.month = month
        this.year = year
    }

}

const myUser = new user('Eduardo Ruben', 'Solis Hernandez', 'Eduardo Solis Jr.', '+521111111111', 'an_email@email.com', 'a_password', 'Male', 9, 'January', 2000)
console.log(myUser)