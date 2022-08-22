// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $p = $('<p>', {
  text: 'Textul care trebuie sa apara in paragraf',
  id: 'myParagraph',
  class: 'clase de css',
});

const $msg = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

// $(document.body).append($p);
const $container = $('.container'); //also good $body and 'body'
$p.appendTo($container);

$container.append($msg);

setTimeout(function () {
  $msg.addClass('error');
}, 5000);

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($msg);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);

$container.after(
  $('<div>', {
    class: 'navigation',
    // text: 'x',
  }),
);

$('.navigation').append(
  $('<a>', {
    text: 'primul link',
    href: '/',
    title: 'test',
    class: 'nav-link',
  }),
);

$('.navigation .nav-link')
  .before(
    $('<h2>', {
      text: 'Navigatie',
    }),
  )
  .prepend(
    $('<sup>', {
      text: 1,
    }),
  );

$container.append(
  $('<h1>', {
    text: 'Invat jQuery',
  }),
);

const $docs = $('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
});
$docs
  .append(
    $('<a>', {
      href: 'https://api.jquery.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
      text: 'aici',
    }),
  )
  .append(
    $('<span>', {
      text: '.',
    }),
  )
  .insertAfter($('.navigation'));
