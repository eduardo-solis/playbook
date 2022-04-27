const trending = {
    
    numberOfList : 2,
    topic: 'Entertainment',
    title : '#QuieroMiPackDeMoonKnight',
    tweet : ``,
    tweets : 1292,

    getGeneralInfo : function() {
        return `${this.numberOfList} - ${this.topic} - Trending\n${this.title}\n${this.tweets} Tweets`
    }

}

console.log(trending.getGeneralInfo())