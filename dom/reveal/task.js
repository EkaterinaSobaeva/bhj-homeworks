function isVisible(e) {
	const {top, bottom} = e.getBoundingClientRect();

	if (bottom < 0) {
		return false
	}

	if (top > window.innerHeight) {
		return false
	}

	return true
}

document.addEventListener('scroll', function() {
	const reveal = document.querySelector('.reveal');
	
	if (isVisible(reveal)) {
		reveal.classList.add('reveal_active');
	}

})