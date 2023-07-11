const fran = {
    nomrbe: "Fran",
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nomrbe} - Edad: ${this.edad}`);
    },
};

const bruce = {
    nomrbe: "Bruce",
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nomrbe} - Edad: ${this.edad}`);
    },
};

const Lara = {
    nomrbe: "Lara",
    edad: 26,
    imprimir() {
        console.log(`Nombre: ${this.nomrbe} - Edad: ${this.edad}`);
    },
};

// fran.imprimir();

function Persona(nombre, edad) {
    console.log("Hola soy una linea de codigo");

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    };
}

const maria = new Persona("Maria", 18);
const diana = new Persona("Diana", 18);

maria.imprimir();
diana.imprimir();
