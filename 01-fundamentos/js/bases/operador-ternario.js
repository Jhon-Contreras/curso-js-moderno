// Dias de semana abrimos a las 11
// pero los fines de semana abrimos a las 9


// Entra a un sitio web, para consultar si estará abierto hoy... 


const dia = 1; // 0: domingo.... 1: lunes, etc
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, está cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6){
// if ([0,6].includes( dia )) {
        
//     console.log('Fin de semana');
//     horaApertura= 9;
// } else {
//     console.log('Es dia de la semana');
//     horaApertura= 11;
// }

// hora de apertura es igual al arreglo 0,6 incluye el dia actual, si la condicion se cumple, es fin de semana y abrimos a las 9,
// caso contrario, es dia de la semana y abrimos a las 11 

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`; //concatenaciones de Strings con backtics
// }

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`; //concatenaciones de Strings con backtics

console.log( {horaApertura, mensaje} );
