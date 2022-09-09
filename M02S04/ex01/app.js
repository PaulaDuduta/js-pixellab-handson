const box = document.querySelector('.box');
const applyButton = document.querySelector('.apply');
const darkenButton = document.querySelector('.darken');
const className = 'animate-class';

setTimeout(() => {
  box.classList.add(className);

  //callback hell
  setTimeout(() => {
    box.classList.remove(className);
  }, 2000);
}, 2000);

applyButton.addEventListener('click', () => {
  //remove style attribute first:
  box.style.backgroundColor = '';
  box.classList.toggle(className);

  const hasClass = box.classList.contains(className);
  //fiind in arrow function, nu this este elementul, ci event.currentTarget
  //pt ca pe el am afaugat event handlerul
  const button = event.currentTarget;
  //ternary operator:;
  const buttonText = hasClass ? 'Elimina' : 'Aplica';
  button.title = buttonText;
  button.innerText = buttonText;
});

darkenButton.addEventListener('click', () => {
  //diferenta dintre setAttribute style si manipularea individuala a proprietatilor de pe style
  //este ca style suprascrie complet, iar element.style.xxx va manipula doar acea proprietate inline

  box.setAttribute('style', 'background-color: #000');
});
