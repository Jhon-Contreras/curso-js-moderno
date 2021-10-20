import { buscarHeroe, promesaLenta, promesaMedia, promesaRapida, buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr } from './js/await';

import './styles.css';


// promesaLenta.then( console.log);
// promesaMedia.then( mensaje => console.log(mensaje)); //esto es lo mismo de arriba
// promesaRapida.then( console.log);

// Promise.race = nos permite ejecutar todas las promesas en conjunto y obtener el mensaje de la promesa que se resuelve mas rapido 

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then( mensaje => console.log(mensaje)) //muestra la promesa rapida
    .catch(console.warn);


buscarHeroe('capi2')
    .then( heroe => console.log(heroe))
    .catch( console.warn )
buscarHeroeAsync('iron2')
    .then( heroe => console.log(heroe))
    .catch( console.warn )



// Await 

obtenerHeroesArr().then(console.table)
