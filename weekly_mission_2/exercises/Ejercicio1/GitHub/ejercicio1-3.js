const PullRequest = { //definir el nombre del objeto
    title: "Correccion de errores en contenido",
    branchName: "main",
    status: "Open",
    dateCreated: "14/04/2022",
    repositoryNameAssociated: "Node.js",
    author: "Xian145",

    getTitleAndAuthor () {
        return `Este Pull Request fue creado por ${this.author} el dia ${this.dateCreated} el cual tiene el nombre: ${this.title}`
    },

    getStatus () {
        return `Staus del pull request: ${this.status}`
    },

}

console.log(PullRequest.getTitleAndAuthor());
console.log(PullRequest.getStatus())