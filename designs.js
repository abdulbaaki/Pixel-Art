// Select color input
let colorPicked = $("#colorPicker");

// Select size input
let gridHeight = $("#inputHeight");
let gridWeight = $("#inputWeight");

// Check input height and input weight
$('#inputHeight').on("keypress", function () {
  if ($(this).val() > 10000) {
    alert("Number must be less than 1000");
  }
});

$('#inputWeight').on("keypress", function () {
  if ($(this).val() > 10000) {
    alert("Number must be less than 1000");
  }
});

// When size is submitted by the user, call makeGrid()
$('#submit_button').click(function (a) {
  a.preventDefault();
  makeGrid();
});

function makeGrid() {

  // Your code goes here!

  const alc = document.getElementById('pixel_canvas');
  alc.innerHTML = '';
  let height = gridHeight.val();
  let weight = gridWeight.val();

  let addEvent = function (drawTable) {
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
