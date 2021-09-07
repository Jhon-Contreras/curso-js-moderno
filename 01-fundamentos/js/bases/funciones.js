// funciones 

// Basicas 
function saludar(){
    console.log('Hola mundo');
}

// Anonima 
const saludar2 = function (nombre){
    console.log('Hola ' + nombre);
}

// Argumentos 
function saludar(nombre){
    // objeto implicito arguments: Hace referencia a todos los elementos enviados a la funcion
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1;

    // esto no se ejecutará
    console.log('Soy un codigo despues del return');
}

// funciones de flecha o lambda functions 
const saludarFlecha = ( nombre )=>{
    console.log('Hola '+ nombre +' desde funcion de flecha');
}




const retornoDeSaludar = saludar('Jhon', 49, true, 'Chile');
console.log(retornoDeSaludar);
// saludar2('Jhon');
// saludarFlecha('Jhon');


// return 

function sumar(a, b){
    return a + b;

}
// transformar a function de flecha 

// const sumar2 = (a,b)=>{
//     return a + b;
// }

// resumir funcion de flecha cuando solo hay 1 return
const sumar2 = (a,b) => a + b;


console.log(sumar(5,2));
console.log(sumar2(10,20));


function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

// transformar funcion getAleatorio en funcion de flecha sin llaves 

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());