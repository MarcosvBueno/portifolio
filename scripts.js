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
  yearToday.innerHTML = "todos os direitos reservados " + date.getFullYear() + " | desenvolvido por ";
};

showTime();

// botao para dark mode

const $html = document.querySelector('html');
const checkbox = document.getElementById('switch');

checkbox.addEventListener('click', function darkMode(){
  $html.classList.toggle('dark-mode') 
});

// automação para cards slider dos projetos

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if(count>4 ){
    count = 1;
  }
  document.getElementById('radio'+ count).checked = true;
}