const login = document.querySelector(".login");
const loginForm = login.querySelector(".login__form");
const loginInput = login.querySelector(".login__input");

const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat__form");
const chatInput = chat.querySelector(".chat__input");
const chatMessages = chat.querySelector(".chat__messages");

const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
];

const user = { id: "", name: "", color: "" };

let websocket;

const createMessageSelfElement = (content) => {
    const div = document.createElement("div");
    div.classList.add("message--self-container");

    const img = document.createElement("img");
        var dataURL = localStorage.getItem('imagemPerfil');

    if (dataURL) {
            img.alt = 'icone de usuario';
            img.style.width = '30px';
            img.style.height = '30px';
            img.style.borderRadius = '50%';
            img.style.marginRight = '10px';
            img.src = dataURL;
            img.style.objectFit = 'cover';
        } else {
        img.src = '/Assets/Img/User-Icon.png';
        img.alt = 'icone de usuario';
        img.style.width = '30px';
        img.style.height = '30px';
        img.style.borderRadius = '50%';
        img.style.marginRight = '10px';
        img.style.objectFit = 'cover';
        }
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message--self");

    const spanSender = document.createElement("span");
    spanSender.classList.add("message--name");
    spanSender.innerHTML = user.name;
    spanSender.style.color = "gold";

    const spanContent = document.createElement("div");
    spanContent.classList.add("message--content");
    spanContent.style.textAlign = 'left';

    const messageContent = document.createElement("span");
    messageContent.innerHTML = content;

    spanContent.appendChild(messageContent);
    messageDiv.appendChild(spanSender);
    messageDiv.appendChild(spanContent);

    div.appendChild(messageDiv);
    div.appendChild(img);

    return div;
};

const createMessageOtherElement = (content, sender, senderColor) => {
    const div = document.createElement("div");
    div.classList.add("message--other-container");

    const img = document.createElement("img");
        var dataURL = localStorage.getItem('imagemPerfil');

    if (dataURL) {
            img.alt = 'icone de usuario';
            img.style.width = '30px';
            img.style.height = '30px';
            img.style.borderRadius = '50%';
            img.style.marginRight = '10px';
            img.src = dataURL;
            img.style.objectFit = 'cover';
        } else {
        img.src = '/Assets/Img/User-Icon.png';
        img.alt = 'icone de usuario';
        img.style.width = '30px';
        img.style.height = '30px';
        img.style.borderRadius = '50%';
        img.style.marginRight = '10px';
        img.style.objectFit = 'cover';
        }
    
    

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message--other");

    const spanSender = document.createElement("span");
    spanSender.classList.add("message--name");
    spanSender.innerHTML = sender;
    spanSender.style.color = senderColor;

    const spanContent = document.createElement("div");
    spanContent.classList.add("message--content");
    spanContent.style.textAlign = 'left';

    const messageContent = document.createElement("span");
    messageContent.innerHTML = content;

    spanContent.appendChild(messageContent);
    messageDiv.appendChild(spanSender);
    messageDiv.appendChild(spanContent);

    div.appendChild(img);
    div.appendChild(messageDiv);

    return div;
};

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

const processMessage = ({ data }) => {
    const { userId, userName, userColor, content } = JSON.parse(data);

    const message = userId === user.id
        ? createMessageSelfElement(content)
        : createMessageOtherElement(content, userName, userColor);

    chatMessages.appendChild(message);
    scrollScreen();
};

const handleLogin = (event) => {
    event.preventDefault();

    user.id = crypto.randomUUID();

    const savedUser = JSON.parse(localStorage.getItem("users"));
    if (savedUser && savedUser.length > 0) {
        user.name = savedUser[0].nome;
    } else {
        user.name = "Usuario";  // Nome padrão se não houver usuário salvo
    }

    user.color = getRandomColor();

    document.querySelector(".finalizar").style.display = "flex";
    document.querySelector("p").style.display = "none";
    login.style.display = "none";
    document.querySelector("footer").style.display = "none";
    chat.style.display = "flex";

    websocket = new WebSocket("ws://localhost:8080");
    websocket.onmessage = processMessage;
};

const sendMessage = (event) => {
    event.preventDefault();

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    };

    websocket.send(JSON.stringify(message));
    chatInput.value = "";
};

loginForm.addEventListener("submit", handleLogin);
chatForm.addEventListener("submit", sendMessage);

function Onload() {
    if (localStorage.getItem("token") == null) {
        document.getElementById("boxLogin").innerHTML += (
            "<a id='a-criar-conta' href='/View/cadastrousario.html'><p id='criar-conta'>Criar conta</p></a>" +
            "<a id='a-criar-conta' href='/View/login.html'><img src='/Assets/Img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>"
        );
    } else {
        document.getElementById("boxLogin").innerHTML += (
            "<a href='/View/Perfil-do-Usuario.html'><img src='/Assets/Img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>"
        );

        var imagemPerfil = document.getElementById('icone-usuario');
        var dataURL = localStorage.getItem('imagemPerfil');

        if (dataURL) {
            imagemPerfil.src = dataURL;
            imagemPerfil.style.width = '70px';
            imagemPerfil.style.height = '70px';
            imagemPerfil.style.padding = '10px';
            imagemPerfil.style.marginRight = '30px';
            imagemPerfil.style.borderRadius = '50%';
            imagemPerfil.style.objectFit = 'cover';
        } else {
            imagemPerfil.src = '/Assets/Img/User-Icon.png';
        }
    }
}
window.onload = Onload;

const finalizar = document.querySelector(".finalizar");

finalizar.addEventListener("click", () => {
    window.location.href = "/View/Avaliaçao.html";

    let livros = JSON.parse(localStorage.getItem("livros"));
    let livroAtualId = parseInt(localStorage.getItem("livroAtual"), 10);

    if (livroAtualId > 14) {
        livros = livros.filter(livro => livro.id !== livroAtualId);
        localStorage.setItem("livros", JSON.stringify(livros));
    }
});
