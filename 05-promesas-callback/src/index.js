// asiganamos un alias para cuando la funcion existe en ambas importaciones 
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe  } from './js/promesas';

import './styles.css';



const heroeId1 = 'capi';
const heroeId2 = 'iron'
// // callbakcs: enviar funcion como argumento 

// // recibimos un error y el heroe de nuestro callback 
// buscarHeroe( heroeId, (err, heroe) =>{
//     //preguntamos, si no existe el heroe, llamamos al error
//    if( err ){
//         console.error(err);
//    }else{
//     // caso contrario, si existe el heroe, lo imprimimos 
//     console.log(heroe);
//    }
// });



// Llamado a la función buscarHeroe con promesas 

// then = todo sucede correctamente 
// catch = cuando hay errores 
// finally = es usado para limpiezas y siempre se ejecuta después del then o el catch 


// buscarHeroe( heroeId1).then( heroe =>{
//     console.log(`Enviando a ${ heroeId1 } a la misión`);
// });

// Promise.all 

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
    .then( ([heroe1, heroe2]) =>{
    
    console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la misión`);

});

console.log('Fin de programa');