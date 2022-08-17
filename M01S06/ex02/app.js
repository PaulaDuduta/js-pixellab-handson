const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const headingElement = document.createElement('h1');
// let message = 'Nu stim ce browser folosesti.';
let message = '';
let personName = '';
let chromeNav = navigator.userAgent.includes('Chrome');
let browserName;

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

if (userAgentString.includes('Chrome')) {
  browserName = 'Chrome';
} else if (userAgentString.includes('Firefox')) {
  browserName = 'Firefox';
}

switch (browserName) {
  case 'Chrome':
    message = 'Navighezi folosind Chrome.';
    break;

  case 'Firefox':
    message = 'Navighezi folosind Firefox.';
    break;

  default:
    message = 'Nu stim ce browser folosesti.';
}

setTimeout(function () {
  personName = prompt(`${browserName} doreste sa stie cum te numesti.`);

  setTimeout(function () {
    document.body.removeChild(headingElement);
  }, 3000);
}, 3000);

headingElement.innerText = personName;
paragraphElement.innerText = message;
document.body.append(paragraphElement);
document.body.append(headingElement);
