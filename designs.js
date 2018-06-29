// Select color input
let colorPicked = $("#colorPicker");

// Select size input
var gridHeight = $("#inputHeight");
var gridWeight = $("#inputWeight");

// When size is submitted by the user, call makeGrid()

$('#submit_button').click(function (a) {
  a.preventDefault();
  makeGrid();
});

function makeGrid() {

  // Your code goes here!

  const alc = document.getElementById('pixel_canvas');
  alc.innerHTML = '';
  var height = gridHeight.val();
  var weight = gridWeight.val();

  var addEvent = function (drawTable) {
    drawTable.addEventListener('click', function () {
      drawTable.style.backgroundColor = colorPicked.val();
    });
  }


  for (var i = 0; i < height; i++) {
    var row = alc.insertRow(i);
    for (var j = 0; j < weight; j++) {
      var drawTable = row.insertCell(j);
      drawTable.addEventListener('click', addEvent(drawTable));
    }
  }
}
