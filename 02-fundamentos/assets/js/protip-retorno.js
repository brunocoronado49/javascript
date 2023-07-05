// function crearPersona(nombre, apellido) {
//     return {nombre, apellido};
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Fracisco', 'Rangel');
console.log(persona);

// solo las funciones tradicionales cuentan con 'arguments'
function imprimeArgumentos() {
    console.log(arguments);
}

// manera de mostrar los argumentos
const imprimeArgs2 = (...args) => console.log(args);

// edad va a tomar el primer argumento del array
const imprimeArgs3 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

const args = imprimeArgs3(10, true, false, 'Francisco', 'Hola');

console.log({args});

const [casado, vivo, nombre, saludo] = imprimeArgs3(10, true, false, 'Francisco', 'Hola');
console.log({casado, vivo, nombre, saludo});

const {apellido} = crearPersona('Fracisco', 'Rangel');
console.log({apellido});

const {apellido: nuevoApellido} = crearPersona('Fracisco', 'Rangel');
console.log({nuevoApellido});

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster']
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);