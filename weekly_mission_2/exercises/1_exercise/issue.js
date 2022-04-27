const issue = {
    title : 'playbook',
    repositoryNameAssociated : 'LaunchX',
    status : 'OPEN',
    numberOfComments : 10,
    labels : ['Question', 'Ask', 'Git'],
    author : 'eduardo-solis',
    dateCreated : new Date(),
    lastUpdated : new Date(),

    getTitleAndAuthor : function() {
        return `Title: ${this.title}, Author: ${this.author}`
    },

    getGeneralInfo : function() {
        
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

console.log(issue)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())