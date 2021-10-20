import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';


import './styles.css';


// promesaLenta.then( console.log);
// promesaMedia.then( mensaje => console.log(mensaje)); //esto es lo mismo de arriba
// promesaRapida.then( console.log);

// Promise.race = nos permite ejecutar todas las promesas en conjunto y obtener el mensaje de la promesa que se resuelve mas rapido 

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then( mensaje => console.log(mensaje)) //muestra la promesa rapida
    .catch(console.warn);

    