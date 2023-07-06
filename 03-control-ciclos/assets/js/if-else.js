let a = 5;

if (a >= 10) { // undefind, null, una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();

let dia = hoy.getDay(); // 0 domingo, 1 lunes, etc
console.log({dia});

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es domingo ni lunes ni martes..');
}

// tarea
dia = 4;
dia2 = 2;

const dias = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}

const dias2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
];

console.log(dias[dia] || 'dia no valido');
console.log(dias2[dia2]);
