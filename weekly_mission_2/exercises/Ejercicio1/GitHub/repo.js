const repo = { //definir el nombre del objeto
    name: "PlayBook",
    author: "carlogilmar",
    language: "JavaScript/JS",
    numberOfCommits: 3,
    stars: 37,
    forks: 694,
    issues_open: 0,
    issues_close: 0,

    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },

    getTotalForks () {
        return `El total de forks que tiene este repositorio es: ${this.forks}`
    }, //tambien se pueden escribir de esta manera las funciones

    getTotalStars () {
        return `El numero total de estrellas que se le ha dado a este repositorio es de ${this.stars}`
    },

    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log(repo.getTotalForks());
console.log(repo.getTotalStars());