// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0; //se declara que sum es igual a cero, no se si aqui se importante decir que sea cero pero en fortran muchas veces la variables que se definian pero no decia que eran cero de un inicio podian contener informacion basura, o bien un numero diferente de cero, cercano, pero diferente
const numbers2 = [1, 2, 3, 4, 5]; //lista de numero
numbers2.forEach(num => sum += num) //ciclo para la lista numbers2
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum) //el valor de sum sera diferent de cero ya que paso por la lista de numero en el forEach