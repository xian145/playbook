import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu', "Electric", 2)
    expect(myPokemon.name).toBe('Pikachu'); //la primera parte nos indica lo que esta recibiendo, mientras que el toBe es lo que espera recibir, en caso de no ser asi, nuetra pureba fallara
    expect(myPokemon.type).toBe("Electric") //distingue entre mayusculas y minusculas
    expect(myPokemon.age).toBe(2) 
});
