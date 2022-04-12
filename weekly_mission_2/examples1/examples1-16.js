// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1 //compara el primer valor con el segundo y hace el return en caso de que se cumpla que a < b
    if (a.age > b.age) return 1 //compara el primer valor con el segundo y hace el return en caso de que se cumpla que a > b
    return 0 //en caso de que no se cumpla lo anterior regresa un cero, es decir, no hace nada
  }) //aqui si se modifica el arreglo original
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending