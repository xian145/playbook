const myPet = {
    name: "Paw",
    sayHelloToMyPet: function(yourPet){ //estoy diciendo que esto es una funcion a la cual le entra algo que se llama yourPet
      console.log(`${this.name} le dice hola a ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio") //se llama a la funcion dentro del objeto y como la funcion espera que se le introduzca algo es que se le tiene que dar de comer algo en este caso, el nombre de Tulio