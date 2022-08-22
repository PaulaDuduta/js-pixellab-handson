class Car {
  //v1-Angular style
  topSpeed = 160;
  isTrunkOpen = false;
  areLightsOn = false;
  flashCycles = 5;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    //v2
    this.topReverseSpeed = -50;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;

    console.log('S-au aprins luminile');
  }

  turnLightsOff() {
    this.areLightsOn = false;

    console.log('S-au stins luminile');
  }

  flashLights() {
    let self = this;
    const interval = setInterval(function () {
      setTimeout(function () {
        self.turnLightsOn();
      }, 1000);
      setTimeout(function () {
        self.turnLightsOff();
      }, 2000);
    }, 2000);
    clearInterval(interval);
  }
}

const audi = new Car('Audi', 'black', 4, 50);

console.warn(
  `Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3). O poti salva intr-o variabila numita opel.`,
);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach(function (car) {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  console.log(`Viteza noua este ${car.speed - 5} km/h.`);
});

audi.flashLights();
