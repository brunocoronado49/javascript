let a = 10;
let b = a;
a = 30;

console.log({a, b});

let francisco = {nombre: 'Francisco'};

// creamos la copia con el operador spread
// cuando los ... se usan fuera de un arg/param
// es el operador spread y no el parametro rest
let ana = {...francisco};
ana.nombre = 'Ana';

console.log({francisco, ana});

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

// arreglos

const frutas = ['manzana', 'pera', 'sandia'];

// console.time se usa para medir el tiempo de ejecucion
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutasSpread = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');

console.table({frutas, otrasFrutas});