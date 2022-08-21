const rotator = Array.from(document.querySelectorAll('.rotator__case'));

function changeClass() {
	
	let idx = rotator.findIndex((item) => item.classList.contains('rotator__case_active'));

	if (idx < rotator.length - 1) {
		rotator[idx].classList.remove('rotator__case_active');
		rotator[idx + 1].classList.add('rotator__case_active');
	} else {
		rotator[idx].classList.remove('rotator__case_active');
		rotator[0].classList.add('rotator__case_active');
	}
	
}

setInterval(changeClass, 1000);