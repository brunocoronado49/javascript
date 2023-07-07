const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false'); 
    return false;
}
 
console.warn('Not o negacion');
console.log(true);  // true
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

console.log(!regresaFalse());

console.warn('AND');  
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(!false && true); // true

console.log('=============');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse());

regresaTrue() && regresaFalse();

console.warn('OR');
console.log(true || false); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefind = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefind || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefind || regresaTrue() || 'Ya no soy falso again' || true;

console.log({a1, a2, a3, a4, a5});