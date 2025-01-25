// Perguntas do quiz
const questions = [
  {
    question: "Qual foi o nosso primeiro encontro?",
    options: ["Centro", "Restaurante", "Praça", "Sushi"],
    correctIndex: 0,
    message:
      "Eu ainda me lembro de como esse dia foi especial, o frio na barriga ao entrar no carro e te ver pela primeira vez é inesquecível. A forma como mesmo na nossa primeira conversa parecia que nos conhecíamos a tempos, eu tenho certeza ao dizer que foi amor a primeira vista.",
  },
  {
    question: "Qual é a minha comida favorita?",
    options: ["Torta de frango", "Hambúrguer", "Pizza", "Macarronada"],
    correctIndex: 0,
    message:
      "Para mim é realmente especial comer uma torta de frango porque é algo que as minhas avós sempre fizeram para mim e me faz lembrar elas, quero que algum dia possamos fazer uma torta de frango juntos.",
  },
  {
    question: "Qual é a nossa música?",
    options: [
      "Samba in Paris - Baco",
      "Júpiter - L7NNON",
      "Um Amor Puro - Djavan",
      "Lisboa - Ana Vitória",
    ],
    correctIndex: 2,
    message:
      "Não tem como pensar em você e não lembrar da nossa música, ainda me recordo de quando dissemos que tínhamos que ter uma música mas nunca encontrávamos e então, como num estalar de dedos, vimos como essa música representa o que sentimos e o quanto ela nos faz lembrar um do outro, mesmo todas as músicas de amor me lembrando você",
  },
  {
    question: "Qual foi o primeiro presente que você me deu?",
    options: ["Colar", "Brinco", "Anel", "Pulseira"],
    correctIndex: 3,
    message:
      "Ainda não acredito que você me deu a pulseira que não tinha nem usado direito, significou muito para mim e é um dos meus presentes favoritos até hoje, ainda não estou acostumado a receber todos os presentes e ver toda a dedicação que tem para me fazer feliz.",
  },
  {
    question: "Qual apelido carinhoso eu mais uso para te chamar?",
    options: ["Princesa", "Aninha", "Amor", "Todas as Alternativas"],
    correctIndex: 3,
    message:
      "Minha gatinha, Meu bem, meu tudo, minha vida, acho que se eu fosse colocar todas as opções possíveis eu teria que fazer um quiz só para isso, eu te amo muito muito muito.",
  },
  {
    question: "Se tivéssemos um animal de estimação, qual seria?",
    options: ["Cachorro", "Gato", "Calopsita", "Coelho"],
    correctIndex: 1,
    message:
      "Ainda teremos um de cada cor para fazer parte da nossa família, mal posso esperar para adotar nosso primeiro gatinho, que vai ser só uma de tantas histórias felizes que ainda vamos viver juntos.",
  },
];

// Variáveis de controle
let currentQuestionIndex = 0;

// Elementos da página
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");
const progressBar = document.getElementById("progress-bar");

// Exibe a pergunta atual
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Limpa opções anteriores
  optionsElement.innerHTML = "";

  // Cria botões para cada opção
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.onclick = () => checkAnswer(index);
    optionsElement.appendChild(button);
  });

  // Atualiza a barra de progresso
  const progress = ((currentQuestionIndex / (questions.length - 1)) * 100).toFixed(2);
  progressBar.style.width = `${progress}%`;
  progressBar.textContent = `${progress}%`;
}

// Verifica se a resposta está correta
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctIndex) {
    messageText.textContent = currentQuestion.message;
  } else {
    messageText.textContent = "Errar é humano, mas eu ainda te amo (KKKKKKKKKKKKKKK achei essa genial)";
  }

  // Mostra a mensagem
  messageBox.classList.remove("hidden");
}

// Avança para a próxima pergunta
function nextQuestion() {
  messageBox.classList.add("hidden");
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    progressBar.style.width = "100%";
    questionElement.textContent =
      "Você terminou o quiz! E o melhor prêmio é... meu amor incondicional ❤️";
    optionsElement.innerHTML = "";
    messageBox.classList.add("hidden");
    showConfetti();
  }
}

// Função para exibir confetes
function showConfetti() {
  const count = 200;
  const defaults = { origin: { y: 0.6 } };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

// Inicializa o quiz
showQuestion();