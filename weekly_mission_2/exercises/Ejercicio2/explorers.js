const explorers = [ //es una lista con objetos dentro
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log("La siguiente es la lista de nombres de los explorers con sus stacks utilizando `forEach`")
explorers.forEach(explorer => console.log(explorer.name) + console.log(explorer.stack)) //este for each recorre cada uno de los elementos dentro de la lista e imprime cada propiedad de nombre que se encuentra en cada elemento de la lista

console.log("la siguiente es una lista con los stacks de los explorers utilizando `MAP`");
const listOfStacks = explorers.map((explorers) => explorers.stack)
console.log(listOfStacks);

console.log("La siguiente es una lista de explorers que tienen en su stack a JS utilizando el metodo `includes`");
const explorerstWithjs = explorers.filter((explorer) => explorer.stack.includes('js')) //primer buscamos los elementos de la lista que contenga js en su stack
const nameExplorerwithjs = explorerstWithjs.map((exp) => exp.name) //ya que filtrmoa la lista con los elementos que contienen js se utiliza map para quedarnos solo con los nombres
console.log(nameExplorerwithjs);

console.log("El siguiente es el primer explorer en la lista que vive en la CDMX utilizando `find`");
const cdmx = explorers.find((explorer) => explorer.city === "CDMX") //primero se utiliza find para poder encontrar al explorer que vive en la ciduad deseada
const explCDMX = cdmx.name //Luego a este elemento se le extrae lo que deseamos, en este caso el nombre
console.log(explCDMX);

console.log("El siguiente numero es el de ehercicios completado entre todos, es decir la suma, utilizando `Reduce`");
const listExcercises = explorers.map((exp) => exp.exercises_completed) //primero utilizo map para buscar los valor que me interesan de la lista, en este caso los ejercicios completados
const excercises = listExcercises.reduce((first, next) => first + next, 0) //posteriormente procedemos a sumar los valores de la lista obtenida
console.log(excercises); //no se si haya una forma de hacerlo directo sin tener que utilizar map

console.log("Al menos uno de los explorers tiene completados los ejercicios del fronEnd? (utilizando `some`)");
const excercisesFrontEnd = explorers.map((expl) => expl.missions.frontend.exercisesFinished) //primero utilizamos map para poder tener la lista de booleanos de cada uno de los explorer referente a los ejercicios del frontEnd
const frontEndTrue = excercisesFrontEnd.some((exp) => exp === true) //utilizamos `some` para poder buscar dentro de la lista si al menos uno de ellos cumple con ser `true`
console.log(frontEndTrue);
//const xd = explorers.map((expl) => expl.missions.frontend.exercisesFinished).some((exp) => exp === true) //se puede hacer todo en una sola linea de codigo
//console.log(xd);

console.log("Todos los explorers terminarion el Onboarding? (se utilizara `every`)");
const onboarding = explorers.map((expl) => expl.missions.onboarding.isFinished).every((expl) => expl === true) //primero se tuilizo map para recuperar la informacio de interes y sobre esa informacion se utilizo every para comprobarla
console.log(onboarding);

