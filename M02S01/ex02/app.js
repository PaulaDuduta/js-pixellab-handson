class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    // if (++this.speed > this.topSpeed) {
    //   this.speed = this.topSpeed;

    //   this.displaySpeed();
    //   return;
    // }

    // ++this.speed;
    // this.displaySpeed();

    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      this.displaySpeed();

      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  displaySpeed() {
    console.log(`Aceasta bicicleta are viteza: ${this.speed}.`);
  }

  toString() {
    return `${this.make}, ${this.color}`;
  }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.speed = 2;
bike.displaySpeed();

for (let i = 0; i < 3; i++) {
  bike.decelerate();
  //Speed never gets under 0, which is the topReverseSpeed
}

bike.speed = -10;
bike.displaySpeed();
//setting the base speed at a certain point will modify the speed, but using the decelerate method, the speed won't get under the topReverseSpeed, beacause it's using the setSpeed method.

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }
}

const trike = new Tricycle('Tryke', 'red', 2, 9, -2);
trike.speed = 0;
trike.displaySpeed(
  console.log(`Aceasta tricicleta are viteza: ${trike.speed}.`),
);

for (let i = 0; i < 3; i++) {
  trike
    .decelerate
    // console.log(`Aceasta tricicleta are viteza: ${trike.speed}.`),
    ();
  //Speed never gets under 0, which is the topReverseSpeed
}

trike.speed = -10;
trike.displaySpeed(
  console.log(`Aceasta tricicleta are viteza: ${trike.speed}.`),
);
