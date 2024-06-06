    // Função para verificar se um usuário está cadastrado no localStorage
    function verificarCredenciais(email, senha) {
        // Recupera os dados do localStorage
        const usersString = localStorage.getItem('users');
    
        // Verifica se há dados no localStorage
        if (usersString) {
            // Converte os dados de volta para um array de objetos JavaScript
            const users = JSON.parse(usersString);
    
            // Procura por um usuário com o nome e senha correspondentes
            const usuarioEncontrado = users.find((usuario) => {
                return usuario.email == email && usuario.senha == senha;
            });
    
            // Retorna true se o usuário foi encontrado, senão retorna false
            return usuarioEncontrado !== undefined;
        } else {
            // Se não houver dados, retorna false
            return false;
        }
    }
    
    // Função para lidar com o envio do formulário
    function handleFormSubmit(event) {
        //event.preventDefault(); // Impede o envio padrão do formulário
    
        // Obtém os valores dos campos de nome e senha do formulário
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        
        // Verifica se as credenciais são válidas
        const credenciaisValidas = verificarCredenciais(email, senha);
        
        if (credenciaisValidas) {
        
            alert('Credenciais válidas! Usuário encontrado.');
        } else {
            alert('Credenciais inválidas! Usuário não encontrado.');
        }
    }
    
    // Adiciona um ouvinte de evento para o envio do formulário
    const form = document.getElementById('login');
    form.addEventListener('submit', handleFormSubmit);
    