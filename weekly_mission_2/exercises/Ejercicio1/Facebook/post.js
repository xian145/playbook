const post = {
    user: "Arnulfo Castellanos Moreno",
    date: "11 de abril de 2022 a las 9:11 am",
    numberOfReactions: 13,
    numberOfComents: 9,

    getGeneralInfo() {
        return `El nombre de la persona que realizo el post es ${this.user}, el post tiene ${this.numberOfReactions} reacciones y ${this.numberOfComents} comentarios`
    }

}

console.log(post.getGeneralInfo());