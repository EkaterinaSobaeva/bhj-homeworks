const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slider = Array.from(document.querySelectorAll('.slider__item'));

arrowPrev.onclick = prev;
arrowNext.onclick = next;

function next() {
	let activeSlider = slider.findIndex(item => item.classList.contains('slider__item_active'));

	if (activeSlider < slider.length - 1) {
		slider[activeSlider].classList.remove('slider__item_active');
		activeSlider += 1;
		slider[activeSlider].classList.add('slider__item_active');
	}  else {
		slider[activeSlider].classList.remove('slider__item_active');
		activeSlider = 0;
		slider[activeSlider].classList.add('slider__item_active');
	}
}

function prev() {
	let activeSlider = slider.findIndex(item => item.classList.contains('slider__item_active'));

	if (activeSlider > 0) {
		slider[activeSlider].classList.remove('slider__item_active');
		activeSlider -= 1;
		slider[activeSlider].classList.add('slider__item_active');
	}  else {
		slider[activeSlider].classList.remove('slider__item_active');
		activeSlider = slider.length - 1;
		slider[activeSlider].classList.add('slider__item_active');
	}
}