
let game = new TicTacToe();

let table = document.querySelector('table')

table.addEventListener("click", function(e){

  e.target.innerHTML = game.activePlayer

  game.printBoard()
  game.updateBoard(e.target.id)
  game.printBoard()

  if(game.gameWon() && !game.tie()){
    alert(game.activePlayer + " Wins the Game!")
  }else if (!game.gameWon() && game.tie()){
    alert("Tie Game Fools!")
  }
  game.switchActivePlayer()
})


// Write logic for tie game.
  // check for blanks
    // if blanks return true
// html letter still changes if double clicked.
// use game.board to update html?
//