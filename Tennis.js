// In a game of tennis, a player begins with a score of zero (0). 
// With each success, the player earns more points. The points are 
// earned in this sequence:

// 0
// 15
// 30
// 40

// If a player has 40 and scores again, that player wins the game 
// as long as the other player does not also have 40 points. If both 
// players reach 40 points it is referred to as a 'deuce.'

// Scoring during deuce give a player advantage. If the other player 
// scores again, the score returns to deuce. If a player has advantage 
// and scores again, that player wins the game.


// Players must be able to score points
// The game must be able to be completed with a winner
// The 'deuce' case should be handled
// After a game has been won, a winner must be determined
// The current score of either player should be available at any point during the game
class Game {
    constructor(player1 = 0, player2 = 0) {
        this.player1 = [player1, 15, 30, 40, 45]
        this.player2 = [player2, 15, 30, 40, 45];
    }

    get player1Points () { return this.player1 } 
    get player2Points () { return this.player2 } 
    
    player1Score () { this.player1 = (this.player1 + 15) }
    player2Score () { this.player2 = (this.player2 + 15) }
}
module.exports = Game;