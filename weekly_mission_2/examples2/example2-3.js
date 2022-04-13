// Ejemplo 3: Instanciar un objeto con atributos
class Student { //creamos una clase, pero a la clase le vamos a poner instancias, parecido a lo que se hace con los objetos, para eso nos ayudamos del constructor
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){ //le decimos al constructor que es lo que le entrara para crea la instancia, es importante el orden
      this.name = name //this nos indica que name es de ESTA clase, lo mismo para age y subjects
      this.age = age
      this.subjects = subjects
    }
}
  
// Crear un objeto de la clase Student (esto se le llama instanciación)
const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"]) //aqui le estamos diciendo que va a meter en la clase para crear el objeto, es importante el orden
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)

//la clase la podemos considerar como una bloque de construccion ya que le podemos meter cosas para luego crear un objeto, las clases no tulizan memoria, los objetos si
//las clases se definen solo una vez y los objetos se declaran tantos sean necesarios, las clases no pueden ser manipuladas debido a que noe stan en la memoria, los objetos son los que se manipulan
//la clase es una entidad logica y el objeto una entidad fisica?