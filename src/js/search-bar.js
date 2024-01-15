function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const searchBar = document.getElementById('search-bar');
const listaItens = document.querySelectorAll('.listagem-conteudo .cartao-conteudo');
const mensagemResultado = document.getElementById('mensagem-resultado');

searchBar.addEventListener('input', function() {
    const busca = removerAcentos(this.value.toLowerCase());
    let resultadosEncontrados = false;

    listaItens.forEach(item => {
        const titulo = removerAcentos(item.getAttribute('data-title').toLowerCase());
        const itemVisivel = titulo.includes(busca);
        item.style.display = itemVisivel ? 'block' : 'none';
        
        if (itemVisivel) {
            resultadosEncontrados = true;
        }
    });

    mensagemResultado.style.display = resultadosEncontrados ? 'none' : 'block';
});
