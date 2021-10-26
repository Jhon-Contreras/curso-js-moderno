// importamos la funcion 
import { obtenerChiste } from './http-provider';

// contenedor de la app 
const containerApp = document.querySelector('#container-app');
// boton y lista 
let btnOtroChiste, olList; 

// funcion para crear el html del chiste 
const crearChisteHtml = () =>{
    const html = `
        <h1>Chistes del Chak Norri</h1>
        <hr>
    
        <button class="btn btn-primary"> Tirame otro chiste </button>

        <ol class="mt-2 list-group">
           
        </ol>
    `
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    containerApp.append(divChistes);


}

// evento click del boton
const eventos = () =>{

    olList = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener( 'click', async() =>{
        
        btnOtroChiste.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtroChiste.disabled = false;
    })

}

//funcion para dibujar el chiste en el html
//mostraremos chiste {icon_url, id, value}
const dibujarChiste = (chiste) =>{

    // contador 
    const contador = document.querySelectorAll('li').length + 1;

    const olItem = document.createElement('li'); //creamos un li dentro del ol
    //imprimimos el chiste que viene desde el evento click
    olItem.innerHTML = ` <b> <img src="${chiste.icon_url}" class="img-fluid"> Chiste ${ contador } - ${ chiste.id } </b>: ${ chiste.value} `;
    // asignamos la clase al li 
    olItem.classList.add('list-group-item');
    // asignamos, el item recibido al li 
    olList.append(olItem);
}



// funcion para renderizar la pagina y ejecutar el chiste
export const init = () =>{
    crearChisteHtml();
    eventos();
}