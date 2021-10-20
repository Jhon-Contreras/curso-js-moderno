import { buscarHeroeAsync } from "./promesas";

const heroesIds = [
   'capi',
   'iron',
   'spider'
];

// await debe estar dentro de una funcion async 
export const obtenerHeroesArr = async() => {
    const heroesArr = [];
    
    for(const id of heroesIds){
        // antes de ejecutar el codigo, esperamos a que la funcion se resuelva 
        const heroe = await buscarHeroeAsync( id );
        heroesArr.push(heroe);
    }
   
    
    return heroesArr;
}