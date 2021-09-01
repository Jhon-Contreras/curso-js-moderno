// funciones 

// Basicas 
// function saludar(){
//     console.log('Hola mundo');
// }

// Anonima 
const saludar2 = function (nombre){
    console.log('Hola ' + nombre);
}

// Argumentos 
function saludar(nombre){
    // objeto implicito arguments: Hace referencia a todos los elementos enviados a la funcion
    console.log(arguments);
    console.log('Hola ' + nombre);
}

// funciones de flecha o lambda functions 
const saludarFlecha = ( nombre )=>{
    console.log('Hola '+ nombre +' desde funcion de flecha');
}




saludar('Jhon', 49, true, 'Chile');
saludar2('Jhon');
saludarFlecha('Jhon');