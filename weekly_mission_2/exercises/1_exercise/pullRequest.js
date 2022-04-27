

const pullRequest = {
    title : 'project update',
    branchName : "Lalo's branch",
    dateCreated : new Date(),
    status : 'OPEN',
    repositoryNameAssociated : 'playbook',
    author: 'Lalo',

    getStatus : function() {
        return `Status: ${this.status}`
    },
    getTitleAndAuthor : function() {
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

console.log(pullRequest.branchName)
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())