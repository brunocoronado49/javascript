// no es muy comun
// const arr = new Array(10);
// const arr = [];
// console.log(arr);

const videojuegos = ['Metal Gear Solid', 'Resident Evil', 'Crash Bandicoot'];
console.log({videojuegos});
console.log(videojuegos[0]);

const arregloCosas = [
    true,
    123,
    'Francisco',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log(arregloCosas);
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[6].a);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);