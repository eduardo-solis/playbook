const biography = {

    information: {
        name: 'Eduardo Ruben',
        last_name: 'Solis Hernandez',
        username : 'Eduardo Solis Jr.',
        cell_phone: '+521111111111',
        email: 'an_email@email.com',
        password: 'a_password',
        gender: 'Male',

        // Birth Day
        day: 9,
        month: 'January',
        year: 2000
    },

    hobbies: ['Watch movies and anime', 'Listen to music', 'Walk', 'Make friends'],
    pictures: ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-movies-kids-1584724104.jpg',
                'https://i.pinimg.com/originals/e1/7a/a2/e17aa29c74eb316c67ec539192681b06.png',
                'https://static01.nyt.com/images/2020/10/06/well/physed-awe-walk/physed-awe-walk-videoSixteenByNineJumbo1600.jpg'
                ],
    friends: ['Sandra', 'Carlos', 'Pedro'],
    publications: [],

    presentation: function() {
        return `Hi!, I'm ${this.information.username} and it's my first time in facebook and I want to make friends`
    },
    getPresentationAndHobbies : function() {
        return `Presentation: ${this.presentation()}, Hobbies: ${this.hobbies}`
    }
}

console.log(biography)
console.log(biography.getPresentationAndHobbies())
