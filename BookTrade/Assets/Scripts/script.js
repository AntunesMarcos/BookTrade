const FocoInput = document.getElementById('name');

window.onload = Onload;

let index = 0;
const images = ['/Assets/Img/banner10.png', '/Assets/Img/banner11.png', '/Assets/Img/banner12.png', '/Assets/Img/banner13.png'];
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
            lis[i].addEventListener('click', function () {
                filterWithGenre(lis[i].textContent);
            });
        }
    });

    const verificaçao = document.getElementById('add-livro');
    verificaçao.addEventListener('click', () => {
        if (localStorage.getItem("token") == null) {
            alert("Você precisa estar logado para adicionar um livro!");
            window.location.assign("/View/login.html");
        } else {
            window.location.href = "/View/cadastroLivro.html";
        }
    });

    if (localStorage.getItem("token") == null) {
        document.getElementById("boxLogin").innerHTML += ("<a  id='a-criar-conta' href='/View/login.html'><p id='criar-conta'>Criar conta</p></a>" + "<a  id='a-criar-conta' href='/View/login.html'><img src='/Assets/Img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>");
    } else {
        let user = JSON.parse(localStorage.getItem("users"))[0];
        let nome = user.nome;

        document.getElementById("boxLogin").innerHTML += ("<p id='criar-conta'>Olá, " + nome + "</p>" + "<a href='/View/Perfil-do-Usuario.html'><img src='/Assets/Img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>");

        var imagemPerfil = document.getElementById('icone-usuario');
        var dataURL = localStorage.getItem('imagemPerfil');

        if (dataURL) {
            imagemPerfil.src = dataURL;
            imagemPerfil.style.width = '70px';
            imagemPerfil.style.height = '70px';
            imagemPerfil.style.borderRadius = '50%';
            imagemPerfil.style.objectFit = 'cover';
        } else {
            imagemPerfil.src = '/Assets/Img/User-Icon.png';
        }
    }

    FocoInput.addEventListener('input', () => {
    const nome = FocoInput.value;
    filterWithGenre(nome, nome, nome);
});

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
}

document.getElementById('gen').addEventListener('click', () => {
    document.getElementById('books-list').innerHTML = '';
    getBooks();
});

async function fetchGenres() {
    let genres = [];
    try {
        const response = await fetch('/Db/localstorage.json');
        const data = await response.json();

        genres = data.livros.map(livro => livro.genero);

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
    const local = JSON.parse(localStorage.getItem('livros'));
    if (local) {
        try {
            const livros = local;
            genres = livros.map(livro => livro.genero);
        }catch (error) {
            console.error('Erro:', error);
        }
            genres.forEach(genre => {
                const genreElement = document.createElement('li');
                genreElement.value = genre;
                genreElement.textContent = genre;
                document.getElementById('genres-list').appendChild(genreElement);
    });
    }

    

}

function filterWithGenre(genre, autor, titulo) {
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const info = card.querySelector('.info');
        const tituloElement = info.querySelector('.titulo');
        const autorElement = info.querySelector('.autor');
        const genreElement = info.querySelector('.genre');


        if (genreElement.textContent.includes(genre) || autorElement.textContent.includes(autor) || tituloElement.textContent.includes(titulo)) {
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
    img.src = book.img || book.imagem;

    const info = document.createElement('div');
    info.classList.add('info');

    const title = document.createElement('h2');
    title.classList.add('titulo');
    title.textContent = book.titulo;

    const publicationDate = document.createElement('p');
    publicationDate.textContent = `Data de Publicação: ${book.data_publicacao || formatarData(book.data)}`;

    const author = document.createElement('p');
    author.classList.add('autor');
    author.textContent = `Autor: ${book.autor || 'Autor não definido'}`;

    const genre = document.createElement('p');
    genre.classList.add('genre');
    genre.textContent = `Gênero: ${book.genero}`;

    const button = document.createElement('button');
    button.id = 'ver-mais';
    button.textContent = 'Ver mais';
    button.addEventListener('click', () => {
        localStorage.setItem('livroAtual', book.id);
        localStorage.setItem('origemClique', 'home');
        window.location.href = '/View/detalhesLivro.html';
    });

    info.appendChild(title);
    info.appendChild(publicationDate);
    info.appendChild(author);
    info.appendChild(genre);
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(button);

    return card;
}

function formatarData(data) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', options);
    return dataFormatada;
}

async function getBooks() {
    fetch('/Db/localstorage.json')
        .then(response => response.json())
        .then(data => {
            const books = data.livros;

            books.forEach(book => {
                const bookElement = generateCardBook(book);
                document.getElementById('books-list').appendChild(bookElement);
            });
        })
        .catch(error => console.error('Erro:', error));

    const books = JSON.parse(localStorage.getItem('livros'));

    if (books) {
        books.forEach(book => {
            const bookElement = generateCardBook(book);
            document.getElementById('books-list').appendChild(bookElement);
        });
    }
}


