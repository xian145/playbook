const travel = {
    date: "7/7/21 15:36",
    cost: 206.22,
    from: "Nezahualcoyotl 19",
    to: "Aeropuerto internacional de la ciudad de mexico",
    driver: "Jonathan",

    getGeneralInfo() {
        return `el viaje se realizo el ${this.date} y tuvo un costo de ${this.cost} pesos mexicanos, con conductor ${this.driver}`
    }

}

console.log(travel.getGeneralInfo());