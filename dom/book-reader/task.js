const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

function selectedClass(idx) {
	clear();
	
	fonts[idx].classList.add('font-size_active');

	if (fonts[idx].classList.contains('font-size_small')) {
		book.classList.add('book_fs-small');
	}

	if (fonts[idx].classList.contains('font-size_big')) {
		book.classList.add('book_fs-big');
	}
	return false
}

function clear() {
	fonts.forEach(item => item.classList.remove('font-size_active'));
	book.classList.remove('book_fs-big');
	book.classList.remove('book_fs-small');
}



for (const i in fonts) {
	fonts[i].onclick = () => selectedClass(i);
}

