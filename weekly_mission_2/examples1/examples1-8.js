// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80) //asi como antes se utilizo el "includes" o el "endsWith" aqui se utiliza un condicional
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty) //se imprime cada nombre junto con su calificacion debido a que estos estan ligados entre si