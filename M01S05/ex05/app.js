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

console.log(`${birthYear.toString().slice(-2)}`);
