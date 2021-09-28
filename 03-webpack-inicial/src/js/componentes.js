
// importar archivo css propio del componente 
import '../css/componentes.css';

// funcion saludar 
// para exportar una function, usamos la palabra reservada export 
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1...');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !!`;
    document.body.append( h1 );

}
