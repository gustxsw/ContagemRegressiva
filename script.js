// Defina a data alvo (o dia do aniversário)
const targetDate = new Date("2025-01-25T00:00:00").getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").textContent = "É hoje!";
    document.getElementById("specialButton").classList.remove("hidden");
    clearInterval(interval); // Para o intervalo quando o evento é atingido
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Função para atualizar os números com animação
  const updateNumber = (id, value) => {
    const element = document.getElementById(id);
    const formattedValue = value.toString().padStart(2, "0"); // Padroniza com dois dígitos

    if (element.textContent !== formattedValue) {
      element.textContent = formattedValue;
      element.classList.add("updated"); // Adiciona a classe de animação
      setTimeout(() => element.classList.remove("updated"), 200); // Remove após 200ms
    }
  };

  updateNumber("days", days);
  updateNumber("hours", hours);
  updateNumber("minutes", minutes);
  updateNumber("seconds", seconds);
}

// Define o intervalo para atualizar a contagem regressiva
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Adiciona partículas de corações ao fundo
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${4 + Math.random() * 3}s`;
    heart.style.fontSize = `${12 + Math.random() * 8}px`;
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    document.getElementById("hearts-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 7000);
}, 800);

// Adiciona partículas mágicas
setInterval(() => {
    const particle = document.createElement("div");
    particle.className = "magic-particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${3 + Math.random() * 2}s`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}, 1500);

// Alteração do fundo com base no horário
function updateBackground() {
  const hours = new Date().getHours();
  let gradient;

  if (hours >= 6 && hours < 18) {
    gradient = "linear-gradient(135deg, #ffb6b6, #ff5a5a)"; // Gradiente suave para o dia
  } else {
    gradient = "linear-gradient(135deg, #d60000, #ff4e50)"; // Gradiente intenso para a noite
  }

  document.body.style.background = gradient;
}

// Chama a função ao carregar a página e a cada minuto
updateBackground();
setInterval(updateBackground, 60000);

function revealSurprise() {
  const surpriseImage = document.getElementById('surpriseImage');
  surpriseImage.src = 'surpresa.jpg'; // Substitua pelo caminho da foto
  surpriseImage.style.display = 'block';
}

// Revelar Fotos ao passar o mouse
const photos = document.querySelectorAll('.photo-grid img');
photos.forEach(photo => {
  photo.addEventListener('mouseover', () => {
      photo.classList.remove('hidden');
  });
  photo.addEventListener('mouseout', () => {
      photo.classList.add('hidden');
  });
});

// Animação para scroll suave (opcional)
document.querySelectorAll('.timeline-photo').forEach(photo => {
  photo.addEventListener('mouseenter', () => {
      photo.style.transform = 'scale(1.2)'; // Zoom mais destacado
  });

  photo.addEventListener('mouseleave', () => {
      photo.style.transform = 'scale(1)'; // Voltar ao estado original
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const heartsContainer = document.getElementById("hearts-container");
let heartCount = 0; // Contador de corações visíveis
const maxHearts = 50; // Número máximo de corações na tela ao mesmo tempo

function createFallingHeart() {
  if (heartCount >= maxHearts) return; // Não cria mais corações se atingir o limite

  const heart = document.createElement("i");
  heart.classList.add("fa-solid", "fa-heart", "heart");
  heart.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duração aleatória entre 3 e 5 segundos
  heart.style.opacity = Math.random() * 0.5 + 0.5; // Opacidade aleatória entre 0.5 e 1
  heart.style.fontSize = Math.random() * 10 + 10 + "px"; // Tamanho aleatório entre 10px e 20px

  heartsContainer.appendChild(heart); // Adiciona no container de corações
  heartCount++; // Incrementa o contador de corações

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
    heartCount--; // Decrementa o contador ao remover o coração
  }, 5000);
}

// Cria corações a cada 500ms
setInterval(createFallingHeart, 500);
