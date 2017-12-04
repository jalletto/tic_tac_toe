
let game = new TicTacToe();

let table = document.querySelector('table')

table.addEventListener("click", function(e){



  game.printBoard()
  game.updateBoard(e)
  game.printBoard()

  if(game.gameWon() && !game.tie()){
    alert(game.activePlayer + " Wins the Game!")
  }else if (!game.gameWon() && game.tie()){
    alert("Tie Game Fools!")
  }
  game.switchActivePlayer()
})



// html letter still changes if double clicked.
// use game.board to update html?
//