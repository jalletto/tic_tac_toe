// What is the game state?
// when you create a constructor function, a prototype object gets made: Game.prototype = {}; now exists
let TicTacToe = function(){
  this.player1 = 'X'
  this.player2 = 'O'
  this.gameOver = false
  this.activePlayer = this.player1
  this.winCombos = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [6,4,2]
]
  this.board = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
  ]
}


TicTacToe.prototype.updateBoard = function(e){
  if(this.board[e.target.id] === " " ){
   this.board[e.target.id] = this.activePlayer
   this.updateHTMLBoard(e)
  }

}

TicTacToe.prototype.updateHTMLBoard = function(e){
    e.target.innerHTML = game.activePlayer
}



TicTacToe.prototype.updateHTMLCurrentPlayer = function(){
  let current_player = document.querySelector('#current_player')
  current_player.innerText = game.activePlayer + "'s Turn"
}


TicTacToe.prototype.switchActivePlayer = function(){
  this.activePlayer === this.player1 ? this.activePlayer = this.player2 : this.activePlayer = this.player1
    this.updateHTMLCurrentPlayer()
}


TicTacToe.prototype.blanks = function(){
  return this.board.includes(" ")
}


TicTacToe.prototype.doesWinningComboExist = function(){
    for(let i = 0; i < this.winCombos.length; i++ ){
      if(this.board[this.winCombos[i][0]] === this.activePlayer && this.board[this.winCombos[i][1]] === this.activePlayer && this.board[this.winCombos[i][2]] === this.activePlayer){
        return true
      }
    }
    return false
}

TicTacToe.prototype.gameWon = function(){
  if(this.doesWinningComboExist()){
    this.gameOver = true
  }
  return this.gameOver
}

TicTacToe.prototype.tie = function(){
  if(!this.blanks() && !this.gameWon()){
      return true
    } else {
      return false
    }
}

TicTacToe.prototype.endGame = function(){
  if(this.gameWon() && !this.tie()){
    alert(this.activePlayer + " Wins the Game!")
  }else if (!this.gameWon() && this.tie()){
    alert("Tie Game Fools!")
  }
}

TicTacToe.prototype.run = function(){
  let table = document.querySelector('table')
  let game = this
  table.addEventListener("click", function(e){
    game.updateBoard(e)
    game.endGame()
    game.switchActivePlayer()
})
}








