// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo 

const navItems = document.querySelectorAll('#menu a[href^="#"], .menu-rodape a[href^="#"]');

navItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element){
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick (event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.target) - 70;
	scrollToPosition(to);
}

function scrollToPosition(to){
	window.scroll({
		top: to,
		behavior: "smooth",
	})
}