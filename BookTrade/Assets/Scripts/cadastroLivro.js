$(document).ready(async function () {
    let dados = JSON.parse(localStorage.getItem('livros')) || [];
    let database = await fetch('/Db/localstorage.json').then(response => response.json()).then(data => data);

    $('#imagem').change(function () {
        let ler = new FileReader();
        ler.onload = function (e) {
            $('#imagem').data('base64', e.target.result);
            $('#imagem-label').css('background-image', 'url(' + e.target.result + ')');
        }
        ler.readAsDataURL(this.files[0]);
    });

    $('#btnCadastro button').click(function () {
        let titulo = $('#titulo-livro'.trim()).val();
        let cidade = $('#cidade'.trim()).val();
        let estado = $('#estado'.trim()).val();
        let genero = $('#genero'.trim()).val();
        let autor = $('#autor'.trim()).val();
        let data = $('#data').val();
        let descricao = $('#descricao'.trim()).val();
        let sinopse = $('#sinopse'.trim()).val();
        let imagem = $('#imagem').data('base64');

        

        function isRepeatedSequence(input) {
            var padraoRepeticao = /^([a-zA-Z0-9])\1*$/;
            return padraoRepeticao.test(input);
        }

        if (!titulo || !cidade || !estado || !genero || !autor || !data || !descricao || !sinopse || !imagem) {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        // Verificar se algum dos campos tem sequência de caracteres repetidos
        if (isRepeatedSequence(titulo) || isRepeatedSequence(cidade) || isRepeatedSequence(estado) || isRepeatedSequence(genero) || isRepeatedSequence(autor) || isRepeatedSequence(data) || isRepeatedSequence(descricao) || isRepeatedSequence(sinopse)) {
            alert('Erro ao enviar formulário, tente novamente');
            return;
        }
        let novoId = database.livros.length + dados.length + 1;
        let livro = { id: novoId, titulo, cidade, data, estado, autor, genero, descricao, sinopse, imagem };

        dados.push(livro);
        localStorage.setItem('livros', JSON.stringify(dados));
        alert('Anúncio Salvo!');
        window.location.href = 'displayLivros.html';
    });
});
