// Select color input
let colorPicked = $("#color-Picker");

// Select size input
let gridHeight = $("#inputHeight");
let gridWidth = $("#inputWidth");

// Listen to click on the sunmit button, once user clicks call makeGrid()
$('#submit-button').click(function (a) {
  //if the event does is not explicitly handled, default action should not be taken.
  a.preventDefault();
  makeGrid();
});

/**
    * @description creates a dynamic grid of cells
    * @param {number} height - users inputed height
    * @param {number} weight - users inputed weight
    * @returns {html} Rows of table data
*/

function makeGrid() {

  // Make grid 
  const alc = document.getElementById('pixel_canvas');
  alc.innerHTML = '';
  let height = gridHeight.val();
  let width = gridWidth.val();

  //listen to click event by the user and sets the cell background to the color picked by the user.
  let addEvent = function (drawTable) {
    drawTable.addEventListener('click', function () {
      drawTable.style.backgroundColor = colorPicked.val();
    });
  }

  //creates row and column using a loop and return table
  for (let i = 0; i < height; i++) {
    let row = alc.insertRow(i);
    for (let j = 0; j < width; j++) {
      let drawTable = row.insertCell(j);
      drawTable.addEventListener('click', addEvent(drawTable));
    }
  }
}