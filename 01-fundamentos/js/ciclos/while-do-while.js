
const carros = ['Ford', 'Mazda', 'Toyota', 'Honda'];

// While 
console.warn('While');


let i = 0;
//la condicion del while debe ser verdadera para que se ejecute
while ( i < carros.length ) { 
    console.log( carros[i] );
    i++;
}

//undefined, null y false son consideradas condiciones falsas, que harían no ejecutar el ciclo

while ( carros[i] ) { 
    if (i === 1) {
        break;
    }
    console.log( carros[i] );
    i++;
}

console.warn('Do while');
// do while 
let j = 3;
do {
    console.log( carros[j]);
    j++;
} while( carros[j] );

// Diferencia entre while y do while 

/* !!!!!!

Básicamente en uno primero se ejecuta la comprobación, 
mientras que el otro se ejecuta el código dentro de él y despues la comprobación. 

!!!!!! */