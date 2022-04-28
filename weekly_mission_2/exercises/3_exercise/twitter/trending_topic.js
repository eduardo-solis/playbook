class trending {

    constructor(numberOfList, topic, title, tweet, numberOfTweets) {
        this.numberOfList = numberOfList
        this.topic = topic
        this.title = title
        this.tweet = tweet
        this.numberOfTweets = numberOfTweets
    }

    getGeneralInfo() {
        return `${this.numberOfList} - ${this.topic} - Trending\n${this.title}\n${this.numberOfTweets} Tweets`
    }

}

const myTrending = new trending(2, 'Entertainment', '#QuieroMiPackDeMoonKnight', '', 1292)
console.log(myTrending.getGeneralInfo())