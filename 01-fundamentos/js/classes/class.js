
// palabra reservada class, buena practica con upper camelcase 
class Persona {
    // propiedades de clase 
    nombre = ' ';
    codigo = ' ';
    frase = ' ';


    //constructor (es un metodo que se ejecutará en el momento que se crea una nueva instancia de persona)
    // el constructor es el unico metodo que retorna una instancia de un objeto y no undefined
    constructor( nombre, codigo, frase ){
    
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;    
    }
}

const spiderMan = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino spidy');
const ironMan = new Persona('Tony Stark', 'Iron Man', 'Soy Iron Man');
console.log(spiderMan);
console.log(ironMan);
