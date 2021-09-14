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

// puntos del jugador 
let puntosJugador = 0;
// puntos del com 
let puntosComputadora = 0;

// botones acciones 
const btnPedir = document.querySelector('#btnPedirCarta');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnDetener = document.querySelector('#btnDetener');

// etiquetas small con puntos 
const puntosHtml = document.getElementsByTagName('small');

// referencia a divs cartas 
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


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

   
    return carta;
}


pedirCarta();

// cual es el valor de la carta 
const valorCarta = ( carta ) => {
    
    // extraer el primer valor del string carta
    const valor = carta.substring(0, carta.length - 1); // utilizando el metodo substring, extraemos el ultimo valor de la carta
    
    return (isNaN(valor)) ? 
            ( valor === 'A') ? 11 : 10  // Operador ternario para evaluar si es un As vale 11, caso contrario vale 10 (J, K, Q) 
            : valor * 1; //transformar el valor de la carta a un numero
 
}

// EVENTOS
// escuchamos el click mediante addEventListener 
btnPedir.addEventListener('click', () => { //un callback, es una funcion ()=> que se envia como argumento
    // tomar una carta al hacer click
    const carta = pedirCarta();

    // incrementar los puntos al hacer click
    puntosJugador = puntosJugador + valorCarta( carta );
    console.log(puntosJugador);
    
    puntosHtml[0].innerText = puntosJugador;
    
    // creamos la etiqueta img 
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/img/cartas/${carta}.png`; //carta dinamica
    imgCarta.className = 'cartaImg'; // clase de las etiquetas img
    // imgCarta.classList.add('cartaImg'); // otra alternativa para agregar clase
    divCartasJugador.append( imgCarta );

    // condiciones 
    // evaluamos si el jugador tiene mas de 21 puntos 
    if (puntosJugador > 21) {
        console.warn('Perdiste');
        btnPedir.disabled = true; //bloqueamos boton pedirCarta
    } else if(puntosJugador === 21) {  // en caso el jugador logra 21, gana
        console.warn('Ganaste');
    }
    
});

