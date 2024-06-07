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
    nomeParagrafo.textContent = "Nome: " + perfilUsuario.nome;

    var cpfParagrafo = document.createElement("p");
    cpfParagrafo.textContent = "CPF: " + perfilUsuario.cpf;

    var cidadeParagrafo = document.createElement("p");
    cidadeParagrafo.textContent = "Cidade: " + perfilUsuario.cidade;

    var telefoneParagrafo = document.createElement("p");
    telefoneParagrafo.textContent = "Telefone: " + perfilUsuario.telefone;

    var emailParagrafo = document.createElement("p");
    emailParagrafo.textContent = "E-mail: " + perfilUsuario.email;

    var dataNascimentoParagrafo = document.createElement("p");
    dataNascimentoParagrafo.textContent = "Data de Nascimento: " + perfilUsuario.dataNascimento;

    // Adicionando os elementos à área #info
    info.appendChild(nomeParagrafo);
    info.appendChild(cpfParagrafo);
    info.appendChild(cidadeParagrafo);
    info.appendChild(telefoneParagrafo);
    info.appendChild(emailParagrafo);
    info.appendChild(dataNascimentoParagrafo);
}

// Adicionando um event listener para o botão "Excluir Dados"
var excluirButton = document.getElementById("excluir");
excluirButton.addEventListener("click", function() {
    // Limpar os dados do localStorage
    localStorage.removeItem("perfilUsuario");
    localStorage.removeItem("imagemPerfil");
    localStorage.removeItem("users");
    localStorage.removeItem("token");

    // Exibir mensagem de confirmação
    alert("Dados do perfil excluídos com sucesso!");
    // Redirecionar para a página inicial
    window.location.href = "../../Marcos TIAW/index.html";
});
