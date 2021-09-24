
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

    // metodos 
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        // llamamos un metodo dentro de otro 
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderMan = new Persona('Peter Parker', 'Spider Man', 'Soy tu amigable vecino spidy');
const ironMan = new Persona('Tony Stark', 'Iron Man', 'Soy Iron Man');
console.log(spiderMan);
console.log(ironMan);

spiderMan.miFrase();
ironMan.miFrase();