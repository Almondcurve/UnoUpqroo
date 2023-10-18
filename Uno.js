// para solicitar al usuario
const rl = require("readline-sync");
let MazoRevuelto = require('./modules/revuelvemazo')
//juego UNO
var deck = [];
var colors = ["Yellow","Blue", "Green", "Red"];
var types = ["Comun", "Especial","Comodin"];
var card = {
    color: null, // amarillo, azul , verde , rojo 
    number: null, // 0-9
    Type: null // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ){
    
    for (var cNumber = 0; cNumber < 10; cNumber++){
        
        deck.push({color: colors[cColor], number: cNumber, type: "comun"});
    }
    for (var cNumber1 = 1; cNumber < 10; cNumber1++){
        
    }
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});

} 

deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});

//npm init (inicializar un proyecto en node)
//verifico que tenga el archivo package-json
//npm install o i <modulo (readline-sync)>

//console.log(deck);

const players = rl.question("¿cuantos jugadores seran?", {})
const totalcards = players * 7;
//repartir 7 cartas x jugador
//dependencia (un codigo que depende de otro codigo)
// node package manager (npm)
// recorro el total de tarjetas (total de tarjetas = tarjetas x jugador)
// un arreglo x jugador 
//investigar comparadores, varidarodes de variables 
var cardsPlayers = {};

for(var cTcards = 0; cTcards < 7; cTcards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++) {
        //console.log(" players ", cPlayers)
        if (!cardsPlayers["player_"+cPlayers]) {
            cardsPlayers["player_"+cPlayers] = [];
        }

        cardsPlayers["player_"+cPlayers].push(deck.shift());;
        //console.log(deck.shift());
        //console.log(cardsPlayers)
        }
}
        //trash.push(deck.shift()); para agregar una carta a trash aleatorio en la mesa
var trash = [];
trash.push(deck.shift());

console.log(trash);
//PASO 1: Definir mi funcion
//PASO 2 : Hacer que la funcion reciba un parametro (carta)
//PASO 3 : Obtener la información de la carta (numero, color)
//PASO 4: comparar si el color de mi cartas obtenidas coinciden con la primera carta de trash
//PASO 5: Sino, validar si el numero coincide
//PASO 6: Si, la carta y el color coincide retornar la carta
//PASO 7: Sino retornar nulo

function cardValidation(card) {
    console.log(card.number)
    //if (card.number == 2) llamar a numero y carta 
    if (card.number == 2, card.colors == "verde") {
        console.log("es igual");
    } else {console.log("no es igual")}
}  
    //length le va sumar mas 1 al arreglo y nos va regresar el tamaño del arreglo. pero... tenemos que restarle -1 
    //if (card.number == 2) llamar a numero y carta  
    //(los operadores pile evaluan que uno u otro sea verdadero y si una lo es se ejecuta (||)  
    //los amperson (&&) evaluan y si las dos se cumplen para ejecutar, si una de ellas no se cumple, no se ejecuta
    // 5 [0,1,2,3,4] 
    if (card.number == trash[trash.length-1].number || card.color == trash[trash.length-1].color) {
        console.log("es igual");
    } else {console.log("no es igual")}

cardValidation({color: "Yellow", number: 3, types: "comun"});
//mostrar todas las cartas que le tocaron al maso del primer jugador
//nivel principal el player nos va traer un item (automaticamente identifica sin necesidad de identificarlo) 
for(const player in cardsPlayers){
    console.log(cardsPlayers[player]);
    // npm i chalk@4.1.2 (https://www.npmjs.com/package/chalk)
    // Primer player ponga una carta
    // PASO 1: Ver mis cartas (listo)
    // PASO 2: elejir carta
    // PASO 3: Validar carta
    // PASO 4: Poner carta (de mano jugador a trash)
    //console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
}

MazoRevuelto(deck);

console.log("Mazo revuelto:");
console.log(deck);