// petición http 

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() =>{

    try {

         // fetch es un metodo propio de js 
        const resp = await fetch( jokeUrl );
        if (!resp.ok) throw 'No se pudo realizar la petición';
        
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};

    } catch (err) {
       throw err;
    }

   
}



export{
    obtenerChiste
}