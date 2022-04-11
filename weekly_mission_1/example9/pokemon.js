//empezamos crando la clase
class pokemon {
    constructor (name) {
        this.name = name
    }

    sayHello() {
        console.log(`Mi Pokemon ${this.name} te saluda!!`);
    }

    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`);
    }

}

//no debemos olvidar exportar la clase
module.exports = pokemon

//esta manera es la "clasica" sin utilizar EcmaScript