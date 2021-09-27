let a = 5;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if (dia === 0) {
    console.log('Domingo');
} else if( dia === 1){
    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('Lunes');
    // }else{
    //     console.log('No es lunes, ni domingo');
    // }
} else if( dia === 2){
    console.log('Martes');
} else{
    console.log('No es lunes, ni martes, ni domingo');
}


// sin usar if, else o switch, unicamente objetos o arreglos para imprimir el dia de la semana 
dia = 3; // domingo es el dia 0

const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
   
console.log(semana[dia] || 'Dia no valido');
