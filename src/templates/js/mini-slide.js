const arrows = document.querySelectorAll('.arrow');
const itens = document.querySelectorAll('.item-qualif');
const numItens = itens.length;
let currentItem = 0;

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const isEsq = arrow.classList.contains("previous");

        if (isEsq) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= numItens) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = numItens - 1;
        }

        itens.forEach(item => item.classList.remove('current-item'));

        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: 'smooth',
            block: 'nearest'
        })
        console.log('arrow clicked', currentItem);

    })
})
