document.addEventListener("DOMContentLoaded", () => {
    const messages = {
        1: "Essa música é tipo a trilha sonora oficial do que eu sinto por você. Toda vez que ele canta sobre esse amor que não tem fim, parece que tá lendo o que tá no meu coração. É como se cada verso fosse uma carta que eu escreveria pra você. ❤️",
        2: "Essa é sobre aqueles momentos que são só nossos, quando tudo parece calmo e perfeito, aqueles abraços em que não queremos que acabe. Eu lembro de como me sinto grato por ter você na minha vida, e essa música traduz aquele clima leve, mas cheio de significado que você traz pra mim. 💕",
        3: "Essa é a definição perfeita do que acontece quando fico longe de você. É aquele aperto bom no peito, aquela vontade de pegar o primeiro ônibus em direção a você e nunca mais voltar. Cada vez que ouço, só penso na sorte de ter alguém pra sentir tanta saudade assim. 🌟",
    };
  
    function showMessage(rank) {
        const messageBox = document.getElementById("message-box");
        const messageText = document.getElementById("message-text");
  
        if (messageBox && messageText) {
            messageText.textContent = messages[rank];
            messageBox.classList.remove("hidden");
            messageBox.style.display = "block";
        } else {
            console.error("Elementos do message-box ou message-text não encontrados.");
        }
    }
  
    function closeMessage() {
        const messageBox = document.getElementById("message-box");
        if (messageBox) {
            messageBox.style.display = "none";
        } else {
            console.error("Elemento message-box não encontrado.");
        }
    }
  
    window.showMessage = showMessage;
    window.closeMessage = closeMessage;
  });