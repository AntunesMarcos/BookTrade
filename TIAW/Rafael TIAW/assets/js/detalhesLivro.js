$(document).ready(function () {
    let dados = JSON.parse(localStorage.getItem('livros')) || [];
    let idDoLivroAtual = localStorage.getItem('livroAtual');
    
    if (idDoLivroAtual) {
        let livroAtual = dados.find(livro => livro.id == idDoLivroAtual);
        if (livroAtual) {
            $('#titulo').text(livroAtual.titulo);
            $('#Cidade').text(livroAtual.cidade);
            $('#Estado').text(livroAtual.estado);
            $('#Descrição').text(livroAtual.descricao);
            $('#Sinopse').text(livroAtual.sinopse);
            $('#Imagem-capa').attr('src', livroAtual.imagem);
        }
    }
});
