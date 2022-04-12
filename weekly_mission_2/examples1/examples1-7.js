// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Finlandia'] //lista de paiese
const countriesContainingLand = countries7.filter((country) => // esta es una función que se utilizara para filtrar
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land" (includes)
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter((country) => country.endsWith('ia')) //a countries7 le aplicaras un filtro el cual se quedara solo con las cosas que terminen con ia (endsWith)
console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)