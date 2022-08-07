const person = {
  getName: function () {
    return 'John Smith';
  },

  getAge: function () {
    return 30;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);
console.log(person.getName().split(' ')[0]);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);
const currentYear = new Date().getFullYear();
// console.log(currentYear - person.getAge());
const birthYear = currentYear - person.getAge();
console.log(birthYear);

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);
console.log(`'${birthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);

//TEMA -->

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(person.getName());

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);
console.log(person.getAge());

console.warn(
  `Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);
console.log(`M-am nascut in ${birthYear}.`);

console.warn(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${birthYear}!`,
);

//<-- TEMA
