function iniciaModal(modalID) {
	const modal = document.getElementById(modalID);
	if (modal) {
	modal.classList.add('exibir');
	modal.addEventListener('click', (e) => {
		if(e.target.id == modalID || e.target.className == 'fechar-modal'){
			modal.classList.remove('exibir');
		}
	})
}
}

const projeto = document.querySelectorAll('.cont-portfolio');
projeto.forEach(modal => {modal.addEventListener('click', () => iniciaModal('modal-projeto'))});