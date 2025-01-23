document.addEventListener("DOMContentLoaded", () => {
    const messages = {
        1: "Essa música me lembra o nosso primeiro encontro e como eu me senti sortudo de estar ao seu lado. ❤️",
        2: "Sempre que ouço essa música, penso em todos os momentos incríveis que passamos juntos. 💕",
        3: "Essa música representa o quanto você trouxe alegria e amor para a minha vida. 🌟",
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