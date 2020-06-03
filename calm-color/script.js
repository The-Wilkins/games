var container = document.getElementById("container");
container.innerhtml = "<button type='button' id='button'>Change Color</button>";
var button = document.getElementById("button");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

button.onclick = function() {
  document.body.style.background = getRandomColor();
};
