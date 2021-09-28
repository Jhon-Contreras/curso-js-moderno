
// Un singleton es una instancia unica de mi clase 
// no necesesariamente debe llamarse singleton la clase 

class Singleton {
    
    // instancia inicializada de la clase, esta podría ser privada #instancia
    static instancia; //undefined
    nombre = ' ';

    constructor( nombre = ' ' ){
        // console.log(Singleton.instancia);
        
        if ( !!Singleton.instancia) { 
            return Singleton.instancia;
        }   
        Singleton.instancia = this;
        this.nombre = nombre;

        // opcional 
        // return this;
    }




}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Blackpanther');

console.log(`Nombre en la instancia 1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia 2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia 3 es: ${ instancia3.nombre }`);