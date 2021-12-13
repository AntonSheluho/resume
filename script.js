const buttLeft = document.querySelector('.slider__arrow_left');
const buttRight = document.querySelector('.slider__arrow_right');
const slide2 = document.querySelector('.slide2');

let buttRightAcc = 0;

buttRight.onclick = function() {
    if (buttRightAcc == 0) {
        buttRightAcc -= 100
        slide2.style.transform = `translateX(-100%)`
    }
}
buttLeft.onclick = function() {
    if (buttRightAcc == -100) {
        buttRightAcc += 100
        slide2.style.transform = `translateX(0%)`
    }
}
