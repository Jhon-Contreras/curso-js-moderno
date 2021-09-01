// Pro tip: Retorno 

function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Jhon', 'Contreras');
console.log(persona);

// reducimos la funcion anterior 

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido }) // los parentesis indican a js que lo que queremos regresar es lo que está dentro de los () como un objeto

const persona2 = crearPersona2('Jhon2', 'Contreras2');
console.log(persona2);


function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'lololo');

const imprimeArgumentos2 = (edad, ...args) => { //parametro rest, 
    // console.log(args);
    return args;
}
// consideraciones parametros rest
// 1- Despues del parametro rest no puede venir ningun otro argumento 
// 2- Se puede extraer una variable antes del parametro rest 

const [casado, muerto, lo] = imprimeArgumentos2(10, true, false, 'lololo');
console.log({casado, muerto, lo});


// para objetos 
const {apellido: nuevoApellido} = crearPersona('Jhon', 'Contreras');
console.log({nuevoApellido});


// destructuracion de argumentos 

const jhon = {
    nombre: 'Jhon',
    codeName: 'CalaverA',
    // nivel: 134,
    skins: ['Mexicano 1', 'Tactico v3', 'Formal 2'],
};

const imprimePropiedades = ({nombre, codeName, nivel=200, skins}) =>{ //se pueden definir valores a propiedades
    console.log({nombre});
    console.log({codeName});
    console.log({nivel});
    console.log({skins});


}
imprimePropiedades(jhon);