/**
 * 
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas o pica)
 * 
*/

// inicializar el deck de cartas 
let deck          = [];
const tiposCartas = ['C', 'D', 'H', 'S'];
const especiales  = ['A', 'J', 'Q', 'K'];
// funciona para crear deck de cartas 
const crearDeck = () =>{
    for( let i = 2; i <=10; i++ ){ //el ciclo for inicializa en 2 (las cartas parten del 2), debe ser menor o igual a 10 (las cartas llegan hasta el numero 10)
        
        // Creamos un for of para asignar los numeros a cada tipo de carta 
        for (let tipo of tiposCartas) {
           deck.push(i + tipo) //agregamos las cartas al array del deck
        }
    }
    // creamos un for para las cartas especiales y asignarlas a cada tipo de Carta
    for( let tipo of tiposCartas ){
        for( let especial of especiales ){
            deck.push(especial + tipo);
        }
    }
        
   

    // console.log(deck); // deck ordenado
    deck = _.shuffle( deck ); //creamos una baraja aleatoria con la libreria underscore.js
    console.log(deck); //imprimimos nuevamente el deck barajeado
    return deck;

}


crearDeck();

// Esta funcion permite tomar una carta

const pedirCarta = () =>{

    if (deck.length === 0) {
        throw 'No hay cartas en el deck' //error en consola
    }
    const carta = deck.pop(); //remueve el ultimo elemento del arreglo

    console.log(deck);
    console.log(carta); // carta extraida del deck con .pop()
    
}


pedirCarta();




