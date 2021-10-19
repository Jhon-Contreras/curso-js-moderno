

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

// funcion buscarHeroe recibe un id y la funcion callback
//el estandar es llamar callback
export const buscarHeroe = ( id, callback ) =>{
 
    const heroe = heroes[id]; //el id es capi

    callback(heroe) //llamamos al callback, y enviamos al heroe encontrado como argumento

}