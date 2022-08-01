// var number = prompt('Introdu un nr:');
// var maxNumber = prompt(
//   'Introdu numarul maxim pana la care sa numere programul:',
// );

// // for (var i = 5; i <= 100; i++) {
// //   console.log(i);

// //   if (i % number !== 0) {
// //     continue;
// //   }

// //   console.log(`Acest nr este multiplu de ${number}`);
// // }

// //Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.
// for (var i = 1; i <= maxNumber; i++) {
//   console.log(i);

//   if (i % number !== 0) {
//     continue;
//   }

//   console.log(`Acest nr este multiplu de ${number}`);
// }

// var number = prompt('Introdu limita superioara');
var number = 30;
for (var i = 2; i < number; i++) {
  for (var z = 0; z < i; z++) {
    if (z % i !== 0) {
      console.log(z);
      z++;
    }
  }
  // console.log(`${i} este nr prim`);
}
