const link = Array.from(document.querySelectorAll('.menu__link'));
const menu = link.filter(item => item.nextElementSibling !== null);


for (const item of menu) {
	item.onclick = function() {
		item.nextElementSibling.classList.toggle('menu_active');	
		return false
	};
};