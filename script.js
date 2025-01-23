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
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
}, 500);

// Adiciona estrelas cadentes
setInterval(() => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`; // Distribui aleatoriamente
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000); // Duração da estrela cadente
}, 2000);

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