// Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true,
// respectiv false.
// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune,
// folosind metoda window.setTimeout().

var car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  //flags:
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    this.turnLightsOn();
    //handling "this" keyword lost reference
    //oldschool
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5000);
  },

  stop: function () {
    this.speed = 0;

    console.log(this.speed);
  },

  setSpeed: function (actualSpeed) {
    if (actualSpeed > this.topReverseSpeed && actualSpeed < this.topSpeed) {
      this.speed = actualSpeed;
    } else {
      console.log(`Limite de viteza depasite.`);
    }
  },

  decelerateSpeedByFiveUnits: function () {
    console.log(
      `Masina era marca ${this.make} si se deplasa cu ${this.speed} km/h.`,
    );

    for (var i = 0; i < 5; i++) {
      this.decelerate();
    }

    console.log(`Viteza noua este ${this.speed} km/h.`);
  },
};

// car.decelerateSpeedByFiveUnits();
