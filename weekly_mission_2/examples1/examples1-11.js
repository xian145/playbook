// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 16, 25, 32, 35, 18]
const age = ages.find((age) => age < 20) //va a encontrar el primer valor en la lista (no de mayor a menor) menor al numero que lo que se indica
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)