// La idea del singleton es tener una unica instancia
// en toda nuestra aplicacion

class Singleton {
    static instancia; // udefined
    nombre = "";

    constructor(nombre = "") {
        // undefined -> true -> false
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const singleton = new Singleton("Ironman");
const singleton2 = new Singleton("Spiderman");

console.log(`Nobre de la instancia 1 es: ${singleton.nombre}`);
console.log(`Nobre de la instancia 2 es: ${singleton2.nombre}`);
