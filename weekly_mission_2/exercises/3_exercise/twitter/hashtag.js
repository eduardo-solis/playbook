class hashtag {
    
    constructor(title, tweet){
        this.title = title
        this.tweet = tweet
    }

    getHashtag() {
        return `#${this.title}`
    }

}

const myhashtag = new hashtag('IWantLearn', 'If you want to learn programming you should practice 😀')

console.log(myhashtag.getHashtag())
console.log(myhashtag)