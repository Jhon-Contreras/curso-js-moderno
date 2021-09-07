// Ciclo for 

const heroes = ['Batman', 'Superman', 'Aquaman', 'Mujer maravilla'];

// for tradicional 
console.warn('For tradicional');

for(  let i = 0; i < heroes.length ; i++ ){
    console.log(heroes[i]);
}

// for in 
console.warn('For in');

for( let i in heroes ){
    console.log(heroes[i]);
}

// for of 
console.warn('For of');

for( let heroe of heroes ){
    console.log(heroe);
}