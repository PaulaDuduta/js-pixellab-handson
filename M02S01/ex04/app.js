class Car {
  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    // this.frame = document.createElement('div');
    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = this.color;

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);
    this.carBody.style.backgroundColor = this.color;

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car--wheel--back');
    this.carBody.append(this.wheelBack);

    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);

    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
  }

  render() {
    document.body.append(this.frame);

    return this;
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
  }

  e(elementName) {
    //wrappers in action
    return document.createElement(elementName);
  }
}

const car01 = new Car(250, 16, 'red');
car01.render();
const car02 = new Car(16, 250, 'blue');
car02.render();
const car03 = new Car(16, 16, '#135').render();
// car03.render();
car03.turnLightOn();
