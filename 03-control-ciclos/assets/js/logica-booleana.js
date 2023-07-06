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