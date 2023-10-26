function cardReverse() {
  if (players < 2) {
    console.log("El juego requiere al menos 2 jugadores.");
    return;
  }

  // Cambia el orden de los jugadores invirtiendo el sentido del juego
  currentPlayer = (currentPlayer - 1 + players) % players;

  console.log(`El jugador ${currentPlayer} ha jugado una carta reversa. El sentido del juego se invierte.`);
}

module.exports = cardReverse