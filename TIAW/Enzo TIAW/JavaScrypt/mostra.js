  // Recupera os dados da lista de usuários do localStorage
  const usersString = localStorage.getItem('users');

  // Verifica se há dados no localStorage
  if (usersString) {
      // Converte os dados de volta para um array de objetos JavaScript
      const users = JSON.parse(usersString);
      const tabela = document.getElementById('tabela-dados').getElementsByTagName('tbody')[0];

      // Itera sobre cada usuário na lista e adiciona uma nova linha à tabela
      users.forEach((usuario) => {
          const novaLinha = tabela.insertRow();
          const colunaNome = novaLinha.insertCell(0);
          const colunaCpf = novaLinha.insertCell(1);
          const colunaEmail = novaLinha.insertCell(2);
          const colunaIdade = novaLinha.insertCell(3);
          const colunaCidade = novaLinha.insertCell(4);
          const colunaTelefone = novaLinha.insertCell(5);

          colunaNome.textContent = usuario.nome;
          colunaCpf.textContent = usuario.cpf;
          colunaEmail.textContent = usuario.email;
          colunaIdade.textContent = usuario.idade;
          colunaCidade.textContent = usuario.cidade;
          colunaTelefone.textContent = usuario.telefone;
      });
  } else {
      // Se não houver dados, exibe uma mensagem
      const tabela = document.getElementById('tabela-dados').getElementsByTagName('tbody')[0];
      const novaLinha = tabela.insertRow();
      const colunaMensagem = novaLinha.insertCell(0);
      colunaMensagem.colSpan = 3;
      colunaMensagem.textContent = 'Não há dados de usuários para exibir.';
  }