$(document).ready(function () {
    let dados = JSON.parse(localStorage.getItem('livros')) || [];

    $('#imagem').change(function () {
        let ler = new FileReader();
        ler.onload = function (e) {
            $('#imagem').data('base64', e.target.result);
            $('#imagem-label').css('background-image', 'url(' + e.target.result + ')');
        }
        ler.readAsDataURL(this.files[0]);
    });

    $('#btnCadastro button').click(function () {
        let titulo = $('#titulo-livro').val();
        let cidade = $('#cidade').val();
        let estado = $('#estado').val();
        let descricao = $('#descricao').val();
        let sinopse = $('#sinopse').val();
        let imagem = $('#imagem').data('base64');
        
        if (!titulo || !cidade || !estado || !descricao || !sinopse || !imagem) {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        let novoId = dados.length ? dados[dados.length - 1].id + 1 : 1;
        let livro = { id: novoId, titulo, cidade, estado, descricao, sinopse, imagem };

        dados.push(livro);
        localStorage.setItem('livros', JSON.stringify(dados));
        alert('Anúncio Salvo!');
        window.location.href = 'displayLivros.html';
    });
});
