

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


const promesaLenta = new Promise( (resolve, reject) => {

    setTimeout( () => resolve('Promesa lenta'), 2000)

});

const promesaMedia = new Promise( (resolve, reject) => {

    setTimeout( () => resolve('Promesa media'), 1500)

});
const promesaRapida = new Promise( (resolve, reject) => {

    setTimeout( () => reject('Promesa rápida'), 1000)

});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}