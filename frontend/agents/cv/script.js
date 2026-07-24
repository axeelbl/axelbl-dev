document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.getElementById("chatContainer");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const clearBtn = document.getElementById("clearBtn");

    const API_URL = "/agents/cv/chat";

    const baseFace = document.getElementById("baseFace");
    const mouthOpenImg = document.getElementById("mouthOpenImg");
    const avatarStatus = document.getElementById("avatarStatus");

    const avatar = document.getElementById("avatar");
    const avatarHalo = document.getElementById("avatarHalo");

    let mouthOpen = false;
    let talkingInterval = null;

    setInterval(() => {
        if (talkingInterval) return;

        baseFace.src = "/agents/cv/eyes_closed_mouth_closed.png";
        setTimeout(() => {
            baseFace.src = "/agents/cv/eyes_open_mouth_closed.png";
        }, 200);
    }, 4000);

    function startTalking() {
        if (talkingInterval) return;

        avatarHalo.style.opacity = "1";
        avatar.style.transform = "scale(1.1)";

        talkingInterval = setInterval(() => {
            mouthOpen = !mouthOpen;
            mouthOpenImg.style.opacity = mouthOpen ? "1" : "0";
        }, 300);
    }

    function stopTalking() {
        clearInterval(talkingInterval);
        talkingInterval = null;
        mouthOpen = false;
        mouthOpenImg.style.opacity = "0";
        avatarHalo.style.opacity = "0";
        avatar.style.transform = "scale(1)";
    }

    function addUserMessage(text) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", "user");
        msgDiv.textContent = text;
        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function prettyUrl(url) {
        try {
            const u = new URL(url.startsWith("http") ? url : `https://${url}`);
            return u.hostname.replace(/^www\./, "") + u.pathname.replace(/\/$/, "");
        } catch (_) {
            return url;
        }
    }

    function linkLabel(url) {
        const lower = url.toLowerCase();
        if (lower.includes("github.com")) return { label: "GitHub", icon: "</>" };
        if (lower.includes("linkedin.com")) return { label: "LinkedIn", icon: "in" };
        if (lower.includes("axelbl.dev")) return { label: "Portfolio", icon: "★" };
        if (lower.startsWith("mailto:") || lower.includes("@")) return { label: "Email", icon: "@" };
        return { label: "Abrir enlace", icon: "↗" };
    }

    function addTextWithLinks(parent, text, foundLinks) {
        const tokenRe = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\))|(https?:\/\/[^\s<>)]+)|([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})|(\*\*([^*]+)\*\*)/g;
        let last = 0;
        let match;

        while ((match = tokenRe.exec(text)) !== null) {
            if (match.index > last) {
                parent.appendChild(document.createTextNode(text.slice(last, match.index)));
            }

            if (match[1] || match[4] || match[5]) {
                const href = match[3] || match[4] || `mailto:${match[5]}`;
                const label = match[2] || match[5] || prettyUrl(href);
                const a = document.createElement("a");
                a.href = href;
                a.textContent = label;
                if (!href.startsWith("mailto:")) {
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                }
                parent.appendChild(a);
                foundLinks.add(href);
            } else if (match[6]) {
                const strong = document.createElement("strong");
                strong.textContent = match[7];
                parent.appendChild(strong);
            }

            last = tokenRe.lastIndex;
        }

        if (last < text.length) {
            parent.appendChild(document.createTextNode(text.slice(last)));
        }
    }

    function cleanLine(line) {
        return line.replace(/^[-*•]\s+/, "").replace(/^\d+[.)]\s+/, "").trim();
    }

    function renderRichMessage(text) {
        const root = document.createElement("div");
        root.className = "bot-rich";
        const foundLinks = new Set();
        const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
        let list = null;
        let paragraph = [];

        function flushParagraph() {
            if (!paragraph.length) return;
            const p = document.createElement("p");
            addTextWithLinks(p, paragraph.join(" "), foundLinks);
            root.appendChild(p);
            paragraph = [];
        }

        function closeList() {
            list = null;
        }

        lines.forEach((rawLine) => {
            const line = rawLine.trim();
            if (!line) {
                flushParagraph();
                closeList();
                return;
            }

            const heading = line.match(/^#{1,3}\s+(.+)$/) || line.match(/^\*\*([^*]{3,80})\*\*:?$/);
            if (heading) {
                flushParagraph();
                closeList();
                const section = document.createElement("div");
                section.className = "bot-section";
                const h = document.createElement("h3");
                h.className = "bot-section-title";
                h.textContent = heading[1].replace(/:$/, "");
                section.appendChild(h);
                root.appendChild(section);
                list = document.createElement("ul");
                section.appendChild(list);
                return;
            }

            if (/^[-*•]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
                flushParagraph();
                if (!list) {
                    const section = document.createElement("div");
                    section.className = "bot-section";
                    root.appendChild(section);
                    list = document.createElement("ul");
                    section.appendChild(list);
                }
                const li = document.createElement("li");
                addTextWithLinks(li, cleanLine(line), foundLinks);
                list.appendChild(li);
                return;
            }

            if (/^[A-ZÁÉÍÓÚÜÑ][^.!?]{2,60}:$/.test(line)) {
                flushParagraph();
                closeList();
                const h = document.createElement("h3");
                h.className = "bot-title";
                h.textContent = line.replace(/:$/, "");
                root.appendChild(h);
                return;
            }

            closeList();
            paragraph.push(line);
        });

        flushParagraph();

        if (foundLinks.size) {
            const cards = document.createElement("div");
            cards.className = "bot-link-cards";
            Array.from(foundLinks).slice(0, 4).forEach((href) => {
                const info = linkLabel(href);
                const a = document.createElement("a");
                a.className = "bot-link-card";
                a.href = href;
                if (!href.startsWith("mailto:")) {
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                }

                const icon = document.createElement("span");
                icon.className = "icon";
                icon.textContent = info.icon;
                const meta = document.createElement("span");
                meta.className = "meta";
                const label = document.createElement("span");
                label.className = "label";
                label.textContent = info.label;
                const url = document.createElement("span");
                url.className = "url";
                url.textContent = href.startsWith("mailto:") ? href.replace("mailto:", "") : prettyUrl(href);
                meta.append(label, url);
                a.append(icon, meta);
                cards.appendChild(a);
            });
            root.appendChild(cards);
        }

        if (!root.childNodes.length) {
            const p = document.createElement("p");
            p.textContent = text;
            root.appendChild(p);
        }

        return root;
    }

    function addBotMessageTyping(text, speed = 8) {
        return new Promise(resolve => {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("message", "bot");
            msgDiv.style.animation = "none";
            chatContainer.appendChild(msgDiv);

            let index = 0;
            const safeText = String(text || "");

            function typeChar() {
                if (index < safeText.length) {
                    msgDiv.textContent += safeText[index];
                    index++;
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                    setTimeout(typeChar, speed);
                } else {
                    msgDiv.textContent = "";
                    msgDiv.appendChild(renderRichMessage(safeText));
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                    resolve();
                }
            }

            typeChar();
        });
    }

    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        addUserMessage(text);
        userInput.value = "";
        sendBtn.disabled = true;

        avatarStatus.textContent = "🟡 Pensando...";
        startTalking();

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_message: text })
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            await addBotMessageTyping(data.bot_message || "No he recibido respuesta del servidor.");
            avatarStatus.textContent = "🟢 Online";
        } catch (err) {
            avatarStatus.textContent = "🔴 Error";
            await addBotMessageTyping("Error conectando con el servidor. Prueba otra vez en unos segundos.");
        } finally {
            stopTalking();
            sendBtn.disabled = false;
            userInput.focus();
        }
    }

    function clearChat() {
        if (!confirm("¿Seguro que quieres borrar la conversación?")) return;
        chatContainer.innerHTML = "";
        userInput.value = "";
    }

    setTimeout(() => {
        addBotMessageTyping(
            "¡Hola! 👋 Soy AxelBot, un chatbot que actúa como mi clon profesional.\n\n" +
            "Puedes preguntarme sobre mi experiencia, proyectos, estudios, habilidades técnicas o enlaces como GitHub, LinkedIn o mi portfolio."
        );
    }, 300);

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });
    clearBtn.addEventListener("click", clearChat);
});
