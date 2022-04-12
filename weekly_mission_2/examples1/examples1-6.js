// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string, cortando 0 letras del inicio y quedandose solo con 3 del inicio
)

const countriesLastThreeLetters = countries6.map((country) => country.toLowerCase().slice(4)) //si no se especifican mas valores, lo que hara es cortar las primeras 4 letras de la palabra

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)
console.log(countriesLastThreeLetters);