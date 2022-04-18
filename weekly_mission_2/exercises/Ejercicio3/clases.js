class repo { //creacion de la clase
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
        this.name = name,
        this.author = author,
        this.language = language,
        this.numberOfCommits = numberOfCommits
        this.stars = stars,
        this.forks = forks,
        this.issues_close = issues_close,
        this.issues_open = issues_open
    }


    getTotalForks () {
        return `El total de forks que tiene este repositorio es: ${this.forks}`
    } //tambien se pueden escribir de esta manera las funciones

    getTotalStars () {
        return `El numero total de estrellas que se le ha dado a este repositorio es de ${this.stars}`
    }

}
