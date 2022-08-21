const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const valueBtn = document.querySelector('.dropdown__value');

function clickBtn() {
	list.classList.toggle('dropdown__list_active');
}

valueBtn.addEventListener('click', clickBtn);

function changeValue(idx) {
	valueBtn.textContent = items[idx].textContent;
	list.classList.remove('dropdown__list_active');
	return false;
}

items.forEach((item, idx) => item.onclick = () => changeValue(idx));
