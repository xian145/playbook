const profile = {
    name: "Abraham Ariel Arizmendi Grijalva",
    stars: 4.97,
    messages: 0,
    version: "4.417.10000",
    email: "xian145@gmail.com",
    phone: "6622045102",

    getGeneralInfo() {
        return `${this.name} tiene una calificacion de ${this.stars} estrellas de 5, actualmente tiene ${this.messages} mensajes sin leer`
    }

}

console.log(profile.getGeneralInfo());