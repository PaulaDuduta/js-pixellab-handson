var dateBuilder = [
  function () {
    return '2019';
  },
  function () {
    return 'Februarie';
  },
  function () {
    return '24';
  },
];

console.log(dateBuilder);

dateBuilder[3] = function () {
  return 'Duminica';
};

console.log(dateBuilder);

console.warn(`Folosind arrayul dateBuilder. Afiseaza luna curenta.`);
console.log(`Astazi este ${dateBuilder[1]()}.`);

console.warn(`Afiseaza propozitia: “Suntem in anul an.”.`);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Suntem in luna ll in anul aa.”.`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Astazi este zz.”.`);
console.log(`Astazi este ${dateBuilder[3]()}.`);

console.warn(`Folosind arrayul dateBuilder. Afiseaza anul curent.`);
console.log(dateBuilder[0]());

console.warn(`Afiseaza propozitia: “Suntem in luna an.”.`);
console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Astazi este zi, data.”.`);
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.warn(`Afiseaza propozitia: “Data curenta este zi luna an.”.`);
console.log(
  `Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`,
);
