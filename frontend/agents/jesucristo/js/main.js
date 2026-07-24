import { ChatController } from "./chat.js?v=20260723-renderfix";
import { ChatUI } from "./ui.js?v=20260723-renderfix";

document.addEventListener("DOMContentLoaded", () => {
    const ui = new ChatUI(
        document.getElementById("chatContainer"),
        document.getElementById("userInput"),
        document.getElementById("sendBtn"),
        document.getElementById("clearBtn"),
    );

    const chat = new ChatController(ui, "/agents/jesucristo/chat");

    document.querySelectorAll("[data-prompt]").forEach((button) => {
        button.addEventListener("click", () => {
            chat.queueMessage(button.dataset.prompt || "");
        });
    });

    setTimeout(() => {
        void chat.showWelcomeMessage();
    }, 250);
});
