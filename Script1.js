// Seleciona os botões de filtro e os cards
const filtros = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');

// Função para mostrar produtos de acordo com a categoria
filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');

        const categoria = botao.getAttribute('data-categoria');

        cards.forEach(card => {
            // adiciona uma transição suave
            card.style.transition = "opacity 0.5s ease, transform 0.4s ease";

            if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
                // mostra com efeito fade-in e leve subida
                card.classList.remove('oculto');
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            } else {
                // esconde com fade-out
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                setTimeout(() => card.classList.add('oculto'), 400);
            }
        });
    });
});

// Exibir por padrão a categoria Emagrecimento
document.querySelector('.filtro.ativo').click();
