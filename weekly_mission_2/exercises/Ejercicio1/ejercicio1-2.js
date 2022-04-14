const issue = { //definir el nombre del objeto
    title: "05 Live 2 Semana 2 [Miércoles 13 de Abril]",
    repositoryNameAssociated: "Node.js",
    status: "Open",
    numberOfComments: 20,
    labels: 3,
    author: "carlogilmar",
    dateCreated: "12/04/2022",
    lastUpdate: "13/04/2022",

    getTitleAndAuthor () {
        return `El issue con nombre ${this.title} fue creado por ${this.author}`
    },

    getGeneralInfo () {
        return `Este issue fue creado del repositorio ${this.repositoryNameAssociated} el dia ${this.dateCreated} y modificado por ultima vez el dia ${this.lastUpdate}`
    },

}
   
console.log("Nombre del Issue:" + issue.title)
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo())
console.log(`El numero de comentario en el repositorio es: ${issue.numberOfComments}`);