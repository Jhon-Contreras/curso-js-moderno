
const urlCRUD = 'https://reqres.in/api/users';

// obtener usuario 
const getUsuario = async( id ) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();
    return data;
}

// const crear usuario 

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




export{
    getUsuario,
    crearUsuario
}