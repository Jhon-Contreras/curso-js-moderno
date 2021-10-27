
// contenedor de la app 
const containerApp = document.querySelector('#container-app');
let inputFileItem, imgFoto;

// creamos html del frontend 
const crearInputFileHtml = () =>{
    const html = `
        <h1 class="mt-5"> Subir archivos </h1>
        <hr>
        <label class="mb-2"> Selecciona una fotografía: </label> <br>
        <input type="file" accept="image/png, image/jpeg"><br>

        <img id="foto" class="img-thumbnail" src="">
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    containerApp.append(div);

    inputFileItem = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}


// eventos 

const eventos = () =>{
    inputFileItem.addEventListener('change', (event)=>{
       const file = event.target.files[0];
       console.log(file);
    })
}

export const init = () =>{
    crearInputFileHtml();
    eventos();
}