// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Mexico'] //lista solo que esta vez ya no es de numeros
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas")
countries.forEach((element) => console.log(element.toUpperCase())) //por cada elemento en la lista imprimir el elemento en mayusculas (.toUpperCase)
countries.forEach((element) => console.log(element.toLowerCase())) //lo mismo que arriba pero a minisculas