class Persona {
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`${this.nombre} ${this.apellido}, ${this.pais}`);
    }
}

const nombre = "Lara",
    apellido = "Croft",
    pais = "England";

const fran = {
    nombre: "Fran",
    apellido: "Rangel",
    pais: "Mexico"
};

const lara = new Persona(nombre, apellido, pais);
const persona = Persona.porObjeto(fran);
lara.getInfo();
persona.getInfo();
