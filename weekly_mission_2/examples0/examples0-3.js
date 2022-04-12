//Ejemplo 3

const myObject3 = {
    name: 'paw',
    age: 5,
    nickname: [
        "Fifu",
        "Machuchi",
        "Mirififufi",
        "Frafrufis"
    ],
    address: {
        zipcode: 83100,
        street: 'Poder legislativo',
        city: 'Hermosillo'
    }
} //Este objeto triene varias propiedades entre ellos una lista y un objeto

console.log('Ejemplo 3: Objeto con diferentes propiedades');
console.log(myObject3);
console.log(myObject3.name);
console.log(myObject3["address"]); //esta forma no recordaba que se podia llamar a una parte del objeto
console.log(myObject3.address.city); //una manera para llamar a un lugar especifico
console.log(`Este es un de los apodos que tiene mi perrita: ${myObject3.nickname[2]}`);
