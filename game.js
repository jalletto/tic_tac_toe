// What is the game state?
// Display the board.
// Game over?
// Winner?
// Three in a row?
// x positions
// y positions
// when you create a constructor function, a prototype object gets made: Game.prototype = {}; now exists
var TicTacToe = function(){
  this.player1 = 'X'
  this.player2 = 'O'
  this.board = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
  ]
};

TicTacToe.prototype.printBoard = function(){
  console.log(this.board)
};

TicTacToe.prototype.updateBoard = function(position, player){
  this.board[position] = player

};

TicTacToe.prototype.verticalWin = function(player){
  if(this.board[0] === player && this.board[3] === player && this.board[6] === player ){
    console.log(player + " Wins!")

  } else if(this.board[1] === player && this.board[4] === player && this.board[7] === player ){
     console.log(player + " Wins!")

  }else if(this.board[2] === player && this.board[5] === player && this.board[8] === player ){
     console.log(player + " Wins!")
  }
}

TicTacToe.prototype.horizontalWin = function(player){
  if(this.board[0] === player && this.board[1] === player && this.board[2] === player ){
    console.log(player + " Wins!")

  } else if(this.board[3] === player && this.board[4] === player && this.board[5] === player ){
     console.log(player + " Wins!")

  }else if(this.board[6] === player && this.board[7] === player && this.board[8] === player ){
     console.log(player + " Wins!")
  }
}

TicTacToe.prototype.diagonalWin = function(player){
  if(this.board[0] === player && this.board[4] === player && this.board[8] === player ){
    console.log(player + " Wins!")

  } else if(this.board[6] === player && this.board[4] === player && this.board[2] === player ){
     console.log(player + " Wins!")
    }
}

var game = new TicTacToe();

game.printBoard();

game.updateBoard(0, game.player2);
game.verticalWin(game.player2)
game.updateBoard(3, game.player2);
game.verticalWin(game.player2)
game.updateBoard(6, game.player2);
game.verticalWin(game.player2)

game.printBoard();









