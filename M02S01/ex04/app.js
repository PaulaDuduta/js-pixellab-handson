class Car {
  areHazardsOn = false;
  intervalId = -1;
  isLightOn = false;

  constructor(positionX, positionY, color, capColor, wheelColor) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;
    this.capColor = capColor;
    this.wheelColor = wheelColor;

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
    this.wheelBack.style.backgroundColor = this.wheelColor;

    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
    this.hubCapBack.style.backgroundColor = this.capColor;

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.wheelFront.style.backgroundColor = this.wheelColor;

    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
    this.hubCapFront.style.backgroundColor = this.capColor;
  }

  render() {
    document.body.append(this.frame);

    return this;
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');
    this.isLightOn = true;

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');
    this.isLightOn = false;

    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');

    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');

    return this;
  }

  e(elementName) {
    //wrappers in action
    return document.createElement(elementName);
  }

  changeTireColor(wheelColor) {
    this.wheelFront.style.backgroundColor = wheelColor;
    this.wheelBack.style.backgroundColor = wheelColor;

    return this;
  }

  changeCapColor(capColor) {
    this.hubCapFront.style.backgroundColor = capColor;
    this.hubCapBack.style.backgroundColor = capColor;

    return this;
  }

  moveTo(X, Y) {
    this.frame.style.left = `${X}px`;
    this.frame.style.top = `${Y}px`;

    return this;
  }

  // toggleHazards() {
  //   let self = this;

  //   const interval = setInterval(function () {
  //     setTimeout(function () {
  //       self.turnLightOn();
  //       self.engageBreak();
  //     }, 1000);

  //     setTimeout(function () {
  //       self.turnLightOff();
  //       self.disengageBreak();
  //     }, 2000);
  //   }, 2000);

  //   setTimeout(function () {
  //     clearInterval(interval);
  //   }, 10000);

  //   return this;
  // }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      clearInterval(this.intervalId);
      this.areHazardsOn = false;

      if (this.isLightOn === true) {
        this.lightFront.classList.add('light--on');
      } else {
        this.lightFront.classList.remove('light--on');
      }

      return;
    }

    const self = this;

    self.intervalId = setInterval(function () {
      self.lightFront.classList.toggle('light--on');
      self.lightBack.classList.toggle('light--on');
    }, 1000);
    self.areHazardsOn = true;
  }
}

const car01 = new Car(250, 16, 'red');
car01.render();
const car02 = new Car(16, 250, 'blue');
car02.render();
const car03 = new Car(16, 16, '#135', 'pink', 'green').render();
// car03.render();
// car03.turnLightOn();
car03.changeTireColor('crimson');
car03.changeCapColor('black');
// car03.engageBreak();
// car03.moveTo(100, 100);
car03.toggleHazards();
