const diaActual = 1; // domingo
const horaActual = 11;

let horaApertura;
let mensaje; // esta abierto o esta cerrado

//if (diaActual === 0 || diaActual == 6) {
// if ([0, 6].includes(diaActual)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Entre semana');
//     horaApertura = 11;
// }
horaApertura = ([0, 6].includes(diaActual)) ? horaApertura = 9 : horaApertura = 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'esta abierto';
// } else {
//     mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
// }
mensaje = (horaActual >= horaApertura) ? 'esta abierto' : `esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});