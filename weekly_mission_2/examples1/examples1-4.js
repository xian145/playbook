// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){return num * num}) //numbersSquare sera igual a una lista como numbers4 pero cambiara la lista de valores con la funcion que tiene dentro, en este caso al cuadrado de los numeros
const numb = numbers4.map(function(){return "xd"}) //hara algo parecido a lo de arriba pero va a sustituir todo con puros xd
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare) //imprimir la nueva constante que es una lista
console.log(numb);