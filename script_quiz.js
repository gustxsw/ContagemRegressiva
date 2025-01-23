// Perguntas do quiz
const questions = [
    {
      question: "Qual foi o nosso primeiro encontro?",
      options: ["Centro", "Restaurante", "Praça", "Sushi"],
      correctIndex: 0,
      message: "Texto 1"
    },
    {
      question: "Qual é a minha comida favorita?",
      options: ["Torta de frngo", "Hambúrguer", "Pizza", "Macarronada"],
      correctIndex: 0,
      message: "Texto 2"
    },
    {
      question: "Qual é a nossa música?",
      options: ["Samba in Paris - Baco", "Júpiter - L7NNON", "Um Amor Puro - Djavan", "Lisboa - Ana Vitória"],
      correctIndex: 2,
      message: "Texto 3"
    },
    {
        question: "Qual foi o primeiro presente que você me deu?",
        options: ["Colar", "Brinco", "Anel", "Pulseira"],
        correctIndex: 3,
        message: "Texto 4"
    },
    {
        question: "Qual apelido carinhoso eu mais uso para te chamar?",
        options: ["Princesa", "Aninha", "Amor", "Todas as Alternativas"],
        correctIndex: 3,
        message: "Texto 5"
    },
    {
        question: "Se tivéssemos um animal de estimação, qual seria?",
        options:["Cachorro", "Gato", "Calopsita", "Coelho"],
        correctIndex: 1,
        message: "Texto 5"
    }
  ];
  
  // Variáveis de controle
  let currentQuestionIndex = 0;
  
  // Elementos da página
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const messageBox = document.getElementById("message-box");
  const messageText = document.getElementById("message-text");
  
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
  }
  
  // Verifica se a resposta está correta
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedIndex === currentQuestion.correctIndex) {
      messageText.textContent = currentQuestion.message;
    } else {
      messageText.textContent = "Ops! Não foi dessa vez. Tente novamente! 💔";
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
      questionElement.textContent = "Você completou o quiz! ❤️";
      optionsElement.innerHTML = "";
      messageBox.classList.add("hidden");
    }
  }
  
  // Inicializa o quiz
  showQuestion();  