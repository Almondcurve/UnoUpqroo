 function plusTwo (card)  {
    const nextPlayerIndex = (cPlayers + 1) % players;
     if(card.number == "+2"){
     cardsPlayers["player_"+ nextPlayerIndex].push(deck.shift());
     cardsPlayers["player_"+ nextPlayerIndex].push(deck.shift());
     }
 }
 plusTwo({color: "Yellow",number : "+2", type: "especial"});
 console.log(cardsPlayers);
 
 module.exports = plusTwo     