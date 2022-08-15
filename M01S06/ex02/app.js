const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const headingElement = document.createElement('h1');
// let message = 'Nu stim ce browser folosesti.';
let message = '';
let personName = '';
let chromeNav = navigator.userAgent.includes('Chrome');

// if (userAgentString.includes('Chrome')) {
//   message = 'Navighezi folosind Chrome.';
//   window.setTimeout(
//     (function () {
//       personName = prompt('Chrome doreste sa stie cum te numesti.');
//     })(personName),
//     3000,
//   );
// } else if (userAgentString.includes('Firefox')) {
//   message = 'Navighezi folosind Firefox.';
//   window.setTimeout(
//     (function () {
//       personName = prompt('Firefox doreste sa stie cum te numesti.');
//     })(personName),
//     3000,
//   );
// }

switch (chromeNav) {
  case true:
    message = 'Navighezi folosind Chrome.';
    window.setTimeout(
      (function () {
        personName = prompt('Chrome doreste sa stie cum te numesti.');
      })(personName),
      3000,
    );

    window.setTimeout(function () {
      document.body.removeChild(headingElement);
    }, 3000);
    break;

  case false:
    message = 'Navighezi folosind Firefox.';
    window.setTimeout(
      (function () {
        personName = prompt('Firefox doreste sa stie cum te numesti.');
      })(personName),
      3000,
    );
    window.setTimeout(function () {
      document.body.removeChild(headingElement);
    }, 3000);
    break;
  default:
    message = 'Nu stim ce browser folosesti.';
}

headingElement.innerText = personName;
paragraphElement.innerText = message;
document.body.append(paragraphElement);
document.body.append(headingElement);
