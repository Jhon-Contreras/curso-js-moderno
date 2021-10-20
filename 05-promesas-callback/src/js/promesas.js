

const heroes = {
    capi:{
        nombre: ' Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spider Man',
        poder: 'Escupe telarañas'
    }
}

export const buscarHeroe = (id) =>{
    const heroe = heroes[id];

    // debemos retornar una promesa
    //La promesa recibe un callback que se ejcutará en un momento independiente del tiempo
    //resolve: cuando se resuelve correctamente
    //reject: cuando la promesa falla
    return new Promise( (resolve, reject)=>{
        if(heroe){
            resolve(heroe);
        } else{
            reject(`No existe un heroe con el id ${ id }`);
        }
    });


}

// FORMA ASYNC 
// async = Por defecto estamos regresando una nueva promesa 
// async toma una funcion y retorna una nueva promesa que resuelve el valor del return 
export const buscarHeroeAsync = async(id) =>{
    const heroe = heroes[id];

    if(heroe){
       return heroe; //con async retornamos el heroe, es igual al resolve(heroe)
    } else{
        // throw Error(`No existe un heroe con el id ${ id }`); //para errores mas amplios
        throw `No existe un heroe con el id ${ id }`; //manejo de errores
    }



}



const promesaLenta = new Promise( (resolve, reject) => {

    setTimeout( () => resolve('Promesa lenta'), 2000)

});

const promesaMedia = new Promise( (resolve, reject) => {

    setTimeout( () => resolve('Promesa media'), 1500)

});
const promesaRapida = new Promise( (resolve, reject) => {

    setTimeout( () => resolve('Promesa rápida'), 1000)

});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}