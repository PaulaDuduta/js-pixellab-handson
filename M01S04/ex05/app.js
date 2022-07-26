var number = prompt('Introdu un nr:');

for (var i = 5; i <= 100; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest nr este multiplu de ${number}`);
}
