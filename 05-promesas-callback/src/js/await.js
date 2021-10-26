import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
   'capi',
   'iron',
   'spider'
];

// await debe estar dentro de una funcion async 
export const obtenerHeroesArr = async() => {
    // const heroesArr = [];
    // for(const id of heroesIds){
    //     // antes de ejecutar el codigo, esperamos a que la funcion se resuelva 
    //     heroesArr.push(buscarHeroe( id ));
    // }
    // // ejecutamos Promise.all para ejecutar todas las promesas simultaneamente
    // // evitar await en ciclo for 
    // return await Promise.all( heroesArr )

    // manera mas elegante 
    return await Promise.all(heroesIds.map( buscarHeroe ));
}

// manejo de errores con await 
export const obtenerHeroesAwait = async(id) =>{
  try {

    const heroe = await buscarHeroeAsync(id);
    return heroe;

  } catch (err) {
      
    console.log('Catch !!');
    // throw err;
    return {
        nombre: 'Sin nombre',
        poder: 'Sin poder'
    }

  }
}