import user from './user.js'

class biography extends user {
    
    constructor(name, last_name, cell_phone, email, password, gender, day, month, year, hobbies, pictures, friends, publications) {
        super(name, last_name, cell_phone, email, password, gender, day, month, year)
        this.hobbies = hobbies
        this.pictures = pictures
        this.friends = friends
        this.publications = publications
    }

    presentation() {
        return `Hi!, I'm ${this.username} and it's my first time in facebook and I want to make friends`
    }
    getPresentationAndHobbies() {
        return `Presentation: ${this.presentation()}, Hobbies: ${this.hobbies}`
    }
}

const myBiography = new biography('Eduardo Ruben', 'Solis Hernandez', 'Eduardo Solis Jr.', '+521111111111', 
                                'an_email@email.com', 'a_password', 'Male', 9, 'January', 2000,
                                ['Watch movies and anime', 'Listen to music', 'Walk', 'Make friends'],
                                ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-movies-kids-1584724104.jpg',
                                'https://i.pinimg.com/originals/e1/7a/a2/e17aa29c74eb316c67ec539192681b06.png',
                                'https://static01.nyt.com/images/2020/10/06/well/physed-awe-walk/physed-awe-walk-videoSixteenByNineJumbo1600.jpg'
                                ],
                                ['Sandra', 'Carlos', 'Pedro'],[]
                                )

console.log(myBiography)
console.log(myBiography.getPresentationAndHobbies())
