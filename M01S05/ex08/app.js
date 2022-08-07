// Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime.
// Adauga un buton pe care scrie Elimina Evenimentul.
// La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.

const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const promptButton = document.getElementById('prompt');
const message = document.getElementById('message');

button.addEventListener('click', clickHandler);
// removeButton.addEventListener('click', function () {
//   button.removeEventListener('click', clickHandler);
// });

//hoisting
function clickHandler() {
  alert('Ai apasat butonul');
}

//TEMA -->
console.warn(
  `Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului. `,
);
const age = 0;

function eventHandler() {
  // console.log(prompt('Introdu varsta'));
  const age = prompt('Introdu varsta');

  console.log(`Ai ${age} ani.`);
  message.innerText = `Ai ${age} ani.`;
}

promptButton.addEventListener('click', eventHandler);

console.warn(
  `Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.`,
);

console.warn(
  `Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila, apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.`,
);

//<-- TEMA
