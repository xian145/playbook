// Ejemplo 10: Overrinding methods
class Explorer{ //nombre de la clase
    constructor(name, username, mission){ //lo que se le dara de comer a la calse
        this.name = name
        this.username = username
        this.mission = mission
    }
  
    getNameAndUsername(){ //geter
        return `Explorer ${this.name}, username: ${this.username}`
    }
}
  
class Viajero extends Explorer { //nombnre de otra clase que hereda los metodos de otra, pero aparte agrega algo nuevo
    constructor(name, username, mission, cycle){ //cycle es nuevo comparado al madre
        super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre (superponer?)
        this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }
  
    getGeneralInfo(){
        let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre, esta funcion en realidad no esta definida aqui si no que lo hereda del padre, asi que podriamos deicr que si esta definida, por lo que la podemos utilizar
        // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}

const explorer1 = new Explorer("Abraham", "LaunchX", "Node JS")
const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija
console.log("Info de explorer");
console.log(explorer1);
console.log(explorer1.getNameAndUsername());
//console.log(explorer1.getGeneralInfo()); esto no se puede hacer porque no es una funcion definida inicialmente en la clase de donde se creo este objeto