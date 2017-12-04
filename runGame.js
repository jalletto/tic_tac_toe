// check board.
  // check if game won?
    //   yes = report winner / end game
    //   no = await input.
  // get input (player / tile)
  // update board
// check board

let table = document.querySelector('table')

table.addEventListener("click", function(e){
  e.target.innerHTML = "X"
})