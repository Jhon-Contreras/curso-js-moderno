// Objetos literales 
const personaje = {
    nombre: 'Jhon',
    codeName: 'CalaverA',
    nivel: 134,
    coords: {
        lat: 1231231,
        long: -2222222
    },
    skins: ['Mexicano 1', 'Tactico v3', 'Formal 2'],
    direccion: {
        zip: '101010, 200202',
        ubicacion: 'Los Angeles, Chile'
    },
    'mas-info': 'Info extra'

};

// bloquear edicion del objeto 

// Object.freeze(personaje) 

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Nivel:', personaje['nivel']);
console.log('Coords:', personaje.coords['lat']);
console.log('Numero de skins:', personaje.skins.length);
console.log('Ultima skin:', personaje.skins[personaje.skins.length - 1]);

const x = 'nivel';
console.log('Nivel', personaje[x]);


console.log('Mostrar mas info:', personaje['mas-info']);


//mas detalles

// borrar una propiedad del objeto 
delete personaje.nivel;

console.log(personaje);


// Crear nueva propiedad en el objeto 
personaje.casado = true;


// trabajar objeto como si fuera un arreglo
const entriesPares = Object.entries( personaje );
console.log(entriesPares);


// mas info 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object 

