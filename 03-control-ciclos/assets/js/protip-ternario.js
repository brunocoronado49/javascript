const elMayor = (a, b) => (a > b) ? a : b;
console.log(elMayor(13, 15));

const tieneMembresia = (miembro) => miembro ? 'si es miembro' : 'no es miembro';
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Logan',
    amigo ? 'Thor' : 'Loki',
    // funcion anonima autoinvocada
    // (() => 'Bruce')()
    // elMayor(2, 6)
];

console.log(amigosArr);

const notas = 65;