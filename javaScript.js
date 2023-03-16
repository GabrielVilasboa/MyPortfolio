
const topBar = document.querySelector('header');
const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
const content = document.querySelector('.content');

let previousScrollPosition = window.pageYOffset;
let translateX = 0;

window.addEventListener('scroll', () => {
  const menu = document.getElementById('menu');
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition < previousScrollPosition) {
    // Scrolling up
    topBar.style.opacity = '1';
  } else if(!menu.classList.contains('open')){
    // Scrolling down
    topBar.style.opacity = '0';
  }

  previousScrollPosition = currentScrollPosition;
});

function openMenu(){
  const menu = document.getElementById('menu');
  const buttom = document.getElementById('menu-lines');
  const line = document.getElementsByClassName('line');
  buttom.classList.toggle('open');
  menu.classList.toggle('open');
  line.classList.toggle('open');
}

buttonPrev.addEventListener('click', () => {
  if(translateX < 60){
    translateX += 30;
    content.style.transform = `translateX(${translateX}em)`;
  }

});

buttonNext.addEventListener('click', () => {
  if(translateX > -75){
    translateX -= 30; 
    content.style.transform = `translateX(${translateX}em)`;
  }

});


  