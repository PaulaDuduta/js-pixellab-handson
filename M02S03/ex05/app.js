//salvam latimea initiala a ferestrei
let oldWidth = window.innerWidth;

const showMessage = (message, htmlId) => {
  // const p = document.createElement('p');
  // p.innerText = message;

  // document.body.append(p);

  let p = document.getElementById(htmlId);

  if (p === null) {
    p = document.createElement('p');
    p.id = htmlId;
    document.body.append(p);
  }

  p.innerText = message;
};

showMessage(
  `Fereastra are acum suprafata de ${
    window.innerWidth * window.innerHeight
  } pixeli.`,
  'surfaceP',
);

const showWindowSurface = () => {
  showMessage(
    `Fereastra are acum suprafata de ${
      window.windowWidth * window.windowHeight
    } pixeli`,
    'surfaceP',
  );
};
const debouncedWindowSurface = debounce(showWindowSurface, 300);
window.addEventListener('resize', debouncedWindowSurface);
showWindowSurface();

//winfow face parte din BOM(browser object model)
//nu intra sub incidenta DOMContentLoaded
window.addEventListener(
  'resize',
  debounce(() => {
    const windowWidth = window.innerWidth;
    console.log('Fereastra si-a schimbat dimensiunea.');
    showMessage(window.windowWidth, 'widthP');

    //operatorul ternar
    const message =
      windowWidth !== oldWidth ? 'Fereastra si-a schimbat latimea' : '';
    oldWidth = windowWidth;

    showMessage(message, 'secondP');
  }, 300),
);
