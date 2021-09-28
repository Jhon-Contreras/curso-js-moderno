// Mas info sobre los arreglos 
let juegos = ['Cod',  'GTA', 'Valheim'];
console.log('Largo: ', juegos.length);

// obtener el ultimo juego 
let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1];
console.log({primero, ultimo});

// barrer elementos de un array
juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
} );

// Añadir elementos al array (final del arreglo)

let agregarJuego = juegos.push( 'FIFA');
console.log({agregarJuego, juegos});

// Añadir elementos al comienzo del array 

let agregarJuegoInicio = juegos.unshift('PES');
console.log({agregarJuegoInicio, juegos});

// Borrar elemento que se encuentra al final del arreglo 

let borrarJuegoFinal = juegos.pop();
console.log({borrarJuegoFinal, juegos});

// Borrar elemento en posicion especifica 

let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice( pos, 2);
console.log({juegosBorrados, juegos});


// Saber posicion indice de un elemento 

let valheimIndex = juegos.indexOf('Valheim') //CaSe SeNsItIvE
console.log({valheimIndex});