const regresaTrue = ()=>{
    console.log('Regresa True');
    return true;
}
const regresaFalse = ()=>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true


console.log(!regresaFalse());


console.warn('And'); // True si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && false); //false

console.log('______________________________');

console.log( regresaFalse() && regresaTrue()); //false
console.log( regresaTrue() && regresaFalse()); //false

console.log('4 condiciones:', true && true && true && false ); //false

console.warn('OR');
console.log(true || false); //true
console.log(false || false); //false

console.log( regresaTrue() || regresaFalse()); //true

console.log('4 condiciones:', true || true || true || false ); // true


console.warn('Asignaciones');
