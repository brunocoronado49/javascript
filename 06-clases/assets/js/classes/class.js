class Persona {
    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    // es lo primero que se ejecuta al instanciar una clase y se ejecuta
    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `Su comida favorita es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        // this.quienSoy();
        console.log(`${this.codigo} dice que ${this.frase}`);
    }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "Tu vecino we");
const ironman = new Persona("Tony Stark", "Ironman", "Arriba las milfs");
console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();
ironman.quienSoy();
ironman.miFrase();

spiderman.setComidaFavorita = "El pay de cereza";
spiderman.nemesis = "venom";
console.log(spiderman);
console.log(spiderman.getComidaFavorita);
