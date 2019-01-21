

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
}
			else {
console.log("Sorry, try again.");
			};
checkForMatch();
}


var flipCard = function(cardId) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			}
			else {
				alert("Sorry, try again.");
				};
console.log("User flipped " + cards[cardsId]);

};


















