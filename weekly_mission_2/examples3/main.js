import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Abraham", "LaunchX", "Node JS", "Abril 2022") //del archivo viajero.js se trae a la clase para poder crear un objeto a lo que le da de comer la informacion entre parentesis ()
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija

//la modularizacion de cosas es basicamente en segmentarla para que todo el codigo no se encunetre en un solo archivo y se mas facil manejarlo