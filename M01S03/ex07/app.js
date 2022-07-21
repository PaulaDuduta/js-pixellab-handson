var person = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  birthYear: 2000,
  pets: [
    { name: 'Billy', species: 'dog', age: 3 },
    { name: 'Bubble', species: 'turtle', age: 4 },
    { name: 'Bob', species: 'cat', age: 2 },
  ],
  zipCode: '12345',
};
var difference = 2022 - person.birthYear - person.pets[0].age;
var petName = person.pets[0].name;
var li01 = document.getElementById('prop01');
var li02 = document.getElementById('prop02');
var li03 = document.getElementById('prop03');

// console.log(`
//     Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
//     Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
//     Dragos are si un master in tehnologii internet.
//     Dragos este instructor Pixellab si preda JavaScript acolo.
// `);

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. `,
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `,
);
console.log((2022 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. `,
);
console.log(difference.toString());

console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. `,
);
console.log(petName);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(
  `Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);
// li01.innerText =
//   person.firstName +
//   ', ' +
//   person.pets[0].name +
//   ', ' +
//   person.pets[1].name +
//   ', ' +
//   person.pets[2].name +
//   ' locuiesc in aceeasi casa.';

li01.innerText = `Afiseaza propozitia: ${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `,
);
li02.innerText = `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2: ${
  person.pets[0].age - person.pets[2].age
}`;

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);
li03.innerText = `Animalele mele s-au nascut in ${2022 - person.pets[0].age}, ${
  2022 - person.pets[1].age
}, respectiv ${2022 - person.pets[2].age}.`;
