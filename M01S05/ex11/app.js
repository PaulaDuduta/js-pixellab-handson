console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata unui patrat.
Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`);

// function calculateSurface(width, length) {
//   if (arguments.length === 1) {
//     return width ** 2;
//   } else if (arguments.length === 2) {
//     return width * length;
//   } else if (arguments.length === 3) {
//     width;
//   }
// }

// function calculateSurface(width, length, height) {
//   switch (arguments.length) {
//     case 1:
//       return width ** 2;

//     case 2:
//       return width * length;

//     case 3:
//       return (width * height + length * height) * 2;

//     default:
//       console.log('Invalid number of arguments.');
//   }
// }

function calculateSurface(width, length, height) {
  let result = 0;
  switch (arguments.length) {
    case 1:
      result = width ** 2;
      break;
    case 2:
      result = width * length;
      break;
    case 3:
      result = (width * height + length * height) * 2;
      break;
    default:
      console.log('Invalid number of arguments.');
  }
  return result;
}

console.log(calculateSurface(2));
console.log(calculateSurface(6, 7));
console.log(calculateSurface(20, 15, 5));

console.warn(
  `Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `,
);

function calculateCircleArea(radius) {
  const pi = Math.PI;

  return pi * radius ** 2;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(16));
console.log(calculateCircleArea(20));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
`);
const pet = {
  getName: function () {
    return 'Maxi';
  },
  getSpecies: function () {
    return 'flamingo';
  },
  getAge: function () {
    return 3;
  },
};

console.warn(`
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`);
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

console.warn(`
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);
const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
