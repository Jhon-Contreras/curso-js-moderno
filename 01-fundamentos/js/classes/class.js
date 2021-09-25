
// palabra reservada class, buena practica con upper camelcase 
class Persona {

    /*
    orden en una clase:
    1° Propiedades y metodos estaticos
    2° constructor
    3° sets y gets
    4° metodos
    */ 

    // propiedades de clase 
    nombre = ' ';
    codigo = ' ';
    frase  = ' ';
    comida = ' ';


    //constructor (es un metodo que se ejecutará en el momento que se crea una nueva instancia de persona)
    // el constructor es el unico metodo que retorna una instancia de un objeto y no undefined
    constructor( nombre, codigo, frase ){
    
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;    
    }

    // set y get 
    //usualmente el set solo recibe un argumento, 
    // set: Es para establecer un valor 
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    // get: Es para recuperar un valor, idealmente el get debe retornar algo
    get getComidaFavorita( ){
        return `La comida favorita de ${ this.nombre } es: ${ this.comida }`;
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


spiderMan.miFrase();
// ironMan.miFrase();

// si es un set, no se llama con parentesis 
spiderMan.setComidaFavorita = 'El pie de cereza de la tía May';


console.log(spiderMan);
console.log(spiderMan.getComidaFavorita);