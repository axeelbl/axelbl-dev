import { ChatController } from "./chat.js";
import { ChatUI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const ui = new ChatUI(
        document.getElementById("chatContainer"),
        document.getElementById("userInput"),
        document.getElementById("sendBtn"),
        document.getElementById("clearBtn"),
    );

    const chat = new ChatController(ui, "/chat");

    document.querySelectorAll("[data-prompt]").forEach((button) => {
        button.addEventListener("click", () => {
            chat.queueMessage(button.dataset.prompt || "");
        });
    });

    setTimeout(() => {
        void chat.showWelcomeMessage();
    }, 250);
});
