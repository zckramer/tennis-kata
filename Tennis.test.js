const Game = require('./Tennis');

test('each player has score of zero ', () => {
    const underTest = new Game();
    expect((underTest.player1Points + underTest.player2Points)).toEqual(0);
    
})
test('a single score gives a player 15 points ', () => {
    const underTest = new Game();
    underTest.player2Score();
    // expect(underTest.player1Points).toEqual(15)
    expect(underTest.player2Points).toEqual(15)

})

