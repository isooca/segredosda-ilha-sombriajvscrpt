const botoesAvancar = document.querySelectorAll('.btn-proximo');

botoesAvancar.forEach(botao => {
    botao.addEventListener('click', () => {
        const passoAtual = document.querySelector('.ativo');
        const idProximo = 'passo-' + botao.getAttribute('data-proximo');

        passoAtual.classList.remove('ativo');
        document.getElementById(idProximo).classList.add('ativo');
    });
});
