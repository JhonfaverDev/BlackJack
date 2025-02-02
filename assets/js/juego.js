/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

// Variables
let deck = [];  // Baraja
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta función crea una nueva baraja
const crearDeck = () => {
    for ( let i = 2; i <= 10; i++ ) {
        for ( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }

    for ( let tipo of tipos ) {
        for ( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    // console.log(deck);
    deck = _.shuffle( deck );
    console.log(deck);

    return deck;

}

crearDeck();


// Esta función me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop(); // Tomar la última carta de la baraja
    console.log(carta);
    return carta;

}

// pedirCarta();

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1); // Tomar el valor de la carta
    return ( isNaN( valor ) ) ?  // Si no es un número para eso es el metodo isNaN
            ( valor === 'A' ) ? 11 : 10  // Si es A vale 11, si no vale 10
            : valor * 1; // Multiplicar por 1 para convertirlo a número y no dejarlo en string
    

}


const valor = valorCarta( pedirCarta());
console.log({ valor });