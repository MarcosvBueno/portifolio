//animações da pagina utilizando biblioteca ScrollReveal

window.sr = ScrollReveal({reset : true});

sr.reveal('.section-tittle', { delay: 200, duration: 2000, easing: 'cubic-bezier(0.5, 0, 0, 1)', scale: 0.8 });
sr.reveal('.description-tittle', {origin: 'left',
distance: '200px',
duration: 1000,
easing: 'cubic-bezier(0.5, 0, 0, 1)',
opacity: 0
});
sr.reveal('.skills-tittle', {origin: 'right',
distance: '200px',
duration: 1000,
easing: 'cubic-bezier(0.5, 0, 0, 1)',
opacity: 0
});

sr.reveal('.description',{origin: 'bottom',
distance: '100px',
duration: 1000,
easing: 'cubic-bezier(0.5, 0, 0, 1)',
opacity: 0
});
sr.reveal('.skills',{origin: 'bottom',
distance: '100px',
duration: 1000,
easing: 'cubic-bezier(0.5, 0, 0, 1)',
opacity: 0
});
sr.reveal('.slider',{ delay: 200, duration: 1000, easing: 'cubic-bezier(0.5, 0, 0, 1)', scale: 0.8 });
sr.reveal('.social',{origin: 'left',
distance: '500px',
duration: 1500,
easing: 'cubic-bezier(0.5, 0, 0, 1)',
opacity: 0
});
sr.reveal();

//animação de texto

const span1 = document.querySelector('#span1');
const text1 = 'Olá, meu nome é';
const interval = 80;

const h1_name = document.querySelector('#h1_name');
const text2 = 'Marcos Bueno';
const interval2 = 100;

const span2 = document.querySelector('#span2');
const text3 = 'sou Desenvolvedor front-end';
const interval3 = 50;

function showTest(tag, text, interval) {
  const char = text.split('').reverse();
  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();

    tag.innerHTML += next;
  }, interval);
}

showTest(span1, text1, interval);
showTest(h1_name, text2, interval2);
showTest(span2, text3, interval3);

//data atual nos direitos autorais

const yearToday = document.querySelector('#dataAtual');

showTime = () => {
  const date = new Date();
  yearToday.innerHTML =
    'todos os direitos reservados ' +
    date.getFullYear() +
    ' | ';
};

showTime();

// botao para dark mode

const $html = document.querySelector('html');
const checkbox = document.getElementById('switch');

checkbox.addEventListener('click', function darkMode() {
  $html.classList.toggle('dark-mode');
});

// automação para cards slider dos projetos

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  document.getElementById('radio' + count).checked = true;
}

// menu mobile

function showMenu() {
  let menuMobile = document.querySelector('.mobile-menu');

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');

    document.querySelector('.icon').src = 'img/menu_white_36dp.svg';
  } else {
    menuMobile.classList.add('open');

    document.querySelector('.icon').src = 'img/close_white_36dp.svg';
  }
}

//

window.addEventListener('scroll', () => {
  let btnBack = document.querySelector('.back-button')

    if(window.scrollY > 500){
      btnBack.classList.remove('visibility');
    } else if(window.scrollY < 500){
      btnBack.classList.add('visibility');
    }
});
