
const  jhon = {
    nombre: 'Jhon',
    edad: 28,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const  jose = {
    nombre: 'Jose',
    edad: 39,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

jhon.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecutó esta linea');

    this.nombre = nombre;
    this.edad   = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }

}


const maria = new Persona('Maria', 18);

console.log(maria);
maria.imprimir();
