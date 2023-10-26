
function changeColor(card, newColor) {

    card.color = newColor; return card;

}
var newColor = rl.question("Ingrese el nuevo color: ");
var cardToChange = trash[0];
var changedCard = changeColor(cardToChange, newColor);
console.log("Carta cambiada de color: ", changedCard);


console.log("Mazo: ", trash);

module.exports = changeColor