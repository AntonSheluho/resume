const certificate1 = document.getElementById('certificate1');
const certificate2 = document.getElementById('certificate2');
certificate1.style.cursor = 'pointer';
certificate2.style.cursor = 'pointer';

certificate1.onclick = () => certificate1.classList.toggle('bigList');
certificate2.onclick = () => certificate2.classList.toggle('bigList');

document.addEventListener('scroll', () => {
    certificate1.classList.remove('bigList');
    certificate2.classList.remove('bigList');
});

const burger = document.querySelector('.burger');
const titleNavig = document.querySelector('.title__navig');

burger.onclick = () => {
    burger.classList.toggle('activeBurger');
    titleNavig.classList.toggle('activeTitleNavig');
}
document.onscroll = () => {
    burger.classList.remove('activeBurger');
    titleNavig.classList.remove('activeTitleNavig');
}

