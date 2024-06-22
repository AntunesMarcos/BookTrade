$(document).ready(function () {
    let dados = JSON.parse(localStorage.getItem('livros')) || [];
    let idDoLivroAtual = localStorage.getItem('livroAtual');

    if (idDoLivroAtual) {
        let livroAtual = dados.find(livro => livro.id == idDoLivroAtual);
        if (livroAtual) {
            $('#titulo-livro').val(livroAtual.titulo);
            $('#cidade').val(livroAtual.cidade);
            $('#estado').val(livroAtual.estado);
            $('#genero').val(livroAtual.genero);
            $('#autor').val(livroAtual.autor);
            $('#data').val(livroAtual.data);
            $('#descricao').val(livroAtual.descricao);
            $('#sinopse').val(livroAtual.sinopse);
            $('#imagem').data('base64', livroAtual.imagem);
            $('#imagem-label').css('background-image', 'url(' + livroAtual.imagem + ')');
        }
    }

    $('#imagem').change(function () {
        let ler = new FileReader();
        ler.onload = function (e) {
            $('#imagem').data('base64', e.target.result);
            $('#imagem-label').css('background-image', 'url(' + e.target.result + ')');
        }
        ler.readAsDataURL(this.files[0]);
    });

    $('#btnAtualizar').click(function () {
        if (idDoLivroAtual) {
            let livroAtual = dados.find(livro => livro.id == idDoLivroAtual);
            if (livroAtual) {
                livroAtual.titulo = $('#titulo-livro').val();
                livroAtual.cidade = $('#cidade').val();
                livroAtual.estado = $('#estado').val();
                livroAtual.genero = $('#genero').val();
                livroAtual.autor = $('#autor').val();
                livroAtual.data = $('#data').val();
                livroAtual.descricao = $('#descricao').val();
                livroAtual.sinopse = $('#sinopse').val();
                livroAtual.imagem = $('#imagem').data('base64') || livroAtual.imagem;

                localStorage.setItem('livros', JSON.stringify(dados));
                alert('Livro atualizado com sucesso!');
                window.location.href = 'displayLivros.html';
            }
        }
    });
});
