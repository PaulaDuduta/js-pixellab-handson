// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

//Folosind keywordul break opreste bucla
//atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     i++; // <- important to avoid infinite loop

//     break;
//   }
//   console.log(i);

//   i++;
// }

//TEMA -->

//ex5 Modifica exemplul astfel incat bucla sa numere de la 1 la 67.

// var i = 1;
// while (i < 100) {
//   // if (i === 68) {
//   //   i++;
//   //   break;
//   // }
//   console.log(i);
//   i++;
// }

//ex6 Modifica exemplul astfel incat bucla sa numere de la 1 la 66.

// var i = 1;
// while (i < 67) {
//   console.log(i);
//   i++;
// }

//ex7 Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)

// var i = 0;
// while (i < 100) {
//   if (i === 12) {
//     break;
//   }
//   i++;
//   console.log(i);
// }

//ex8 Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).

// var i = 0;
// while (i <= 32) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   i++;
//   console.log(i);
// }

//ex9 Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.

var number = prompt('Introdu un nr');
var maxNumber = prompt('Introdu limta superioara');
var i = 5;

while (i < maxNumber) {
  if (i % number === 0) {
    console.log(i);
  }

  i++;
}
//<-- TEMA
