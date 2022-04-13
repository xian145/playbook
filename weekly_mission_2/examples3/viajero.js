import Explorer from './explorer.js'

export default class Viajero extends Explorer { //se esta crenado una clase hija a partir de metodos que tiene definida la madre
    constructor(name, username, mission, cycle){ 
        super(name, username, mission) //para llamar al constructor de la madre
        this.cycle = cycle //esto solo existe en la hija
    }

    getGeneralInfo(){ //funcion definida solo en la hija
        let nameAndUsername = this.getNameAndUsername() //funcion definida en la madre
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}

//esta es la clase hija