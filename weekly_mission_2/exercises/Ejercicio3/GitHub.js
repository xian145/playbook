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

class issue { //creacion de la clase
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdate) {
        this.title = title,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.status = status,
        this.numberOfComments = numberOfComments,
        this.labels = labels,
        this.author = author,
        this.dateCreated = dateCreated,
        this.lastUpdate = lastUpdate
    }

    getTitleAndAuthor () {
        return `El issue con nombre ${this.title} fue creado por ${this.author}`
    }

    getGeneralInfo () {
        return `Este issue fue creado del repositorio ${this.repositoryNameAssociated} el dia ${this.dateCreated} y modificado por ultima vez el dia ${this.lastUpdate}`
    }

}

class pullrequest { //creacion de la clase
    constructor(title, branchName, status, dateCreated, repositoryNameAssociated, author) {
        this.title = title,
        this.branchName = branchName,
        this.status = status,
        this.dateCreated = dateCreated,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.author = author
    }

    getTitleAndAuthor () {
        return `Este Pull Request fue creado por ${this.author} el dia ${this.dateCreated} el cual tiene el nombre: ${this.title}`
    }

    getStatus () {
        return `Staus del pull request: ${this.status}`
    }

}
