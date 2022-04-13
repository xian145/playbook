// Ejemplo  9: Herencia entre dos clases
class Developer { //clase con nombre Developer
    constructor(name, mainLang, stack){ //lo que se le da de comer a la clase para crear un objeto nuevo
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
        return this.name
    }
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"]) //hasta el momento lo mismo que hemos hecho en los otros ejercicios
console.log(carloDev) //imprimimos en consola lo que esta dentro del objeto

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{ //basicamente extiende (extend) el contenido del objeto principal a uno secundario, se puede extender ciertas cosas y no todo?
}
console.log(LaunchXStudent); //aun no tiene valores por lo que solo va a decir que es una clase a la cual se le extendio los metodos de otro objeto
const carloLaunchXDev = new LaunchXStudent("Abraham", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/