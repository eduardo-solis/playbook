
const post = {
    typeOfPost : 'public',
    user : {
        name : 'Eduardo Solis Jr.',
        image : 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'
    },
    text : "Hi! I'm learning JS",
    file: '',

    getPost : function() {
        myPost = `POST\n-----------------------------\nBy: ${this.user.name}\n${this.text}\n${this.file}`
        return myPost
    }
}

//console.log(post)
console.log(post.getPost())