const certificate = document.getElementById('certificate');
certificate.style.cursor = 'pointer';

certificate.onclick = () => certificate.classList.toggle('bigList');

document.addEventListener('scroll', () => certificate.classList.remove('bigList'));

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

