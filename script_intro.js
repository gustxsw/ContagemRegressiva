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
  
  // Função para exibir os números sequencialmente
  function displayTimeData() {
    let index = 0;
  
    // Intervalo para trocar os números
    const interval = setInterval(() => {
      // Substitui o texto atual
      displayContainer.textContent = timeData[index];
  
      // Avança para o próximo item
      index++;
  
      // Quando terminar a lista, para o intervalo e exibe a mensagem final
      if (index === timeData.length) {
        clearInterval(interval);
  
        // Exibe a mensagem final após o último número
        setTimeout(() => {
          displayContainer.textContent = ""; // Limpa o texto
          finalMessage.classList.remove("hidden");
  
          // Redireciona automaticamente após 4 segundos
          setTimeout(() => {
            window.location.href = "presentes.html";
          }, 4000);
        }, 1000);
      }
    }, 2000); // Mostra cada número por 2 segundos
  }
  
  // Inicia a exibição dos dados
  displayTimeData();
  