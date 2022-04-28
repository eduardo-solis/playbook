class Issue {

    constructor (title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    getTitleAndAuthor() {
        return `Title: ${this.title}, Author: ${this.author}`
    }

    getGeneralInfo() {
        let info = `
        Issue's Information
        ---------------------------------
        Title: ${this.title}
        Repository associated: ${this.repositoryNameAssociated}
        Status: ${this.status}
        Numeber of comments: ${this.numberOfComments}
        Labels: ${this.labels}
        Author: ${this.author}
        Created: ${this.dateCreated}
        lastUpdated: ${this.lastUpdated}
        `
        return info
    }
}

const myIssue = new Issue('playbook', 'LaunchX', 'OPEN', 10, ['Question', 'Ask', 'Git'], 'eduardo-solis', new Date(), '')

console.log(myIssue)
console.log(myIssue.getTitleAndAuthor())
console.log(myIssue.getGeneralInfo())