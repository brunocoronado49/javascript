class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + " Instancias";
    }

    static mensaje() {
        console.log(this.nombre); // undefind
        console.log("Hola soy estatico");
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    // es lo primero que se ejecuta al instanciar una clase y se ejecuta
    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
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

// console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();
// ironman.quienSoy();
// ironman.miFrase();

spiderman.setComidaFavorita = "El pay de cereza";
// spiderman.nemesis = "venom";
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2;
console.log("Conteo estatico:", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

// estatica fuera de clase
Persona.propiedadExterna = "Hola Mundo";
console.log(Persona);
console.log(Persona.propiedadExterna);
