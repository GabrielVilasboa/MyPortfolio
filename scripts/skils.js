const content = document.querySelector('.content');
const firstItem = document.querySelector('.frame:nth-child(1)');
const itemWidth = firstItem.offsetWidth;

const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');



let translateX = 0;

let screenWidth = window.innerWidth; 
let screenWidthOfset = screenWidth - document.documentElement.offsetWidth;

window.addEventListener('resize', () =>{
    screenWidth = window.innerWidth;
    translateX = 0;
    content.style.transform = `translateX(${translateX}px)`
});

buttonPrev.addEventListener('click', moveForPrev);
buttonNext.addEventListener('click', moveForNext);

function moveForPrev(){
    if(screenWidth < 1000){
        forPrev(0, screenWidth);
    }else if(screenWidth < 1500){
        forPrev(0, (screenWidth/2));
    }else if(screenWidth >= 1500){
        forPrev(0, (screenWidth/4));
    }
}

function moveForNext(){
    if(screenWidth < 1000){
        forNext((screenWidth * (-6)), screenWidth);
    }else if(screenWidth < 1500){
        forNext((screenWidth * (-2.5)), (screenWidth/2));
    }else if(screenWidth >= 1500){
        forNext((screenWidth * (-0.75)), (screenWidth/4));
    }
}

function forPrev(maxWidthTranslate, widthTranslate){
    if(translateX < maxWidthTranslate){
        translateX += widthTranslate;
        content.style.transform = `translateX(${translateX}px)`;
    }
}
function forNext(minWidthTranslate, widthTranslate){
    if(translateX > minWidthTranslate){
        translateX -= widthTranslate;
        content.style.transform = `translateX(${translateX}px)`;
    }
} 