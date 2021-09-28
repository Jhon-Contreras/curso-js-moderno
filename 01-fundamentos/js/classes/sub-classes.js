class Persona {

    /*
    orden en una clase:
    1° Propiedades y metodos estaticos
    2° constructor
    3° sets y gets
    4° metodos
    */ 

    // propiedades de clase 

    // propiedad statica para identificar el numero de instancias de la clase 
    static _conteo = 0; //el guion bajo no influye en nada
    // static get para contar instancias 
    static get conteo(){
        return Persona._conteo + ' Instancias';
    }
    // Por lo general, los métodos estáticos se utilizan para implementar funciones que pertenecen a la clase, pero no a ningún objeto particular de la misma.
    static mensaje(){
        console.log('Hola a todos, soy un metodo stático');
    }

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

        // llamamos al conteo de instancias 
        Persona._conteo ++;
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

// heredar clase 
class Heroe extends Persona{
    clan = 'Sin clan';
    // creamos una nueva instancia de heroe 
    constructor(nombre, codigo, frase){
        /*
        para llamar al constructor de la clase Persona
        utilizamos super();
        */
       super(nombre, codigo, frase);
        //    es una regla, que inmediatamente despues del constructor se llama al super(), cuando se utilice el this.
        this.clan = 'Avengers';
       
    }

    quienSoy(){
        console.log(`soy ${ this.nombre }, de ${ this.clan }`);
        // si necesitamos llamar algo de la clase padre, usamos super.metodo();
        super.quienSoy(); 
    }
}

const spiderMan = new Heroe('Peter Parker', 'Spider Man', 'Soy tu amigable vecino spidy');
console.log(spiderMan);
spiderMan.quienSoy();
