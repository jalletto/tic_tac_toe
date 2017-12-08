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

  this.gameHeader = document.querySelector('#game_header')
  this.table = document.querySelector('table')
  this.board = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
  ]
}


TicTacToe.prototype.updateBoard = function(e){
  if(this.board[e.target.id] === " " ){
   this.board[e.target.id] = this.activePlayer
   e.target.innerHTML = game.activePlayer
  }
}


TicTacToe.prototype.switchActivePlayer = function(){
  if(!this.gameOver){
    this.activePlayer === this.player1 ? this.activePlayer = this.player2 : this.activePlayer = this.player1
      this.gameHeader.innerText = game.activePlayer + "'s Turn"
  }
}


TicTacToe.prototype.blanks = function(){
  return this.board.includes(" ")
}


TicTacToe.prototype.doesWinningComboExist = function(){
    for(let i = 0; i < this.winCombos.length; i++ ){
      if(this.board[this.winCombos[i][0]] === this.activePlayer && this.board[this.winCombos[i][1]] === this.activePlayer && this.board[this.winCombos[i][2]] === this.activePlayer){
        this.gameOver = true
      }
    }
    return this.gameOver
}


TicTacToe.prototype.tie = function(){
  if(!this.blanks() && !this.doesWinningComboExist()){
      this.gameOver = true
    }
    return this.gameOver
}

TicTacToe.prototype.endGame = function(){
  if(this.doesWinningComboExist()){
    this.gameHeader.innerText = this.activePlayer + " Wins the Game!"
  }else if (this.tie()){
    this.gameHeader.innerText = "You both lose."
  }
}

TicTacToe.prototype.run = function(){
  let game = this
  this.table.addEventListener("click", function(e){
    game.updateBoard(e)
    game.endGame()
    game.switchActivePlayer()
})
}








