//importamos la clase MyPokemon desde el archivo ./pokemon.js que acabo de crear
import MyPokemon from './pokemon.js'

const pikachu = new MyPokemon('Pikachu')
pikachu.sayHello()
pikachu.sayMessage('Pikaaaa!!')

//esto es posible de repetir tantas veces se quiera utilizando otros pokemon

const lucario = new MyPokemon('Lucario')
lucario.sayHello()
lucario.sayMessage('Lucaarioo')