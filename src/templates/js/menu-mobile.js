/*Atribui o id btn-moblie à constante btnMobile*/
const btnMobile = document.getElementById('btn-mobile');

/*A função ativa e desativa a classe active */
function toggleMenu(){
  if (event.type === 'touchstart') event.preventDefault()
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  const active = menu.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

/*Atribui o evento 'click' para ser usado na função toggleMenu*/
btnMobile.addEventListener('click', toggleMenu);

btnMobile.addEventListener('touchstart', toggleMenu);