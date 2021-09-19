// sintaxis patron modulo 
// funcion anonima auto invocada
const miModulo = (()=>{

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
    const tiposCartas = ['C', 'D', 'H', 'S'],
          especiales  = ['A', 'J', 'Q', 'K'];

    // puntos del jugador 
    // let puntosJugador = 0,
    // puntos del com 
        // puntosComputadora = 0;
    // (Optimizacion) puntos jugadores 
    let puntosJugadores = [];

    // botones acciones 
    const btnPedir      = document.querySelector('#btnPedirCarta'),
          btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
          btnDetener    = document.querySelector('#btnDetener');

    // etiquetas small con puntos 
    const puntosHtml = document.querySelectorAll('small');

    // referencia a divs cartas jugadores
    const divCartasJugadores = document.querySelectorAll('.divCartas');
         

    
    // (Optimizacion) esta funcion es para inicializar el juego 
    const inicializarJuego = ( numJugadores = 2  ) =>{
        deck = crearDeck();
        puntosJugadores = [];
        for(let i = 0; i< numJugadores; i++){
            puntosJugadores.push(0);
        }
       
        puntosHtml.forEach( elem => elem.innerText = 0 ); // borramos los puntajes en el html 
        divCartasJugadores.forEach ( elem => elem.innerHTML = ' '); // reinicializamos las cartas html

        btnPedir.disabled   = false; //activamos boton pedirCarta
        btnDetener.disabled = false; //activamos boton detener
    }

    // funcion para crear deck de cartas 
    const crearDeck = () =>{

        deck = []; //(Optimizacion) reiniciamos el deck
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

        return _.shuffle( deck ); //(Optimizacion) creamos y retornamos una baraja aleatoria con la libreria underscore.js

    }



    // Esta funcion permite tomar una carta

    const pedirCarta = () =>{

        if (deck.length === 0) {
            throw 'No hay cartas en el deck' //error en consola
        }
        return deck.pop(); //(Optimizacion) retornamos el ultimo elemento del arreglo

    
    }



    // esta funcion sirve para obtener cual es el valor de la carta 
    const valorCarta = ( carta ) => {
        
        // extraer el primer valor del string carta
        const valor = carta.substring(0, carta.length - 1); // utilizando el metodo substring, extraemos el ultimo valor de la carta
        
        return (isNaN(valor)) ? 
                ( valor === 'A') ? 11 : 10  // Operador ternario para evaluar si es un As vale 11, caso contrario vale 10 (J, K, Q) 
                : valor * 1; //transformar el valor de la carta a un numero
    
    }


    // funcion para acumular puntos
    // Turno: 0 = primer jugador y el ultimo será la computadora  
    const acumularPuntos = ( carta, turno) =>{
 
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // funcion para crear carta en html 
    const crearCarta = ( carta, turno ) =>{
        const imgCarta     = document.createElement('img');
        imgCarta.src       = `assets/img/cartas/${carta}.png`; //carta dinamica
        imgCarta.className = 'cartaImg'; // clase de las etiquetas img
        // imgCarta.classList.add('cartaImg'); // otra alternativa para agregar clase
        divCartasJugadores[turno].append( imgCarta ); // agrega la carta al html segun el turno
    }

    // funcion para determinar ganador 
    const determinarGanador = () =>{
        const [ puntosMinimos, puntosComputadora] = puntosJugadores;
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
    //Turno de la computadora
    const turnoComputadora = ( puntosMinimos )=>{
        // Ejecutamos el ciclo una unica vez 
        let puntosComputadora = 0;
        do {

            // tomar una carta al hacer click
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1); // acumulamos los puntos de la computadora
            crearCarta( carta, puntosJugadores.length - 1);
        
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)); // el ciclo se hará siempre que puntosComputadora sea menores a puntosMinimos y puntos Minimos sea menores o igual a 21
        
        determinarGanador();
    
        
    }


    // EVENTOS mediante addEventListener 
    //  Evento click pedir carta 
    btnPedir.addEventListener('click', () => { //un callback, es una funcion ()=> que se envia como argumento
        // tomar una carta al hacer click
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0); // acumulamos los puntos del primer jugador
        
        crearCarta( carta, 0 );
        
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
        turnoComputadora( puntosJugadores[0] ); //asigamos los puntos a la computadora
    });


    // Evento nuevo juego
    btnNuevoJuego.addEventListener('click', ()=>{
       
        inicializarJuego();
   
    })

    // en el patron moludo, lo que sea que se agregue en el return será publico y podrá usarse externamente mediante el modulo
    return {
        nuevoJuego: inicializarJuego
    };

})();

