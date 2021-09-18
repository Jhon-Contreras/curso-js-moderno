// sintaxis patron modulo 
// funcion anonima auto invocada
(()=>{

    'use strict' // modo estricto
    
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
    const btnPedir      = document.querySelector('#btnPedirCarta');
    const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
    const btnDetener    = document.querySelector('#btnDetener');

    // etiquetas small con puntos 
    const puntosHtml = document.getElementsByTagName('small');

    // referencia a divs cartas 
    const divCartasJugador     = document.querySelector('#jugador-cartas');
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

    //Turno de la computadora

    const turnoComputadora = ( puntosMinimos )=>{
        // Ejecutamos el ciclo una unica vez 
        do {

            // tomar una carta al hacer click
            const carta = pedirCarta();

            // puntos de la computadora
            puntosComputadora = puntosComputadora + valorCarta( carta );
            // console.log(puntosComputadora);
            
            puntosHtml[1].innerText = puntosComputadora;
            
            // se crea la etiqueta img 
            const imgCarta     = document.createElement('img');
            imgCarta.src       = `assets/img/cartas/${carta}.png`; //carta dinamica
            imgCarta.className = 'cartaImg'; // clase de las etiquetas img
            // imgCarta.classList.add('cartaImg'); // otra alternativa para agregar clase
            divCartasComputadora.append( imgCarta );
        
            if (puntosMinimos > 21) {
            
                break;
            }
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)); // el ciclo se hará siempre que puntosComputadora sea menores a puntosMinimos y puntos Minimos sea menores o igual a 21
        
        // mensajes victoria, derrota y empate
        setTimeout(()=>{
            if ( puntosComputadora === puntosMinimos ) { // si los puntos son iguales, empate
                swal(":(", "Nadie gana", "error");
            } else if( puntosMinimos > 21){ // si los puntos minimos del jugador son mayores a 21, computadora gana
                swal("Computadora gana", "Manco!!!!", "error");
            } else if ( puntosComputadora > 21 ){ //si los puntos de computadora, son mayores a 21, jugador gana
                swal("Ganaste", "Llegaste a 21", "success");
            } else{
                swal("Computadora gana", "Manco!!!!", "error"); //cualquier otra condición, es victoria de la computadora
            }
        }, 10);
    
        
        
    }




    // EVENTOS mediante addEventListener 
    //  Evento click pedir carta 
    btnPedir.addEventListener('click', () => { //un callback, es una funcion ()=> que se envia como argumento
        // tomar una carta al hacer click
        const carta = pedirCarta();

        // incrementar los puntos al hacer click
        puntosJugador = puntosJugador + valorCarta( carta );
        // console.log(puntosJugador);
        
        puntosHtml[0].innerText = puntosJugador;
        
        // creamos la etiqueta img 
        const imgCarta     = document.createElement('img');
        imgCarta.src       = `assets/img/cartas/${carta}.png`; //carta dinamica
        imgCarta.className = 'cartaImg'; // clase de las etiquetas img
        // imgCarta.classList.add('cartaImg'); // otra alternativa para agregar clase
        divCartasJugador.append( imgCarta );

        // condiciones 
        // evaluamos si el jugador tiene mas de 21 puntos 
        if (puntosJugador > 21) {
        
            btnPedir.disabled   = true; //bloqueamos boton pedirCarta
            btnDetener.disabled = true; //bloqueamos boton detener
            turnoComputadora( puntosJugador );

        } else if(puntosJugador === 21) {  // en caso el jugador logra 21, gana
        
            btnPedir.disabled   = true; //bloqueamos boton pedirCarta
            btnDetener.disabled = true; //bloqueamos boton detener
            turnoComputadora( puntosJugador );
        }
        
    });

    // Evento boton detener 

    btnDetener.addEventListener('click', ()=>{
        btnPedir.disabled   = true; //bloqueamos boton pedirCarta
        btnDetener.disabled = true; //bloqueamos boton detener
        turnoComputadora( puntosJugador );
    });


    // Evento nuevo juego
    btnNuevoJuego.addEventListener('click', ()=>{

        deck = []; //vaciamos el deck
        deck = crearDeck(); // creamos un nuevo deck
        puntosJugador = 0; // vaciamos los puntos
        puntosComputadora = 0; // vaciamos los puntos
        puntosHtml[0].innerText = 0; // borramos el puntaje en el html jugador
        puntosHtml[1].innerText = 0; // borramos el puntaje en el html computadora
        divCartasComputadora.innerHTML = ' '; // quitamos las imagenes de las cartas
        divCartasJugador.innerHTML = ' '; // quitamos las imagenes de las cartas
        btnPedir.disabled   = false; //activamos boton pedirCarta
        btnDetener.disabled = false; //activamos boton detener
    })


})();

