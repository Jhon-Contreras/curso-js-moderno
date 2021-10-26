// petición http 
// url de la api 
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// metodo para obtener los chistes desde la api con fetch 
const obtenerChiste = async() =>{
    // manejo de errores con try catch 
    try {

         // fetch es un metodo propio de js 
        const resp = await fetch( jokeUrl ); //esperamos respuesta de la url
        if (!resp.ok) throw 'No se pudo realizar la petición'; //en caso no recibamos respuesta
        
        const {icon_url, id, value} = await resp.json(); //mediante desestructuracion de objetos, obtenemos solo los campos que necesitamos
        return {icon_url, id, value}; //retornamos esos campos

    } catch (err) {
       throw err;
    }

   
}


// exportamos la funcion obtenerChiste 
export{
    obtenerChiste
}