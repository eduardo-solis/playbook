class pullRequest {

    constructor (title, branchName, dateCreated, status, repositoryNameAssociated, author) {
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
        this.author = author
    }

    getStatus() {
        return `Status: ${this.status}`
    }

    getTitleAndAuthor() {
        return `Title: ${this.title}, Author: ${this.author}`
    }

}

const myPullRequest = new pullRequest('project update', "Lalo's branch", new Date(), 'OPEN', 'playbook', 'Lalo')

console.log(myPullRequest.branchName)
console.log(myPullRequest.getStatus())
console.log(myPullRequest.getTitleAndAuthor())