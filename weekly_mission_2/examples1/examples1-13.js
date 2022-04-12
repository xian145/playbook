// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explo 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7) //findIndex no hara nada mas que decirnos la posicion de lo que estemos buscando, en este caso que el string sea mayor a 7, pero nos dira solo la primera posicion que encuentre, si hay mas de un valor que cumpla eso no se veran
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)