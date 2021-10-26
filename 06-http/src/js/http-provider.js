// petición http 
// url de la api 
const jokeUrl      = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';

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

// obtener usuario 

const obtenerUsuario = async() =>{
    try {
        
        const resp = await fetch(usuariosUrl);
        if(!resp.ok) throw 'No se pudo realizar la petición http';

        const {data:usuarios} = await resp.json();
        return usuarios;
 

    } catch (err) {
        throw err;
    }
}



// exportamos la funcion obtenerChiste 
export{
    obtenerChiste,
    obtenerUsuario
}