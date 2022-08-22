var Car = {
  make: '',
  color: '',
  wheels: 4,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: 0,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    // this.speed = this.speed + 1;
    this.setSpeed(this.speed + 1);

    this.displaySpeed();
  },

  decelerate: function () {
    // this.speed = this.speed - 1;
    // this.speed--;
    this.setSpeed(this.speed + 1);

    this.displaySpeed();
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;

    console.log('Luminile sunt aprinse');
  },

  turnLightsOff: function () {
    this.areLightsOn = false;

    console.log('Luminile sunt stinse');
  },

  flashLights: function () {
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
  },
};

const audi = Object.create(Car); //cloneaza acel obiect
audi.make = 'Audi';
audi.color = 'black';
audi.speed = 0;

console.log(audi);

audi.setSpeed(180);
audi.displaySpeed();
audi.accelerate();

audi.flashLights();
