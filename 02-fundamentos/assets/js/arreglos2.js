let juegos = ['Zelda', 'Mario', 'Metroid', 'Metal Gear'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((juego, indice, arr) => {
    console.log({juego, indice, arr});
});

let nuevaLen = juegos.push('F-Zero');
console.log({nuevaLen, juegos});

// agregar nuevo item al array el principio
nuevaLen = juegos.unshift('Resident Evil');
console.log({nuevaLen, juegos});

// elimina el ultimo item del array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Juegos borrados con un indice y una cantidad
let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 1);
console.log({juegosBorrados, juegos});

juegosBorrados = juegos.splice(posicion, 2);
console.log({juegosBorrados, juegos});

let metalIndex = juegos.indexOf('Metal Gear');
console.log({metalIndex});