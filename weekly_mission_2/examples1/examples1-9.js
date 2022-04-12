// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]        //(0, 1) => 0 + 1 esto es lo que hace la funcion al incio y se va recorriendo a lo largo de toda la lista de nuemros
const result_of_reduce = numbers9.reduce((previousValue, currentValue) => previousValue + currentValue, 0) //el ultimo valor, en este caso cero, indica desde que nuemro se incia.
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)
