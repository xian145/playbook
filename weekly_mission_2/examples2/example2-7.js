// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander { //la clase MissionComander
    constructor(name, mission){ //cosas que se le dara de comer
        this.name = name
        this.mission = mission
        this.students = 0 //valor default
        this.lives = 0 //valor default
    }
  
    get getStudents(){
        return this.students
    }
  
    get getLives(){
        return this.lives
    }
  
    set setStudents(students){ //es como un funcion que como su nombre lo indica, va a setear, va a cambiar los valores en este caso de students con el valor que se le asigne al momento de llamarlo
        this.students = students
    }
  
    set setLives(lives){
        this.lives = lives
    }
}
  
console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS") //objeto creado a partir de una clase

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 145 //llamamos a los seters para modificar los valores
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents) //100 por el cambio que se hizo arriba
console.log(missionCommanderNode.getLives)//3 por el cambio que se hizo arriba