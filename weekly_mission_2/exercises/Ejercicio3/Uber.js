class profile { //creacion de la clase
    constructor(name, stars, messages, version, email, phone) {
        this.name = name,
        this.stars = stars,
        this.messages = messages,
        this.version = version,
        this.email = email, 
        this.phone = phone
    }

    getGeneralInfo() {
        return `${this.name} tiene una calificacion de ${this.stars} estrellas de 5, actualmente tiene ${this.messages} mensajes sin leer`
    }

}

class travel { //creacion de la clase
    constructor(date, cost, from, to, driver) {
        this.date = date,
        this.cost = cost,
        this.from = from,
        this.to = to,
        this.driver = driver
    }

    getGeneralInfo() {
        return `el viaje se realizo el ${this.date} y tuvo un costo de ${this.cost} pesos mexicanos, con conductor ${this.driver}`
    }

}
