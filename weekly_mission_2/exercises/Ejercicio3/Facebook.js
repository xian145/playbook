class post { //creacion de la clase
    constructor(user, date, numberOfReactions, numberOfComents) {
        this.user = user,
        this.date = date,
        this.numberOfReactions = numberOfReactions,
        this.numberOfComents = numberOfComents
    }

    getGeneralInfo() {
        return `El nombre de la persona que realizo el post es ${this.user}, el post tiene ${this.numberOfReactions} reacciones y ${this.numberOfComents} comentarios`
    }

}

class user { //creacion de la clase
    constructor(name, userNamem, numberFriends, profilePhoto, relationship, alias, birthday) {
        this.name = name,
        this.userName = userNamem,
        this.numberFriends = numberFriends,
        this.profilePhoto = profilePhoto,
        this.relationship = relationship,
        this.alias = alias,
        this.birthday = birthday
    }

    getGeneralInfo() {
        return `El usuario ${this.userName} se llama ${this.name} y tiene ${this.numberFriends} amigos`
    }

}
