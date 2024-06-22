const perguntas = [
  { 
    pergunta: "Qual gênero literário você mais gosta?", 
    opcoes: ["Ficção Científica", "Romance", "Mistério/Thriller", "Fantasia", "Não-ficção"] 
  },
  { 
    pergunta: "Qual tipo de personagem principal você prefere?", 
    opcoes: ["Heróis corajosos e aventureiros", "Pessoas comuns em situações extraordinárias", "Detetives ou investigadores", "Seres mágicos ou sobrenaturais", "Figuras históricas ou personagens reais"] 
  },
  { 
    pergunta: "Qual cenário você prefere para suas histórias?", 
    opcoes: ["Um futuro distópico ou futurista", "Ambientes urbanos contemporâneos", "Pequenas cidades ou locais isolados", "Mundos de fantasia com suas próprias regras", "Eventos históricos ou locais reais"] 
  }
];

const livrosRecomendados = {
  
  "Ficção Científica|Heróis corajosos e aventureiros|Um futuro distópico ou futurista": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Heróis corajosos e aventureiros|Ambientes urbanos contemporâneos": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Heróis corajosos e aventureiros|Pequenas cidades ou locais isolados": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Heróis corajosos e aventureiros|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Heróis corajosos e aventureiros|Eventos históricos ou locais reais": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Pessoas comuns em situações extraordinárias|Um futuro distópico ou futurista": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Pessoas comuns em situações extraordinárias|Ambientes urbanos contemporâneos": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Pessoas comuns em situações extraordinárias|Pequenas cidades ou locais isolados": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Pessoas comuns em situações extraordinárias|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Pessoas comuns em situações extraordinárias|Eventos históricos ou locais reais": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Detetives ou investigadores|Um futuro distópico ou futurista": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Detetives ou investigadores|Ambientes urbanos contemporâneos": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Detetives ou investigadores|Pequenas cidades ou locais isolados": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Detetives ou investigadores|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Detetives ou investigadores|Eventos históricos ou locais reais": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Seres mágicos ou sobrenaturais|Um futuro distópico ou futurista": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Seres mágicos ou sobrenaturais|Ambientes urbanos contemporâneos": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Seres mágicos ou sobrenaturais|Pequenas cidades ou locais isolados": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Seres mágicos ou sobrenaturais|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Seres mágicos ou sobrenaturais|Eventos históricos ou locais reais": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Figuras históricas ou personagens reais|Um futuro distópico ou futurista": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Figuras históricas ou personagens reais|Ambientes urbanos contemporâneos": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Figuras históricas ou personagens reais|Pequenas cidades ou locais isolados": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Figuras históricas ou personagens reais|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  "Ficção Científica|Figuras históricas ou personagens reais|Eventos históricos ou locais reais": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
  
  "Romance|Heróis corajosos e aventureiros|Ambientes urbanos contemporâneos": "Recomendamos 'Como Eu Era Antes de Você' de Jojo Moyes!",
  "Romance|Heróis corajosos e aventureiros|Pequenas cidades ou locais isolados": "Recomendamos 'Um Amor para Recordar' de Nicholas Sparks!",
  "Romance|Heróis corajosos e aventureiros|Mundos de fantasia com suas próprias regras": "Recomendamos 'Outlander' de Diana Gabaldon!",
  "Romance|Heróis corajosos e aventureiros|Eventos históricos ou locais reais": "Recomendamos 'Orgulho e Preconceito' de Jane Austen!",
  "Romance|Pessoas comuns em situações extraordinárias|Ambientes urbanos contemporâneos": "Recomendamos 'Um Dia' de David Nicholls!",
  "Romance|Pessoas comuns em situações extraordinárias|Pequenas cidades ou locais isolados": "Recomendamos 'A Última Música' de Nicholas Sparks!",
  "Romance|Pessoas comuns em situações extraordinárias|Mundos de fantasia com suas próprias regras": "Recomendamos 'A Rainha Vermelha' de Victoria Aveyard!",
  "Romance|Pessoas comuns em situações extraordinárias|Eventos históricos ou locais reais": "Recomendamos 'O Tempo Entre Costuras' de María Dueñas!",
  "Romance|Detetives ou investigadores|Ambientes urbanos contemporâneos": "Recomendamos 'Garota Exemplar' de Gillian Flynn!",
  "Romance|Detetives ou investigadores|Pequenas cidades ou locais isolados": "Recomendamos 'A Mulher na Janela' de A.J. Finn!",
  "Romance|Detetives ou investigadores|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Assassinato de Roger Ackroyd' de Agatha Christie!",
  "Romance|Detetives ou investigadores|Eventos históricos ou locais reais": "Recomendamos 'O Silêncio dos Inocentes' de Thomas Harris!",
  "Romance|Seres mágicos ou sobrenaturais|Ambientes urbanos contemporâneos": "Recomendamos 'Crepúsculo' de Stephenie Meyer!",
  "Romance|Seres mágicos ou sobrenaturais|Pequenas cidades ou locais isolados": "Recomendamos 'Cidade dos Ossos' de Cassandra Clare!",
  "Romance|Seres mágicos ou sobrenaturais|Mundos de fantasia com suas próprias regras": "Recomendamos 'Trono de Vidro' de Sarah J. Maas!",
  "Romance|Seres mágicos ou sobrenaturais|Eventos históricos ou locais reais": "Recomendamos 'A Descoberta das Bruxas' de Deborah Harkness!",
  "Romance|Figuras históricas ou personagens reais|Ambientes urbanos contemporâneos": "Recomendamos 'P.S. Eu Te Amo' de Cecelia Ahern!",
  "Romance|Figuras históricas ou personagens reais|Pequenas cidades ou locais isolados": "Recomendamos 'Querido John' de Nicholas Sparks!",
  "Romance|Figuras históricas ou personagens reais|Mundos de fantasia com suas próprias regras": "Recomendamos 'A Mão Esquerda da Escuridão' de Ursula K. Le Guin!",
  "Romance|Figuras históricas ou personagens reais|Eventos históricos ou locais reais": "Recomendamos 'Madame Bovary' de Gustave Flaubert!",
  
  // Mistério/Thriller
  "Mistério/Thriller|Heróis corajosos e aventureiros|Ambientes urbanos contemporâneos": "Recomendamos 'O Código Da Vinci' de Dan Brown!",
  "Mistério/Thriller|Heróis corajosos e aventureiros|Pequenas cidades ou locais isolados": "Recomendamos 'O Silêncio dos Inocentes' de Thomas Harris!",
  "Mistério/Thriller|Heróis corajosos e aventureiros|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Nome do Vento' de Patrick Rothfuss!",
  "Mistério/Thriller|Heróis corajosos e aventureiros|Eventos históricos ou locais reais": "Recomendamos 'Inferno' de Dan Brown!",
  "Mistério/Thriller|Pessoas comuns em situações extraordinárias|Ambientes urbanos contemporâneos": "Recomendamos 'A Garota no Trem' de Paula Hawkins!",
  "Mistério/Thriller|Pessoas comuns em situações extraordinárias|Pequenas cidades ou locais isolados": "Recomendamos 'O Cemitério' de Stephen King!",
  "Mistério/Thriller|Pessoas comuns em situações extraordinárias|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Jogo do Anjo' de Carlos Ruiz Zafón!",
  "Mistério/Thriller|Pessoas comuns em situações extraordinárias|Eventos históricos ou locais reais": "Recomendamos 'A Paciente Silenciosa' de Alex Michaelides!",
  "Mistério/Thriller|Detetives ou investigadores|Ambientes urbanos contemporâneos": "Recomendamos 'Sherlock Holmes: O Cão dos Baskervilles' de Arthur Conan Doyle!",
  "Mistério/Thriller|Detetives ou investigadores|Pequenas cidades ou locais isolados": "Recomendamos 'O Assassinato no Expresso do Oriente' de Agatha Christie!",
  "Mistério/Thriller|Detetives ou investigadores|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Nome da Rosa' de Umberto Eco!",
  "Mistério/Thriller|Detetives ou investigadores|Eventos históricos ou locais reais": "Recomendamos 'O Símbolo Perdido' de Dan Brown!",
  "Mistério/Thriller|Seres mágicos ou sobrenaturais|Ambientes urbanos contemporâneos": "Recomendamos 'A Hora do Vampiro' de Stephen King!",
  "Mistério/Thriller|Seres mágicos ou sobrenaturais|Pequenas cidades ou locais isolados": "Recomendamos 'It: A Coisa' de Stephen King!",
  "Mistério/Thriller|Seres mágicos ou sobrenaturais|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Iluminado' de Stephen King!",
  "Mistério/Thriller|Seres mágicos ou sobrenaturais|Eventos históricos ou locais reais": "Recomendamos 'Drácula' de Bram Stoker!",
  "Mistério/Thriller|Figuras históricas ou personagens reais|Ambientes urbanos contemporâneos": "Recomendamos 'Mindhunter' de John E. Douglas!",
  "Mistério/Thriller|Figuras históricas ou personagens reais|Pequenas cidades ou locais isolados": "Recomendamos 'In Cold Blood' de Truman Capote!",
  "Mistério/Thriller|Figuras históricas ou personagens reais|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Nome da Rosa' de Umberto Eco!",
  "Mistério/Thriller|Figuras históricas ou personagens reais|Eventos históricos ou locais reais": "Recomendamos 'Helter Skelter' de Vincent Bugliosi!",
  
  // Fantasia
  "Fantasia|Heróis corajosos e aventureiros|Ambientes urbanos contemporâneos": "Recomendamos 'Percy Jackson e os Olimpianos' de Rick Riordan!",
  "Fantasia|Heróis corajosos e aventureiros|Pequenas cidades ou locais isolados": "Recomendamos 'Eragon' de Christopher Paolini!",
  "Fantasia|Heróis corajosos e aventureiros|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Hobbit' de J.R.R. Tolkien!",
  "Fantasia|Heróis corajosos e aventureiros|Eventos históricos ou locais reais": "Recomendamos 'Jonathan Strange & Mr Norrell' de Susanna Clarke!",
  "Fantasia|Pessoas comuns em situações extraordinárias|Ambientes urbanos contemporâneos": "Recomendamos 'Harry Potter e a Pedra Filosofal' de J.K. Rowling!",
  "Fantasia|Pessoas comuns em situações extraordinárias|Pequenas cidades ou locais isolados": "Recomendamos 'A Menina que Roubava Livros' de Markus Zusak!",
  "Fantasia|Pessoas comuns em situações extraordinárias|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Castelo Animado' de Diana Wynne Jones!",
  "Fantasia|Pessoas comuns em situações extraordinárias|Eventos históricos ou locais reais": "Recomendamos 'O Tempo Entre Costuras' de María Dueñas!",
  "Fantasia|Detetives ou investigadores|Ambientes urbanos contemporâneos": "Recomendamos 'Good Omens' de Neil Gaiman e Terry Pratchett!",
  "Fantasia|Detetives ou investigadores|Pequenas cidades ou locais isolados": "Recomendamos 'The Dresden Files' de Jim Butcher!",
  "Fantasia|Detetives ou investigadores|Mundos de fantasia com suas próprias regras": "Recomendamos 'A Bússola de Ouro' de Philip Pullman!",
  "Fantasia|Detetives ou investigadores|Eventos históricos ou locais reais": "Recomendamos 'O Nome do Vento' de Patrick Rothfuss!",
  "Fantasia|Seres mágicos ou sobrenaturais|Ambientes urbanos contemporâneos": "Recomendamos 'Harry Potter e a Pedra Filosofal' de J.K. Rowling!",
  "Fantasia|Seres mágicos ou sobrenaturais|Pequenas cidades ou locais isolados": "Recomendamos 'Cidade dos Ossos' de Cassandra Clare!",
  "Fantasia|Seres mágicos ou sobrenaturais|Mundos de fantasia com suas próprias regras": "Recomendamos 'Trono de Vidro' de Sarah J. Maas!",
  "Fantasia|Seres mágicos ou sobrenaturais|Eventos históricos ou locais reais": "Recomendamos 'Jonathan Strange & Mr Norrell' de Susanna Clarke!",
  "Fantasia|Figuras históricas ou personagens reais|Ambientes urbanos contemporâneos": "Recomendamos 'Madame Bovary' de Gustave Flaubert!",
  "Fantasia|Figuras históricas ou personagens reais|Pequenas cidades ou locais isolados": "Recomendamos 'Eragon' de Christopher Paolini!",
  "Fantasia|Figuras históricas ou personagens reais|Mundos de fantasia com suas próprias regras": "Recomendamos 'O Hobbit' de J.R.R. Tolkien!",
  "Fantasia|Figuras históricas ou personagens reais|Eventos históricos ou locais reais": "Recomendamos 'O Tempo Entre Costuras' de María Dueñas!",
  
// Não-ficção
"Não-ficção|Heróis corajosos e aventureiros|Ambientes urbanos contemporâneos": "Recomendamos 'Freakonomics' de Steven D. Levitt e Stephen J. Dubner!",
"Não-ficção|Heróis corajosos e aventureiros|Pequenas cidades ou locais isolados": "Recomendamos 'Na Natureza Selvagem' de Jon Krakauer!",
"Não-ficção|Heróis corajosos e aventureiros|Mundos de fantasia com suas próprias regras": "Recomendamos 'Sapiens: Uma Breve História da Humanidade' de Yuval Noah Harari!",
"Não-ficção|Heróis corajosos e aventureiros|Eventos históricos ou locais reais": "Recomendamos 'O Diário de Anne Frank' de Anne Frank!",
"Não-ficção|Pessoas comuns em situações extraordinárias|Ambientes urbanos contemporâneos": "Recomendamos 'Comer, Rezar, Amar' de Elizabeth Gilbert!",
"Não-ficção|Pessoas comuns em situações extraordinárias|Pequenas cidades ou locais isolados": "Recomendamos 'O Ano do Pensamento Mágico' de Joan Didion!",
"Não-ficção|Pessoas comuns em situações extraordinárias|Mundos de fantasia com suas próprias regras": "Recomendamos 'Sapiens: Uma Breve História da Humanidade' de Yuval Noah Harari!",
"Não-ficção|Pessoas comuns em situações extraordinárias|Eventos históricos ou locais reais": "Recomendamos 'Eu Sei Porque o Pássaro Canta na Gaiola' de Maya Angelou!",
"Não-ficção|Detetives ou investigadores|Ambientes urbanos contemporâneos": "Recomendamos 'Mindhunter' de John E. Douglas!",
"Não-ficção|Detetives ou investigadores|Pequenas cidades ou locais isolados": "Recomendamos 'Helter Skelter' de Vincent Bugliosi!",
"Não-ficção|Detetives ou investigadores|Mundos de fantasia com suas próprias regras": "Recomendamos 'Sapiens: Uma Breve História da Humanidade' de Yuval Noah Harari!",
"Não-ficção|Detetives ou investigadores|Eventos históricos ou locais reais": "Recomendamos 'A Sangue Frio' de Truman Capote!",
"Não-ficção|Seres mágicos ou sobrenaturais|Ambientes urbanos contemporâneos": "Recomendamos 'Sapiens: Uma Breve História da Humanidade' de Yuval Noah Harari!",
"Não-ficção|Seres mágicos ou sobrenaturais|Pequenas cidades ou locais isolados": "Recomendamos 'O Mundo Assombrado pelos Demônios' de Carl Sagan!",
"Não-ficção|Seres mágicos ou sobrenaturais|Mundos de fantasia com suas próprias regras": "Recomendamos 'Sapiens: Uma Breve História da Humanidade' de Yuval Noah Harari!",
"Não-ficção|Seres mágicos ou sobrenaturais|Eventos históricos ou locais reais": "Recomendamos 'Deuses Americanos' de Neil Gaiman!",
"Não-ficção|Figuras históricas ou personagens reais|Ambientes urbanos contemporâneos": "Recomendamos 'Steve Jobs' de Walter Isaacson!",
"Não-ficção|Figuras históricas ou personagens reais|Pequenas cidades ou locais isolados": "Recomendamos 'Na Natureza Selvagem' de Jon Krakauer!",
"Não-ficção|Figuras históricas ou personagens reais|Mundos de fantasia com suas próprias regras": "Recomendamos 'Sapiens: Uma Breve História da Humanidade' de Yuval Noah Harari!",
"Não-ficção|Figuras históricas ou personagens reais|Eventos históricos ou locais reais": "Recomendamos 'O Diário de Anne Frank' de Anne Frank!",
};

const containerPerguntas = document.getElementById('container-perguntas');
const containerResultado = document.getElementById('container-resultado');
const botaoEnviar = document.getElementById('botao-enviar');
const botaoRefazer = document.getElementById('botao-refazer'); // Novo botão para refazer o quiz

let perguntaAtual = 0;
let respostasUsuario = [];

function mostrarPergunta() {
  const perguntaAtualObj = perguntas[perguntaAtual];
  const opcoesHTML = perguntaAtualObj.opcoes.map(opcao => `
      <li>
          <label>
              <input type="radio" name="resposta" value="${opcao}">
              ${opcao}
          </label>
      </li>
  `).join('');

  containerPerguntas.innerHTML = `
      <h3>${perguntaAtualObj.pergunta}</h3>
      <form>
          <ul>${opcoesHTML}</ul>
      </form>
  `;
}

function mostrarResultado() {
  const escolhaConcatenada = respostasUsuario.join('|');
  const livroRecomendado = livrosRecomendados[escolhaConcatenada] || "Desculpe, não encontramos uma recomendação para suas escolhas.";

  containerResultado.innerHTML = `
      <h2>O livro que você gostaria é:</h2>
      <p>${livroRecomendado}</p>
  `;
  containerResultado.style.display = 'block';
  containerPerguntas.style.display = 'none'; // Esconde o container de perguntas após mostrar o resultado
  botaoEnviar.style.display = 'none'; // Esconde o botão de enviar após mostrar o resultado
  botaoRefazer.style.display = 'block'; // Mostra o botão de refazer após mostrar o resultado
}

function refazerQuiz() {
  perguntaAtual = 0;
  respostasUsuario = [];
  containerResultado.style.display = 'none';
  containerPerguntas.style.display = 'block';
  botaoEnviar.style.display = 'block';
  botaoRefazer.style.display = 'none'; // Esconde o botão de refazer ao reiniciar o quiz
  mostrarPergunta();
}

botaoEnviar.addEventListener('click', function(evento) {
  evento.preventDefault();
  const opcaoSelecionada = document.querySelector('input[name="resposta"]:checked');

  if (opcaoSelecionada) {
      respostasUsuario.push(opcaoSelecionada.value);
      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
          mostrarPergunta();
      } else {
          mostrarResultado();
      }
  } else {
      alert("Por favor, selecione uma opção!");
  }
});

botaoRefazer.addEventListener('click', function(evento) {
  evento.preventDefault();
  refazerQuiz();
});

mostrarPergunta();