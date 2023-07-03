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

saludarFlecha();
saludarFlecha2('Franco');

const retornoSaludar = saludar('francisco', 25, true);
console.log(retornoSaludar);
