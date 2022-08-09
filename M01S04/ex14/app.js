var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);
person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);
var totalYears = 0;
for (var i = 0; i < person.pets.length; i++) {
  totalYears += person.pets[i].age;
}
console.log(totalYears);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);
person.pets.forEach(function (pet) {
  var petName = pet.name;
  var petSpecies = pet.species;
  var petAge = pet.age;

  console.log(`${petName} este ${petSpecies} si are ${petAge} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);
var currentYear = new Date().getFullYear();
var personAge = currentYear - person.birthYear;
for (var i = 0; i < person.pets.length; i++) {
  var petName = person.pets[i].name;
  var ageDiff = personAge - person.pets[i].age;

  console.log(
    `Intre ${person.firstName} si ${petName} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);
var message = 'Animalul meu se numeste';
for (var i = person.pets.length - 1; i >= 0; i--) {
  console.log(`${message} ${person.pets[i].name}`);
}

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” `,
);
var currentYear = new Date().getFullYear();
var personAge = currentYear - person.birthYear;
var petAge = [];
var oldestPetAge = 0;
var oldestPetName = '';

// for (var i = 0; i < person.pets.length; i++) {
//   // petAge.push(person.pets[i].age);
//   // var maxAge = Math.max(...petAge);
//   // var pet = person.pets[i].age;

//   // if (pet === maxAge) {
//   //   console.log(person.pets[i].name);
//   // }

//   for (var j = person.pets.length - 1; j >= 0; j--) {
//     if (person.pets[i].age > person.pets[j].age) {
//       oldestPetName = person.pets[i].name;
//       oldestPetAge = person.pets[i].age;

//       var ageDiff = Math.abs(personAge - oldestPetAge);
//     }
//   }
// }

var maxAge = person.pets[0].age;
var petName = person.pets[0].name;
for (var i = 1; i < person.pets.length; i++) {
  if (person.pets[i].age > maxAge) {
    maxAge = person.pets[i].age;
    petName = person.pets[i].name;
  }
}

console.log('Maxage = ' + maxAge);
console.log('Petname = ' + petName);

console.log(
  `${oldestPetName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
var punctuation = ', ';
message = 'Am ';

person.pets.forEach(function (pet, index, pets) {
  var petSpecies = pet.species;

  if (index === pets.length - 1) {
    punctuation = '.';
  }

  if (index === pets.length - 2) {
    punctuation = ' si ';
  }

  message += petSpecies + punctuation;
});
console.log(message);
