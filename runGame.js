// check board.
  // check if game won?
    //   yes = report winner / end game
    //   no = await input.
  // get input (player / tile)
  // update board
// check board
let game = new TicTacToe();

let table = document.querySelector('table')

table.addEventListener("click", function(e){

  e.target.innerHTML = game.activePlayer

  game.printBoard()
  game.updateBoard(e.target.id)
  game.printBoard()


  game.switchActivePlayer()
})