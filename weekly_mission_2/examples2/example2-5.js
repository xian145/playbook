// Ejemplo 5: Atributos con valores por default
class PullRequest { //clase con nombre PullRequest
    constructor(repo, title, lines_changed){ //cosas que pide el constructor
        this.repo = repo //lo que hace el contructor con las cosas que se le da de comer
        this.title = title
        this.lines_changed = lines_changed 
        this.status = "OPEN" //valor por default, este valor no entra si no que ya esta aqui
        this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
    }
  
    getInfo(){
      return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}
  
console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100) //cosas que se introducen a la clase para crear el objeto
console.log(myPR1.getInfo()) //al igual que el ejercicio anterior se llama a la funcion dentro del objeto creado a partir de una clase

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99) //cosas que se introducen a la clase para crear el objeto
console.log(myPR2.getInfo())