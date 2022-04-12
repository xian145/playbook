//Ejemplo 4
const pet = {
    name: 'Paw',
    sayHello: function(){
        console.log(`${this.name} te saluda!!`); //no sabia que se podian poner funciones dentro de un objeto
    }
}

console.log('Ejemplo 4: Objeto con metodos');
//console.log(pet);
pet.sayHello() //no es necesario poner un clg, ya que la misma funcion tiene uno, lo que se hace en realidad es ejecutar dicha funcion
console.log(pet.name);
