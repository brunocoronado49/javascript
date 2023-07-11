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

class Heroe extends Persona {
    clan = "sin clan";
    esposa = "";

    constructor(nombre, codigo, frase, esposa) {
        super(nombre, codigo, frase);
        this.clan = "Avengers";
        this.esposa = esposa;
    }

    quienSoy() {
        console.log(`${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe("Peter Parker", "Spiderman", "Tu vecino we", "MJ");
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();
