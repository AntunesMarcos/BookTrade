document.addEventListener("DOMContentLoaded", function() {
    // Verifica se a chave "perfilUsuario" já está definida no armazenamento local
    var perfilUsuario = localStorage.getItem("perfilUsuario");

    // Se não estiver definido, gera o conteúdo do perfil do usuário
    if (!perfilUsuario) {
        // Define o objeto perfilUsuario com os dados padrão
        let user = JSON.parse(localStorage.getItem("users"))[0];
        var perfilPadrao = {
            nome: user.nome,
            cpf: user.cpf,
            cidade: user.cidade,
            telefone: user.telefone,
            email: user.email,
            dataNascimento: user.data
        };

        // Converte o objeto em JSON
        var perfilUsuarioJSON = JSON.stringify(perfilPadrao);

        // Armazena os dados do perfil do usuário no localStorage
        localStorage.setItem("perfilUsuario", perfilUsuarioJSON);
    }

    // Exibe os dados do perfil do usuário na página
    exibirDadosPerfil();
});

function exibirDadosPerfil() {
    // Recuperando os dados do perfil do usuário do localStorage
    var perfilUsuarioJSON = localStorage.getItem("perfilUsuario");

    // Convertendo a string JSON de volta para um objeto JavaScript
    var perfilUsuario = JSON.parse(perfilUsuarioJSON);

    // Selecionando a área #info
    var info = document.getElementById("info");

    // Limpa a área #info para evitar duplicatas ao recarregar os dados
    info.innerHTML = "";

    // Criando elementos HTML para exibir os dados do perfil do usuário
    var nomeParagrafo = document.createElement("p");
    nomeParagrafo.className = "info-item";
    nomeParagrafo.innerHTML = "<strong>Nome:</strong> " + perfilUsuario.nome;

    var cpfParagrafo = document.createElement("p");
    cpfParagrafo.className = "info-item";
    cpfParagrafo.innerHTML = "<strong>CPF:</strong> " + perfilUsuario.cpf;

    var cidadeParagrafo = document.createElement("p");
    cidadeParagrafo.className = "info-item";
    cidadeParagrafo.innerHTML = "<strong>Cidade:</strong> " + perfilUsuario.cidade;

    var telefoneParagrafo = document.createElement("p");
    telefoneParagrafo.className = "info-item";
    telefoneParagrafo.innerHTML = "<strong>Telefone:</strong> " + perfilUsuario.telefone;

    var emailParagrafo = document.createElement("p");
    emailParagrafo.className = "info-item";
    emailParagrafo.innerHTML = "<strong>E-mail:</strong> " + perfilUsuario.email;

    var dataNascimentoParagrafo = document.createElement("p");
    dataNascimentoParagrafo.className = "info-item";
    dataNascimentoParagrafo.innerHTML = "<strong>Data de Nascimento:</strong> " + formatarDataExibicao(perfilUsuario.dataNascimento);

    // Adicionando os elementos à área #info
    info.appendChild(nomeParagrafo);
    info.appendChild(cpfParagrafo);
    info.appendChild(cidadeParagrafo);
    info.appendChild(telefoneParagrafo);
    info.appendChild(emailParagrafo);
    info.appendChild(dataNascimentoParagrafo);
}
//Formatar a data
function formatarDataExibicao(data) {
    // Supondo que data seja uma string no formato "yyyy-mm-dd"
    var partesData = data.split("-");
    return partesData[2] + "/" + partesData[1] + "/" + partesData[0]; // Retorna "dd/mm/yyyy"
}
// Adicionando um event listener para o botão "Excluir Dados"
var excluirButton = document.getElementById("excluir");
excluirButton.addEventListener("click", function() {
    // Exibir caixa de diálogo de confirmação
    var confirmacao = confirm("Tem certeza de que deseja excluir sua conta?");
    if (confirmacao == true) {
        // Limpar os dados do localStorage
        localStorage.removeItem("perfilUsuario");
        localStorage.removeItem("imagemPerfil");
        localStorage.removeItem("users");
        localStorage.removeItem("token");
        localStorage.removeItem("livros");

        // Exibir mensagem de confirmação
        alert("Dados do perfil excluídos com sucesso!");
        // Redirecionar para a página inicial
        window.location.href = "../index.html";
    }
});

// Carregar imagem do localStorage ao carregar a página
window.onload = function() {
    var imagemPerfil = document.getElementById('imagemPerfil');
    var icon = document.getElementById('icone-usuario');
    var dataURL = localStorage.getItem('imagemPerfil');

    if (dataURL) {
        imagemPerfil.src = dataURL;
        icon.src = dataURL;
    } else {
        // Se não houver imagem de perfil, use a imagem padrão
        imagemPerfil.src = "/Assets/Img/User-Icon2.png";
        icon.src = "/Assets/Img/User-Icon.png";
    }
};
