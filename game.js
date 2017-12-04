// What is the game state?
// when you create a constructor function, a prototype object gets made: Game.prototype = {}; now exists
var TicTacToe = function(){
  this.player1 = 'X';
  this.player2 = 'O';
  this.gameOver = false;
  this.activePlayer = this.player1
  this.board = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
  ]
};

TicTacToe.prototype.printBoard = function(){
  console.log(this.board)
};

TicTacToe.prototype.updateBoard = function(e){
  if(this.board[e.target.id] === " " ){
   this.board[e.target.id] = this.activePlayer
   this.updateHTML(e)
  }
};

TicTacToe.prototype.verticalWin = function(){
  if(this.board[0] === this.activePlayer && this.board[3] === this.activePlayer && this.board[6] === this.activePlayer ){
    return true

  } else if(this.board[1] === this.activePlayer && this.board[4] === this.activePlayer && this.board[7] === this.activePlayer ){
     return true

  }else if(this.board[2] === this.activePlayer && this.board[5] === this.activePlayer && this.board[8] === this.activePlayer ){
     return true
  }
    return false
}

TicTacToe.prototype.horizontalWin = function(){
  if(this.board[0] === this.activePlayer && this.board[1] === this.activePlayer && this.board[2] === this.activePlayer ){
      return true

  } else if(this.board[3] === this.activePlayer && this.board[4] === this.activePlayer && this.board[5] === this.activePlayer ){
      return true

  }else if(this.board[6] === this.activePlayer && this.board[7] === this.activePlayer && this.board[8] === this.activePlayer ){
      return true
  }
    return false
}

TicTacToe.prototype.diagonalWin = function(){
  if(this.board[0] === this.activePlayer && this.board[4] === this.activePlayer && this.board[8] === this.activePlayer ){
      return true

  } else if(this.board[6] === this.activePlayer && this.board[4] === this.activePlayer && this.board[2] === this.activePlayer ){
      return true
    }
    return false
}


TicTacToe.prototype.switchActivePlayer = function(){
  this.activePlayer === this.player1 ? this.activePlayer = this.player2 : this.activePlayer = this.player1

}

TicTacToe.prototype.gameWon = function(){
  if(this.diagonalWin() || this.horizontalWin() || this.verticalWin()){
    this.gameOver = true
  }
  return this.gameOver
}

TicTacToe.prototype.blanks = function(){
  return this.board.includes(" ")
}

TicTacToe.prototype.tie = function(){
  if(!this.blanks() && !this.gameWon()){
      return true
    } else {
      return false
    }
}

TicTacToe.prototype.updateHTML = function(e){
    e.target.innerHTML = game.activePlayer

}









