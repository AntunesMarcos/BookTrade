const FocoInput = document.getElementById('name');

window.onload = Onload;

let index = 0;
const images = ['./img/banner10.png', './img/banner11.png','./img/banner12.png', './img/banner13.png'];
const img = document.getElementById('imagens');


function nextImage() {
    img.style.opacity = 0;
    img.classList.add('fade');

    setTimeout(() => {
        img.src = images[index];
        index = (index + 1) % images.length;
        img.style.opacity = 1;
    }, 500);
}
    
nextImage();
setInterval(nextImage, 5000); 

function Onload() {
    getBooks();
    fetchGenres().then(() => {
        const listGenres = document.getElementById('genres-list');
        const lis = listGenres.getElementsByTagName('li');

        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', function() {
                filterWithGenre(lis[i].textContent);
            });
        }
    });

    const verificaçao = document.getElementById('add-livro');
    verificaçao.addEventListener('click', () => { 
        if (localStorage.getItem("token") == null) {
            alert("Você precisa estar logado para adicionar um livro!");
            window.location.assign("../../Enzo TIAW/HTML/login.html");
        } else {
            window.location.href = "../../Rafael TIAW/views/cadastroLivro.html";
        }
    });

    if (localStorage.getItem("token") == null) {
        document.getElementById("boxLogin").innerHTML += ("<a  id='a-criar-conta' href='../Enzo TIAW/HTML/login.html'><p id='criar-conta'>Criar conta</p></a>"+ "<img src='../Marcos TIAW/img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>");
    } else {
        let user = JSON.parse(localStorage.getItem("users"))[0];
        let nome = user.nome;

        document.getElementById("boxLogin").innerHTML += ("<p id='criar-conta'>Olá, " + nome + "</p>" + "<a href='../../Diogo TIAW/Html/Perfil-do-Usuario.html'><img src='../Marcos TIAW/img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>");

        var imagemPerfil = document.getElementById('icone-usuario');
        var dataURL = localStorage.getItem('imagemPerfil');

        if (dataURL) {
            imagemPerfil.src = dataURL;
            imagemPerfil.style.width = '70px';
            imagemPerfil.style.height = '70px';
            imagemPerfil.style.borderRadius = '50%';
            imagemPerfil.style.objectFit = 'cover';
        } else {
            imagemPerfil.src = '../Marcos TIAW/img/User-Icon.png';
        }
    }
}

document.getElementById('gen').addEventListener('click', () => {
    document.getElementById('books-list').innerHTML = '';
    getBooks();
});


async function fetchGenres() {
    try {
        const response = await fetch('./localstorage.json'); 
        const data = await response.json();

        const genres = data.livros.map(livro => livro.genero);

        for (let i = 0; i < genres.length; i++) {
            const genre = genres[i];
            const genreElement = document.createElement('li');
            genreElement.value = genre;
            genreElement.textContent = genre;
            document.getElementById('genres-list').appendChild(genreElement); 
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

function filterWithGenre(genre) {
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const info = card.querySelector('#info');
        const genreElement = info.querySelector('#genre');

        if (genreElement.textContent.includes(genre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}

function generateCardBook(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = book.id + book.titulo;

    const img = document.createElement('img');
    img.src = book.img;

    const info = document.createElement('div');
    info.id = "info";
    
    const title = document.createElement('h2');
    title.textContent = book.titulo;

    const publicationDate = document.createElement('p');
    publicationDate.textContent = `Data de Publicação: ${book.data_publicacao}`;

    const author = document.createElement('p');
    author.textContent = `Autor: ${book.autor}`;

    const genre = document.createElement('p');
    genre.id = "genre";
    genre.textContent = `Gênero: ${book.genero}`;

    info.appendChild(title);
    info.appendChild(publicationDate);
    info.appendChild(author);
    info.appendChild(genre);
    card.appendChild(img);
    card.appendChild(info);

    return card;
}


async function getBooks() {
    fetch('./localstorage.json')
    .then(response => response.json())
    .then(data => {
        const books = data.livros;

        books.forEach(book => {
            const bookElement = generateCardBook(book);
            document.getElementById('books-list').appendChild(bookElement);
        });
    })
    .catch(error => console.error('Erro:', error));
}

    FocoInput.addEventListener('focus', () => {
    if (FocoInput.value === 'Buscar') {
        FocoInput.value = '';
    }
});

FocoInput.addEventListener('blur', () => {
    if (FocoInput.value === '') {
        FocoInput.value = 'Buscar';
    }
});
function toggleSearch() {
    const FocoInput = document.querySelector('#name');
    FocoInput.addEventListener('focus', () => {
    if (FocoInput.value === 'Buscar') {
        FocoInput.value = '';
    }
});

FocoInput.addEventListener('blur', () => {
    if (FocoInput.value === '') {
        FocoInput.value = 'Buscar';
    }
});
    // Obtenha o elemento de entrada de texto para a barra de pesquisa
    var searchInput = document.getElementById('pesquisa');

    // Obtenha o elemento da barra de título do site
    var siteTitle = document.getElementById('nome-site');

    // Alterne a classe para mostrar ou ocultar a barra de pesquisa
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'inline-block';
        siteTitle.style.display = 'none'; // Oculta o título do site
    } else {
        searchInput.style.display = 'none';
        siteTitle.style.display = 'block'; // Mostra o título do site
    }


}

