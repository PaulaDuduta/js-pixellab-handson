//tot un array like object obj.0 => are nevoie de bracket notation
//obj[0];
const heading = document.getElementsByTagName('h1')[0];
const ul = document.querySelector('ul');

//functiile adaugate ca event listener vor primi eventul ca parametru
const onClick = (event) => {
  //destructurare
  const { currentTarget: heading } = event;
  //echivalent cu currentTarget = event.currentTarget;
  //alias cu heading
  //const heading = event.currentTarget;

  //DOM traversal spre UL (h1 + ul)
  const ul = heading.nextElementSibling;
  //proprietatea style.display se refera la stilul INLINE, nu la ce avem in CSS
  if (ul.style.display === '') {
    ul.style.display = 'none';
  } else {
    ul.style.display = '';
  }
};

// const onResize = () => {
//   const width = window.innerWidth;

//   if (width <= 500) {
//     ul.style.display = 'none';
//     heading.addEventListener('click', onClick);
//   } else {
//     ul.style.display = '';
//     heading.removeEventListener('click', onClick);
//   }
// };

// onResize();

// window.addEventListener('resize', onResize);

const mediaQueryList = matchMedia('(max-width: 500px)');
const enableMenu = (matches) => {
  if (matches) {
    ul.style.display = 'none';
    heading.addEventListener('click', onClick);
  } else {
    ul.style.display = '';
    heading.removeEventListener('click', onClick);
  }
};

enableMenu(mediaQueryList.matches);

mediaQueryList.addEventListener('change', (event) => {
  //destructurare
  //const matches = event.matches;
  const { matches } = event;
  enableMenu(matches);
});
