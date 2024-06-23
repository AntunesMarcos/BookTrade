$(document).ready(function () {
    // Obter dados do localStorage
    let livros = JSON.parse(localStorage.getItem('livros')) || [];
    let perfilUsuario = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users'))[0] : {};
    let imagemPerfil = localStorage.getItem('imagemPerfil') || '';
    let idDoLivroAtual = localStorage.getItem('livroAtual');
    let origemClique = localStorage.getItem('origemClique');
    let estrelas = localStorage.getItem('estrelas');

    if (livros.find(livro => livro.id == idDoLivroAtual)) {
        // Encontrar o livro atual pelo ID
        let livroAtual = livros.find(livro => livro.id == idDoLivroAtual);
            // Exibir informações do livro
            $('#titulo').text(livroAtual.titulo);
            $('#Cidade').text(livroAtual.cidade);
            $('#Estado').text(livroAtual.estado);
            $('#Descrição').text(livroAtual.descricao);
            $('#genero').text(livroAtual.genero);
            $('#Sinopse').text(livroAtual.sinopse);
            $('#Imagem-capa').attr('src', livroAtual.imagem); // Certifique-se de que o nome da propriedade da imagem está correto

            // Verificação do perfil do usuário e imagem de perfil
            if ((!perfilUsuario.nome || perfilUsuario.nome === '') || (imagemPerfil === 'null' || imagemPerfil === '')) {
                $('#nome-vendedor').text('Vendedor não identificado');
                $('#imagem-vendedor').attr('src', '/Assets/Img/User-Icon.png');
            } else {
                $('#nome-vendedor').text('Nome: ' + perfilUsuario.nome);
                $('#imagem-vendedor').attr('src', imagemPerfil);
        }
        console.log(estrelas);
        
    } else {
        fetch('/Db/localstorage.json')
            .then(response => response.json()).then(
                data => {
                    let livroAtual = data.livros.find(livro => livro.id == idDoLivroAtual); //TODO: Modificar campos
                    $('#titulo').text(livroAtual.titulo);
                    $('#Cidade').text(livroAtual.cidade_publicacao);
                    $('#Estado').text(livroAtual.estado_publicacao);
                    $('#Descrição').text(livroAtual.descricao);
                    $('#genero').text(livroAtual.genero);
                    $('#Sinopse').text(livroAtual.sinopse);
                    $('#Imagem-capa').attr('src', livroAtual.img);
                }
                
        );
        
            $('#imagem-vendedor').attr('src', '/Assets/Img/User-Icon.png');
        $('#nome-vendedor').text('Nome: Livraria Virtual');
        if (estrelas === null) {
            $('#avaliacao').text('Avaliação: 0 estrelas');
        } else {
            $('#avaliacao').text('Avaliação: ' + estrelas + ' estrelas');
        }
        
    }

    // Ajustar o link do botão "Voltar"
    if (origemClique === 'home') {
        $('#botao-voltar').attr('href', '/index.html');
    } else if (origemClique === 'displayLivros') {
        $('#botao-voltar').attr('href', 'displayLivros.html');
    }
});
