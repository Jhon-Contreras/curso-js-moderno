

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

    if ( heroe ){   //si viene un heroe, enviamos el null (que representa al error) y enviamos el heroe como argumento
        callback(null, heroe);
    } else {
        //si no coincide el heroe, enviamos el error
        callback(`No existe un heroe con el id ${ id }`); //enviar error de callback
    }



}