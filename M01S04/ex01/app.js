var value = window.prompt('Introdu o valoare');
var message = '';
var number = window.prompt('Cu ce nr compar?');

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu ai introdus un nr';
} else if (value === number) {
  message = `Nr ${value} este egal cu ${number}`;
} else if (value > number) {
  message = `Nr ${value} este mai mare decat ${number}`;
} else {
  message = `Nr ${value} este mai mic decat ${number}`;
}

var messageParagraph = document.getElementById('message');
messageParagraph.innerText = message;
