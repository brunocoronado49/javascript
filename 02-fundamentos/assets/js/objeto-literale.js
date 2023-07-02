let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity war'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coors:', personaje.coords);
console.log('Coors:', personaje.coords.lat);
console.log('Trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Ultima pelicula:', personaje['ultima-pelicula']);

// mas detalles

// para eliminar una propiedad del objeto
delete personaje.edad;
console.log(personaje);

personaje.casasdo = true;

// arreglo con valores
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// congela el objeto literal
Object.freeze(personaje);

personaje.dinero = 1000000000000000000;
personaje.casasdo = false;
personaje.direccion.ubicacion = 'Costa rica';
Object.freeze(personaje.direccion);
personaje.direccion.ubicacion = 'Mexico';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

const valores = Object.values(personaje);
console.log({valores});
