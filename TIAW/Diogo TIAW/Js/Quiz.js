const perguntas = [
  { pergunta: "Qual tipo de aventura você prefere?", opcoes: ["Mistério", "Fantasia", "Romance", "Ficção Científica"] },
  { pergunta: "O que você prefere em um livro?", opcoes: ["Suspense", "Magia", "Relacionamentos", "Tecnologia"] },
  { pergunta: "O que mais te interessa em uma história?", opcoes: ["Resolver um enigma", "Explorar um mundo novo", "Relacionamentos complicados", "Explorar o futuro"] }
];

const livrosRecomendados = {
  "Mistério": "Recomendamos 'Crepúsculo' de Stephenie Meyer!",
  "Fantasia": "Recomendamos 'Good Omens' de Neil Gaiman e Terry Pratchett!",
  "Romance": "Recomendamos 'You' de Caroline Kepnes!",
  "Ficção Científica": "Recomendamos 'O Guia do Mochileiro das Galáxias' de Douglas Adams!",
};

const containerPerguntas = document.getElementById('container-perguntas');
const containerResultado = document.getElementById('container-resultado');
const botaoEnviar = document.getElementById('botao-enviar');
let perguntaAtual = 0;
let respostasUsuario = [];

function mostrarPergunta() {
  const perguntaAtualObj = perguntas[perguntaAtual];
  const opcoesHTML = perguntaAtualObj.opcoes.map(opcao => `
      <label>
          <input type="radio" name="resposta" value="${opcao}">
          ${opcao}
      </label>
  `).join('');

  containerPerguntas.innerHTML = `
      <h3>${perguntaAtualObj.pergunta}</h3>
      <form>${opcoesHTML}</form>
  `;
}

function mostrarResultado() {
  let escolhaMaxima = respostasUsuario[0]; // Apenas a primeira escolha determina o resultado final

  // Se a escolha for "Mistério" e "Crepúsculo", altera a escolha máxima
  if (escolhaMaxima === "Mistério" && respostasUsuario.includes("Crepúsculo")) {
      escolhaMaxima = "Mistério_Crepúsculo";
  }

  containerResultado.innerHTML = `
      <h2>O livro que você gostaria é:</h2>
      <p>${livrosRecomendados[escolhaMaxima]}</p>
  `;
  containerResultado.style.display = 'block';
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

mostrarPergunta();
