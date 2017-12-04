
let game = new TicTacToe();

let table = document.querySelector('table')

table.addEventListener("click", function(e){

  e.target.innerHTML = game.activePlayer

  game.printBoard()
  game.updateBoard(e.target.id)
  game.printBoard()

  if(game.gameWon()){
    alert(game.activePlayer + " Wins the Game!")
  }
  game.switchActivePlayer()
})


// Write logic for tie game.
// html letter still changes if double clicked.
// use game.board to update html?
//