// What is the game state?
// Display the board.
// Game over?
// Winner?
// Three in a row?
// x positions
// y positions
// when you create a constructor function, a prototype object gets made: Game.prototype = {}; now exists
var TicTacToe = function(player1, player2){
  this.player1 = player1
  this.player2 = player2
  this.board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
  ]
}

TicTacToe.prototype.printBoard = function(){
  console.log(this.board)
}

TicTacToe.prototype.updateBoard = function(x,y, player){
  this.board[x][y] = player

}

var game = new TicTacToe("X", "O")

game.printBoard()

game.updateBoard(0,0, game.player1)

game.printBoard()





