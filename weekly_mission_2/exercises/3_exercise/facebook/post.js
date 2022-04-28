class post {

    constructor(typeOfPost, user, text, file) {
        this.typeOfPost = typeOfPost
        this.user = user
        this.text = text
        this.file = file
    }

    getPost() {
        let myPost = `POST\n-----------------------------\nBy: ${this.user.name}\n${this.text}\n${this.file}`
        return myPost
    }
}

const myPost = new post('public', 
                        {
                            name : 'Eduardo Solis Jr.',
                            image : 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'
                        },
                        "Hi! I'm learning JS",
                        []
                        )

//console.log(post)
console.log(myPost.getPost())