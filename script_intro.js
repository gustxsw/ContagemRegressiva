// Dados do tempo correspondente a 9 meses
const timeData = [
  "9 meses",
  "39 semanas",
  "273 dias",
  "6.552 horas",
  "393.120 minutos",
  "23.587.200 segundos",
];

const displayContainer = document.getElementById("display-container");
const finalMessage = document.getElementById("final-message");

function displayTimeData() {
  let index = 0;

  // Mostra o próximo número com animação
  function showNextNumber() {
    if (index < timeData.length) {
      // Adiciona a classe de saída
      displayContainer.classList.add("fade-out");

      setTimeout(() => {
        // Após a animação de saída, troca o texto
        displayContainer.textContent = timeData[index];
        index++;

        // Remove a classe de saída e adiciona a de entrada
        displayContainer.classList.remove("fade-out");
        displayContainer.classList.add("fade-in");

        // Remove a classe de entrada após a animação
        setTimeout(() => {
          displayContainer.classList.remove("fade-in");
        }, 500);
      }, 500); // Tempo da animação de saída
    } else {
      // Exibe a mensagem final quando todos os números forem exibidos
      setTimeout(() => {
        displayContainer.textContent = "";
        finalMessage.classList.remove("hidden");

        // Redireciona após 4 segundos
        setTimeout(() => {
          window.location.href = "presentes.html";
        }, 4000);
      }, 1000);
    }
  }

  // Intervalo para exibir os números
  const interval = setInterval(() => {
    showNextNumber();

    // Quando todos os números forem exibidos, para o intervalo
    if (index === timeData.length) {
      clearInterval(interval);
    }
  }, 2000); // Tempo entre números
}

// Inicia a exibição dos dados
displayTimeData();