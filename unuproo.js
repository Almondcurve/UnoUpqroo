const rl = require("readline-sync");
const chalk = require("chalk");
const mazoRevuelto = require("./modules/deck-shuffle");
const selectionUno = require("./modules/seleccion");

//juego UNO
async function jugar() {
  var deck = [];
  var colors = ["yellow", "blue", "green", "red"];
  var types = ["Comun", "Especial", "Comodin"];
  var card = {
    color: null, // amarillo, azul , verde , rojo
    number: null, // 0-9
    Type: null, // comun, especiales y comodines
  };

  for (var cColor = 0; cColor < colors.length; cColor++) {
    for (var cNumber = 0; cNumber < 10; cNumber++) {
      deck.push({ color: colors[cColor], number: cNumber, type: "comun" });
    }
    for (var cNumber1 = 1; cNumber < 10; cNumber1++) {}
    deck.push({ color: colors[cColor], number: "+2", type: "comun" });
    deck.push({ color: colors[cColor], number: "+2", type: "comun" });
    deck.push({ color: colors[cColor], number: "B", type: "comun" });
    deck.push({ color: colors[cColor], number: "B", type: "comun" });
    deck.push({ color: colors[cColor], number: "R", type: "comun" });
    deck.push({ color: colors[cColor], number: "R", type: "comun" });
  }

  deck.push({ color: null, number: "+4", type: "comodin" });
  deck.push({ color: null, number: "+4", type: "comodin" });
  deck.push({ color: null, number: "+4", type: "comodin" });
  deck.push({ color: null, number: "+4", type: "comodin" });
  deck.push({ color: null, number: "CC", type: "comodin" });
  deck.push({ color: null, number: "CC", type: "comodin" });
  deck.push({ color: null, number: "CC", type: "comodin" });
  deck.push({ color: null, number: "CC", type: "comodin" });

  const players = rl.question("¿cuantos jugadores seran?", {});
  const totalcards = players * 7;
  // Deck Shuffle
  mazoRevuelto(deck);
  var cardsPlayers = {};

  for (var cTcards = 0; cTcards < 7; cTcards++) {
    for (var cPlayers = 0; cPlayers < players; cPlayers++) {
      if (!cardsPlayers["player_" + cPlayers]) {
        cardsPlayers["player_" + cPlayers] = [];
      }

      cardsPlayers["player_" + cPlayers].push(deck.shift());
    }
  }
  var trash = [];
  trash.push(deck.shift());

  function cardValidation(card) {
    console.log(card.number);
    //if (card.number == 2) llamar a numero y carta
    if (
      card.number == trash[trash.length - 1].number ||
      card.color == trash[trash.length - 1].color
    ) {
      console.log("es igual");
    } else {
      console.log("no es igual");
    }
  }

  for (const player in cardsPlayers) {
    console.log("Jugador actual: ", player);
    const result = await selectionUno(cardsPlayers[player], "CHOICE");
    //buscar carta seleccionada
    console.log(result);
  }
//mientras el turno no acabe
//let end = false
//while (end ==false) {}
// //validar

  console.log(
    chalk.bgWhite("Ultima carta tirada:") +
      " " +
      chalk[trash[trash.length - 1].color].bold(trash[trash.length - 1].number)
  );
  console.log(trash[trash.length - 1]);
}

jugar();
