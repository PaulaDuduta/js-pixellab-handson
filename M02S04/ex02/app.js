//super oldschool, but still working

//also array-like object
const form = document.forms[0];
const box = document.querySelector('.box');
//querySelector este o mnetoda care exista pe TOATE elementele de DOM
//document fiind element de DOM o are si el, dar
const colorInput = form.querySelector('.color');

//event delegation
form.addEventListener('click', () => {
  //evenimentul pleaca de pe oricare buton
  //urca in sus spre document
  //trece prin form, aici unde avem eventListener si va fi evaluat
  //de data asta folosim event.target
  //nu ne intereseaza currentTarget, pentru ca e form
  const element = event.target;

  //daca elementul NU este buton
  //sau daca nu are un atribut data-color, lasam evenimentul sa treaca mi departe prin early return
  if (element.nodeName !== 'BUTTON' || element.dataset.color.length <= 0) {
    return;
  }

  const button = element;
  const color = button.dataset.color;
  //suprascriem box, cu labelul curent selectat
  //fiind variabila locala, nu interfera cu box din afara

  const checkedInput = document.querySelector('.box-container input:checked');

  const box = checkedInput.parentElement;

  box.style.backgroundColor = color;
});

//am schimbat din eventul 'change' in eventul 'input
colorInput.addEventListener('input', () => {
  //nu avem event delegation, deci ne ajuta event.currentTarget
  //->elementul pe care am rulat addEventListener
  const colorInput = event.currentTarget; //no destructurare
  //DOM traversal spre butonul care e imediat langa
  const dynamicButton = colorInput.nextElementSibling;
  const colorValue = colorInput.value;

  //mini validare
  if (colorValue.length <= 0) {
    return;
  }

  dynamicButton.style.backgroundColor = colorValue;
  dynamicButton.dataset.color = colorValue;
});
