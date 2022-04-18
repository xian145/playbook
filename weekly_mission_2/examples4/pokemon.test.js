import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu')
    expect(myPokemon.name).toBe('Pikachu'); //la primera parte nos indica lo que esta recibiendo, mientras que el toBe es lo que espera recibir, en caso de no ser asi, nuetra pureba fallara
});
