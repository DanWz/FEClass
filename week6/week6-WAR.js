////WAR
class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

class Card {
    constructor (suit, cardFace, cardValue){
        this.suit = suit;
        this.cardFace = cardFace;
        this.cardValue = cardValue;
    }
}


class PlayWar {
    createPlayers(name) {
        let player = new Player(name);
        return player
    }

    buildDeck () {
        let suit = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        let cardFace = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
        let cardValue = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
        let newDeck = [];
        console.log('Building the Deck');
        for (let i = 0; i < suit.length; i++){
            for (let j = 0; j < cardFace.length; j++){
                newDeck.push(new Card(suit[i], cardFace[j], cardValue[j]));
            }
        }
        // this was to print out all the cards in the deck to confirm creation was successful.
        // for (let i = 0; i < newDeck.length; i++) {
        //     //console.log(newDeck.length);
        //     console.log(`${newDeck[i].cardValue} The ${newDeck[i].cardFace} of ${newDeck[i].suit} `);
        // }
        return newDeck;
    }

    shuffleDeck(newDeck) {
        console.log('Shuffling');
        let shuffledDeck = newDeck
        shuffledDeck = shuffledDeck.sort(() => Math.random() - 0.5);
        ///these were to print out the shuffled deck to confirm shuffle was successful.
    //      console.log(shuffledDeck.length);
    //      for (let i = 0; i < shuffledDeck.length; i++){
    //      console.log(`${shuffledDeck[i].cardValue} The ${shuffledDeck[i].cardFace} of ${shuffledDeck[i].suit} `);
    //  }
        return shuffledDeck;
    }

    dealCards(player, playerCards) {
        console.log('Dealing cards');
        //let gamer = player;
        if (player.name === 'Player1') {
            console.log(`dealing cards to ${player.name}`);
            return player.hand.push(playerCards.slice(0, (playerCards.length / 2)));
        } else if (player.name === 'Player2') {
            console.log(`dealing cards to ${player.name}`);
            return player.hand.push(playerCards.slice((playerCards.length / 2)));
        }

    }

    // War(hand1, hand2) {
    //     for (let i = 0; i < hand1.length; i++){
    //         hand1.Card[cardValue]
    //     }
    // }

    playWarGame() {
        let players = [];
        players.push(this.createPlayers('Player1'));
        console.log(players[0]);
        players.push(this.createPlayers('Player2'));
        let theCards = this.shuffleDeck(this.buildDeck());
        for (let i = 0; i < players.length; i++) {
        this.dealCards(players[i], theCards);
        }
        console.log(players[0].hand);
        console.log(players[0].hand[0]);
        console.log(players[0].hand['0']);
        console.log(players[1].hand);
        //war(players[0].hand, players[1].hand);
    }
}

let newGame = new PlayWar;
newGame.playWarGame();