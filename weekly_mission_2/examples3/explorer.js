export default class Explorer{ //nombre de la clase
    constructor(name, username, mission){ //lo que se le da de comer a la clase
        this.name = name
        this.username = username
        this.mission = mission
    }
  
    getNameAndUsername(){ //funcion definida en la clase que lo que hace es regresa una linea de texto con cierta informacion
        return `Explorer ${this. name}, username: ${this.username}`
    }
}

//esta es la clase madre