const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const close = Array.from(document.querySelectorAll('.modal__close'));
const success = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

for (const item of close) {
	item.onclick = function() {
	let modal = item.closest('.modal');
	if (modal.classList.contains('modal_active')) {
		modal.classList.remove('modal_active');
	};
};
};


success.onclick = function() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
};

