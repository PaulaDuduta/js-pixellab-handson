// var i = 101;
// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

// var i = 1;

// do {
//   if (i > 50) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

//TEMA-->

//ex4 Modifica exemplul astfel incat bucla sa numere de la 1 la 52

// var i = 1;
// do {
//   if (i > 52) {
//     i++;
//     break;
//   }
//   console.log(i);
//   i++;
// } while (i < 100);

//ex5 Modifica exemplul astfel incat bucla sa numere de la 1 la 51.

// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

//ex6 Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).

// var i = 0;
// do {
//   if (i === 13) {
//     i++;
//     break;
//   }
//   console.log(i);
//   i++;
// } while (i < 100);

//ex 7 Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 8;
// do {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i <= 32);

//ex8 Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
var number = prompt('Introdu un nr');
var minNumber = prompt('Introdu limita inferioara');
var maxNumber = prompt('Introdu limita superioara');
var i = minNumber;

do {
  // if (i % number !== 0) {
  //   i++;
  //   console.log(i);
  //   continue;}

  //v2
  if (i % number === 0) {
    console.log(`${i} este multiplu de ${number}`);
  } else {
    console.log(i);
  }
  i++;
} while (i <= maxNumber);

//<--TEMA
