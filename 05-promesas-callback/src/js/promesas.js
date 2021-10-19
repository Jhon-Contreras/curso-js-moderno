

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