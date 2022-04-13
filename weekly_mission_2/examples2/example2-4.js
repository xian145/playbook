// Ejemplo 4: Métodos en los objetos
class Repository { //creamos la clase Repository
    constructor(name, author, language, stars){ //a la cual le entra los siguientes valores
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }
    //la funcion esta dentro de la clase
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100) //informacion que entra a la clase para crear al objeto
console.log(myRepo.getInfo()) //llamamos la funcion que se definio en la clase que ahora es un objeto, que nos devolver en este caso una frase
//hay informacion que no se despliega porque no se pide, aqui solo se pide lo que esta dentro de la funcion getInfo