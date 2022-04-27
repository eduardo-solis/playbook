const hashtag = {
    title : 'IWantLearn',
    tweet : 'If you want to learn programming you should practice 😀',

    getHashtag : function () {
        return `#${this.title}`
    }
}

console.log(hashtag.getHashtag())
console.log(hashtag)