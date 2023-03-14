let previousScrollPosition = window.pageYOffset;
const topBar = document.querySelector('header');


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