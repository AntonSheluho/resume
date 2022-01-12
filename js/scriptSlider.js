const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const buttLeft = document.querySelector('.slider__arrow_left');
const buttRight = document.querySelector('.slider__arrow_right');
const slidesArray = [
                    `<a class="slide__link" href="https://antonsheluho.github.io/Diplom/" target="_blank">
                        <img class="slide__img" src="./img/progect_1.png" alt="img">
                    </a>
                    <div class="slide__text">Diploma project from the course of "Web site development using HTML, CSS, JavaScript"</div>
                    `,
                    `<a class="slide__link" href="#" target="_blank">
                        <img class="slide__img" src="./img/progect_2.png" alt="img">
                    </a>
                    <div class="slide__text">Diploma project from the course of "JavaScript application development"</div>
                    `
];

for (let i = 0; i < slides.length; i++) {
    slides[i].remove();
}

const onset = 0;
let step = 0;
let offset = 1;

function getElem() {
    let el = document.createElement('div');
    el.classList.add('slide');
    slider.insertAdjacentElement('beforeend', el);
    el.innerHTML = slidesArray[step];
    el.style.left = `${onset*100}%`;
    step++;
}
function getPrev() {
    let el = document.createElement('div');
    el.classList.add('slide');

    if (step == 2) {
        step = 0;
    }
    
    slider.insertAdjacentElement('beforeend', el);
    el.innerHTML = slidesArray[step];
    el.style.left = `${offset*100}%`;
    step++;
}
function getNext() {
    let el = document.createElement('div');
    el.classList.add('slide');
    
    if (step == 2) {
        step = 0;
    };

    slider.insertAdjacentElement('beforeend', el);
    el.innerHTML = slidesArray[step];
    el.style.left = `${(offset*100) - 200}%`;
    step++;
}


function prev() {
    let slides2 = document.querySelectorAll('.slide');
    let offset2 = 0;

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = `${(offset2*100) - 100}%`;
        offset2++;
    };

    setTimeout(() => {
        slides2[0].remove();
    }, 400);
}

function next() {
    let slides3 = document.querySelectorAll('.slide');
    let offset3 = 2;

    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.left = `${(offset3*100) - 100}%`;
        offset3--;
    };

    setTimeout(() => {
        slides3[0].remove();
    }, 400);
}

getElem();

buttRight.onmousedown = () => {
    getPrev();
};
buttRight.onmouseup = () => {
    prev();
};
buttLeft.onmousedown = () => {
    getNext();
};
buttLeft.onmouseup = () => {
    next();
};