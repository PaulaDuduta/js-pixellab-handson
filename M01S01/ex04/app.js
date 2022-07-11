var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value;
  var pi = Math.PI;
  var result = 0;

  result = pi * radius ** 2;

  elementResult.innerText = result;

  event.preventDefault();
});
