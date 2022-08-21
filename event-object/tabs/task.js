const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));



function clearAll() {
	tabs.forEach( item => item.classList.remove('tab_active'));
	tabsContent.forEach(item => item.classList.remove('tab__content_active'));
}

function activeTab(idx) {
	clearAll();
	tabs[idx].classList.add('tab_active');
	tabsContent[idx].classList.add('tab__content_active');
}

for (const i in tabs) {
	tabs[i].onclick = () => activeTab(i);
}