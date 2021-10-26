// petición http 

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch es un metodo propio de js 
// fetch(jokeUrl).then( resp =>{
//     resp.json().then( ({ id, value }) =>{
//         console.log(id);
//         console.log(value);
//     }); //extrae el body en formato de json
  
// });

// fetch es un metodo propio de js 
fetch( jokeUrl )
    .then( resp => resp.json() )
    .then( ({ id, value}) =>{ //obtener campos puntuales del json
        console.log(id, value);
    } );