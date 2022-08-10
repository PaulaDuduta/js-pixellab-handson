//siaf - iife

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';
      console.log('Mouseul este pe scena');
      // const p = document.createElement('p');
      // p.innerText = 'Mouseul este pe scena';

      // document.body.append(p);
      showMessage(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul NU este pe scena';
      console.log('Mouseul NU este pe scena.');

      // const p = document.createElement('p');
      // p.innerText = 'Mouseul NU este pe scena';

      // document.body.append(p);
      showMessage(message);
    });
  });

  //hoisting

  function showMessage(message) {
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = message;
    paragraphElement.classList.add('message');

    document.body.append(paragraphElement);
  }
})();
