
document.addEventListener("DOMContentLoaded", function() {
    // Recuperando os dados do perfil do usuário do localStorage
    var perfilUsuarioJSON = localStorage.getItem("perfilUsuario");

    // Convertendo a string JSON de volta para um objeto JavaScript
    var perfilUsuario = JSON.parse(perfilUsuarioJSON);

    // Selecionando os input da página de alteração
    var nomeInput = document.getElementById("nome");
    var cpfInput = document.getElementById("CPF");
    var cidadeInput = document.getElementById("cidade");
    var telefoneInput = document.getElementById("telefone");
    var emailInput = document.getElementById("email");
    var dataInput = document.getElementById("data");

    // Preencher os input com os dados do perfil do usuário
    nomeInput.value = perfilUsuario.nome;
    cpfInput.value = perfilUsuario.cpf;
    cidadeInput.value = perfilUsuario.cidade;
    telefoneInput.value = perfilUsuario.telefone;
    emailInput.value = perfilUsuario.email;
    dataInput.value = perfilUsuario.dataNascimento;

    // Adicionando um event listener para o botão "Salvar"
    var salvarButton = document.getElementById("salvar");
    salvarButton.addEventListener("click", function() {
        // Atualizar dados do perfil do usuário com os dados do input
        perfilUsuario.nome = nomeInput.value;
        perfilUsuario.cpf = cpfInput.value;
        perfilUsuario.cidade = cidadeInput.value;
        perfilUsuario.telefone = telefoneInput.value;
        perfilUsuario.email = emailInput.value;
        perfilUsuario.dataNascimento = dataInput.value;

        // Converter o objeto perfilUsuario de volta para JSON
        var perfilUsuarioJSON = JSON.stringify(perfilUsuario);

        // Atualizar os dados do perfil do usuário no localStorage
        localStorage.setItem("perfilUsuario", perfilUsuarioJSON);

        // Exibir mensagem de confirmação
        alert("Dados do perfil atualizados com sucesso!");
        window.location.href = "Perfil-do-Usuario.html";

    });
    
});
