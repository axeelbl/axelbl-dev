import { AvatarController } from "./avatar.js?v=20260720-assets";
import { ChatController } from "./chat.js";
import { ChatUI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const avatar = new AvatarController(
        document.getElementById("baseFace"),
        document.getElementById("mouthOpenImg"),
        document.getElementById("avatarHalo"),
        document.getElementById("avatar"),
        document.getElementById("avatarStatus"),
    );

    const ui = new ChatUI(
        document.getElementById("chatContainer"),
        document.getElementById("userInput"),
        document.getElementById("sendBtn"),
        document.getElementById("clearBtn"),
    );

    const chat = new ChatController(ui, avatar, "/chat");

    window.chatUI = ui;
    window.chatController = chat;

    const welcomeMessage =
        "Objetivo: ayudarte a entrenar mejor al instante\n" +
        "Primero te ayudo en el chat con rutinas, tecnica y ejercicios visuales.\n" +
        "Si despues quieres una atencion mas personalizada, tambien puedo ayudarte con una reserva.\n\n" +
        "Prueba ahora:\n" +
        "- Quiero una rutina de 4 dias para ganar musculo con gimnasio completo.\n" +
        "- Explicame la sentadilla paso a paso con errores comunes.\n" +
        "- Ensename ejercicios de espalda y gluteo con apoyo visual.\n" +
        "- Quiero reservar una sesion de entrenamiento personal.";

    setTimeout(() => {
        ui.addBotMessageTyping(welcomeMessage).then(() => {
            chat.registerAssistantMessage(welcomeMessage);
        });
    }, 220);

    const quickActions = [
        {
            id: "planBtn",
            message:
                "Quiero una rutina de 4 dias para ganar musculo, nivel intermedio, 60 minutos por sesion y gimnasio completo.",
        },
        {
            id: "mediaBtn",
            message: "Ensename ejercicios de pecho, espalda, pierna y core con ejemplos visuales.",
        },
    ];

    quickActions.forEach(({ id, message }) => {
        const button = document.getElementById(id);
        if (!button) return;

        button.addEventListener("click", event => {
            event.preventDefault();
            chat.queueMessage(message);
        });
    });

    document.querySelectorAll(".prompt-chip").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            chat.queueMessage(button.dataset.prompt || "");
        });
    });

    document.querySelectorAll("[data-trigger-message]").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            chat.queueMessage(button.dataset.triggerMessage || "");
        });
    });
});
