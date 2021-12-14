const certificate = document.getElementById('certificate');
certificate.style.cursor = 'pointer';

certificate.onclick = () => certificate.classList.toggle('bigList');

document.addEventListener('scroll', () => certificate.classList.remove('bigList'));