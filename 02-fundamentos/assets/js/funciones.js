function saludar(nombre) {
    // console.log('Hola', nombre);
    // console.log(arguments);
    return [1, 2, 3, 4, 5];
    console.log('texto');
}

// funcion anonima
// const saludar2 = function() {
//     console.log('Hola Mundo 2');
// }

saludar('Francisco', false, 25, 'Mexico');
// saludar2();

// funcion flecha / lambda functions
const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola', nombre);
}

// saludarFlecha();
// saludarFlecha2('Franco');

const retornoSaludar = saludar('francisco', 25, true);
// console.log(retornoSaludar);

function sumar(a, b) {
    return a + b;
}

// manera corta de escribir una funcion flecha con solo el return
const sumar2 = (a, b) => a + b;

function retornarAleatorio() {
    return Math.random();
}

const returnAleatorio2 = () => Math.random();

console.log(retornarAleatorio());
console.log(returnAleatorio2());
// console.log(sumar(1, 2));
// console.log(sumar2(3, 4));