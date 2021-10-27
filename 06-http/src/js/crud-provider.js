
const urlCRUD = 'https://reqres.in/api/users';

//CRUD -> obtener usuario 
const getUsuario = async( id ) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();
    return data;
}

// CRUD -> crear usuario 

const crearUsuario = async( usuario ) => {
    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

   
    return await resp.json()
}

// CRUD -> actualizar usuario 
const actualizarUsuario = async( id, usuario ) =>{
    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

// CRUD -> borrar usuario 

const borrarUsuario = async(id) =>{
    const resp = await fetch( `${urlCRUD}/${id}`,{
        method: 'DELETE',
    });
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
    
}
export{
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}