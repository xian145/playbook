// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase()) //en el ejercicio 3 se hizo algo parecido pero fue imprimr los valor en mayusculas y minusculas, aqui lo que se hace es sustituir los valores por nuevos, en este caso mayusculas y minusculas
const namesToLowerCase = names.map((name) => name.toLowerCase()) //son listas nuevas, no se modifico la orginal
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase);
console.log(namesToLowerCase);
console.log(names);