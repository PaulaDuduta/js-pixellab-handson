const calculateRectangleArea = function (width, height) {
  return width * height;
};

console.warn(
  `Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?`,
);

const yield = 25;
const field1Yield = yield * calculateRectangleArea(100, 250);
const field2Yield = yield * calculateRectangleArea(350, 200);
console.log(field2Yield - field1Yield);

console.warn(
  `Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?`,
);
const beerYield = 2.5 / 10;
const field3Yield = yield * calculateRectangleArea(400, 370);
console.log(field3Yield * beerYield);

//TEMA -->

console.warn(
  `Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`,
);
const yield2 = 32;
const field4Yield = yield2 * calculateRectangleArea(300, 200);
console.log(2.5 * field4Yield);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?`);
const field5Yield = yield2 * calculateRectangleArea(150, 200);
const field6Yield = yield2 * calculateRectangleArea(500, 300);
console.log(2.5 * field5Yield);
console.log(2.5 * field6Yield);

//<-- TEMA
