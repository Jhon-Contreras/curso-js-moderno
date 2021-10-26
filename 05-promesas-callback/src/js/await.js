import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
   'capi',
   'iron',
   'spider'
];

const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
// const heroesPromesas = heroesIds.map(buscarHeroe); //esta  manera es identica a la anterior



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
    // si falla, devolvemos un objeto vacio 
    return {
        nombre: 'Sin nombre',
        poder: 'Sin poder'
    }

  }
}


// if await, for await 

export const heroesCiclo = async() =>{
    console.time('HeroesCiclo');
    const heroes = await Promise.all(heroesPromesas);
    
    // forma 1 
    // console.log(heroes);
    // heroes.forEach( heroe => console.log(heroe));

    // forma 2  => for await
    for await( const heroe of heroesPromesas){
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id) =>{
    if ( (await buscarHeroeAsync(id)).nombre === 'Iron Man') {
        console.log('es el mejorrrrrr');
    } else{
        console.log('Naaaa');
    }
}