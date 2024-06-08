$(document).ready(function () {
    let dados = JSON.parse(localStorage.getItem('livros')) || [];

    for (let livro of dados) {
        criarNovoElemento(livro);
    }
    removerCard();
});

function criarNovoElemento(livro) {
    let gridContainer = $('.grid-container');
    let novoCard = $('<div></div>').addClass('card').css('width', '12rem').data('id', livro.id);
    let cardBody = $('<div></div>').addClass('card-body');
    let imagem = $('<img>').addClass('card-img').attr('src', livro.imagem);
    let tituloLivro = $('<h5></h5>').addClass('card-title').text(livro.titulo);
    let detalhesLink = $('<a></a>').attr('href', 'detalhesLivro.html').addClass('btn btn-primary').text('Ver Detalhes');
    let deleteButton = $('<button></button>').addClass('deleteButton').text('Delete');
    let editButton = $('<button></button>').addClass('editButton').text('Editar');

    cardBody.append(imagem, tituloLivro, detalhesLink, deleteButton, editButton);
    novoCard.append(cardBody);
    gridContainer.append(novoCard);

    detalhesLink.click(function () {
        localStorage.setItem('livroAtual', livro.id);
    });
    editButton.click(function () {
        localStorage.setItem('livroAtual', livro.id);
        window.location.href = 'editarLivro.html';
    });
}

function removerCard() {
    $('.deleteButton').click(function () {
        let id = $(this).closest('.card').data('id');
        let dados = JSON.parse(localStorage.getItem('livros')) || [];

        dados = dados.filter(livro => livro.id !== id);
        localStorage.setItem('livros', JSON.stringify(dados));

        $(this).closest('.card').remove();
        alert('Livro deletado da lista');
    });
}
