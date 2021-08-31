// Tipos de datos en javascript  

// -> String 
    let nombre = 'Peter Parker';
    console.log(nombre);
    
    // cambiar el dato
    nombre = 'Ben Parker';
    console.log(nombre);

    nombre = 'Tìa May';

    console.log( typeof nombre);


    // -> Boolean 
    let esMarvel = true;
    console.log(typeof esMarvel);

    // -> Number 
    let edad = 33;
    console.log(typeof edad);

    // -> Undefined 
    let superPoder;
    console.log(typeof superPoder);

    // -> Null 
    let soyNull = null;
    console.log(typeof soyNull);

    // -> Symbol
    let symbol1 = Symbol('a');
    let symbol2 = Symbol('a');
    console.log(typeof symbol1);
    console.log(symbol1 === symbol2);