// sobrecarga de constructores 

class Persona {

    // PROTIP para crear instancias de distintas formas
    static porObjeto({ nombre, apellido, pais}){    
        return new Persona(nombre, apellido, pais)
    }
    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    // metodo 
    getInfo(){
        console.log(`info: ${ this.nombre}, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais1      = 'Honduras';

// objeto 
const jc = {
    nombre: 'Jhon',
    apellido : 'Contreras',
    pais : 'Chile'
}
      
const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( jc );
persona1.getInfo();
persona2.getInfo();