const plusfour = (deck) => {

for (var MoreFour = 0; MoreFour < 4; MoreFour++) {
    cardsPlayers["player_1"].push(deck.shift());
    }
//console.log("jugador actual", cardsPlayers["player_0"]);
//console.log("siguiente jugador", cardsPlayers["player_1"]);
}

mudule.exports = plusfour