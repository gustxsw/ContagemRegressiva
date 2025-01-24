// Seleciona o container para os corações
const heartsContainer = document.getElementById("hearts-container");
let heartCount = 0; // Contador de corações
const maxHearts = 100; // Limite máximo de corações na tela

function createFallingHeart() {
  if (heartCount >= maxHearts) return; // Limita o número de corações na tela

  // Cria o elemento do coração
  const heart = document.createElement("i");
  heart.classList.add("fa-solid", "fa-heart", "heart"); // Usa FontAwesome

  // Define estilo dinâmico do coração
  heart.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duração aleatória entre 3 e 5 segundos
  heart.style.opacity = Math.random() * 0.5 + 0.5; // Opacidade aleatória entre 0.5 e 1
  heart.style.fontSize = Math.random() * 10 + 15 + "px"; // Tamanho aleatório entre 15px e 25px

  heartsContainer.appendChild(heart); // Adiciona o coração ao container
  heartCount++; // Incrementa o contador

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
    heartCount--; // Decrementa o contador ao remover o coração
  }, 5000);
}

// Cria corações a cada 500ms
setInterval(createFallingHeart, 500);