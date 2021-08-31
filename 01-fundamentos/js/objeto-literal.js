// Objetos literales 
let personaje = {
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