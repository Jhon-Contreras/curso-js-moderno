


// SPREAD OPERATOR 

const gato = {
    nombre: 'Gatito feliz',
    edad: 15
}
// crea un objeto y luego toma (copia) todas las propiedades del objeto gato y asignalas a este nuevo objeto gato2
const gato2 = { ...gato}

gato2.nombre = 'Gatito triste';
gato2.edad = 12;


const gatos = [gato, gato2]

console.log({gatos});