export class ChatController {
    constructor(ui, apiUrl) {
        this.ui = ui;
        this.apiUrl = apiUrl;
        this.queue = [];
        this.processing = false;
        this.conversationHistory = [];
        this.nearbyChurchBtn = document.getElementById("nearbyChurchBtn");
        this.requestTimeoutMs = 18000;

        this.ui.sendBtn.addEventListener("click", () => this.submitCurrentInput());
        this.ui.userInput.addEventListener("keydown", (event) => {
            if (event.key !== "Enter") return;
            event.preventDefault();
            this.submitCurrentInput();
        });
        this.ui.setClearHandler(() => this.resetConversation());
        this.nearbyChurchBtn?.addEventListener("click", () => {
            this.queueMessage("Busca la iglesia mas cercana", { forceBrowserLocation: true });
        });
    }

    async showWelcomeMessage() {
        const message =
            "Soy Agente Jesucristo.\n\n"
            + "Puedes preguntarme por la Biblia, Jesucristo, la fe cristiana o pedirme ayuda para encontrar una iglesia cercana.";
        await this.ui.addBotMessageTyping(message);
        this.pushHistory("assistant", message);
    }

    resetConversation() {
        this.queue = [];
        this.processing = false;
        this.conversationHistory = [];
        void this.showWelcomeMessage();
    }

    pushHistory(role, content) {
        const value = (content || "").trim();
        if (!value) return;

        this.conversationHistory.push({ role, content: value });
        this.conversationHistory = this.conversationHistory.slice(-12);
    }

    submitCurrentInput() {
        const wasQueued = this.queueMessage(this.ui.userInput.value);

        if (wasQueued) {
            this.ui.userInput.value = "";
        }
    }

    queueMessage(text, options = {}) {
        const message = (text || "").trim();
        if (!message) return false;

        this.ui.addUserMessage(message);
        this.queue.push({
            text: message,
            forceBrowserLocation: Boolean(options.forceBrowserLocation),
        });
        void this.processQueue();
        return true;
    }

    async processQueue() {
        if (this.processing || this.queue.length === 0) return;
        this.processing = true;

        const item = this.queue.shift();
        const text = item.text;
        const history = this.conversationHistory.slice(-8);

        this.ui.setPendingState(true);
        this.ui.userInput.disabled = true;
        this.ui.sendBtn.disabled = true;
        this.ui.clearBtn.disabled = true;
        if (this.nearbyChurchBtn) {
            this.nearbyChurchBtn.disabled = true;
        }

        const loadingMessage = this.ui.addLoadingMessage(this.getLoadingMessage(text, item.forceBrowserLocation));

        try {
            const payload = await this.buildRequestPayload(text, history, item.forceBrowserLocation);
            const res = await this.fetchWithTimeout(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`);
            }

            const data = await res.json();

            this.ui.removeBlock(loadingMessage);
            await this.ui.addBotMessageTyping(data.bot_message || "No he podido preparar una respuesta.");

            this.pushHistory("user", text);
            this.pushHistory("assistant", data.bot_message || "");

            this.appendResponseBlocks(data);
        } catch (error) {
            this.ui.removeBlock(loadingMessage);
            const fallback = error?.name === "AbortError"
                ? "La busqueda esta tardando demasiado. Prueba otra vez o escribe una ciudad o direccion mas general."
                : "No he podido responder ahora mismo. Intentalo de nuevo en unos segundos.";
            await this.ui.addBotMessageTyping(fallback);
            this.pushHistory("user", text);
            this.pushHistory("assistant", fallback);
        } finally {
            this.ui.setPendingState(false);
            this.ui.userInput.disabled = false;
            this.ui.sendBtn.disabled = false;
            this.ui.clearBtn.disabled = false;
            if (this.nearbyChurchBtn) {
                this.nearbyChurchBtn.disabled = false;
            }
            this.ui.userInput.focus();
            this.processing = false;
            void this.processQueue();
        }
    }

    getLoadingMessage(text, forceBrowserLocation = false) {
        if (forceBrowserLocation || this.isChurchSearchIntent(text)) {
            return "Buscando iglesias cercanas...";
        }

        return "Preparando una respuesta serena...";
    }

    async buildRequestPayload(text, history, forceBrowserLocation = false) {
        const payload = {
            user_message: text,
            history,
        };

        if ((forceBrowserLocation || this.isChurchSearchIntent(text)) && !this.messageContainsManualAddress(text)) {
            const location = await this.tryGetBrowserLocation();
            if (location) {
                payload.location = location;
            }
        }

        return payload;
    }

    isChurchSearchIntent(text) {
        const normalized = this.normalizeSearchText(text);
        const churchWords = ["iglesia", "parroquia", "templo", "misa", "culto"];
        const searchHints = ["cerca", "cercana", "buscar", "busca", "ubicacion", "ruta", "como llegar", "mas cercana"];
        return (
            churchWords.some((token) => normalized.includes(token))
            && searchHints.some((token) => normalized.includes(token))
        );
    }

    messageContainsManualAddress(text) {
        const normalized = this.normalizeSearchText(text);
        const hints = ["calle", "avenida", "avda", "plaza", "paseo", "madrid", "barcelona", "sevilla", ","];
        const patterns = [
            /\bcerca de\s+.+/,
            /\b(mas cercana|cercana)\s+(de|en)\s+.+/,
            /\b(busca|buscar|encuentra|encontrar)\b.+\b(en|por)\s+.+/,
        ];
        return (
            hints.some((hint) => normalized.includes(hint))
            || /\d/.test(text)
            || patterns.some((pattern) => pattern.test(normalized))
        );
    }

    normalizeSearchText(text) {
        return String(text || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    async tryGetBrowserLocation() {
        if (!navigator.geolocation) {
            return null;
        }

        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        source: "browser",
                    });
                },
                () => resolve(null),
                {
                    enableHighAccuracy: true,
                    timeout: 6000,
                    maximumAge: 0,
                },
            );
        });
    }

    async fetchWithTimeout(url, options = {}) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), this.requestTimeoutMs);

        try {
            return await fetch(url, {
                ...options,
                signal: controller.signal,
            });
        } finally {
            clearTimeout(timer);
        }
    }

    appendResponseBlocks(data) {
        if (data.churches?.length) {
            this.ui.appendBlock(this.buildChurchResultsSection(data.churches, data.location));
        }

        if (data.resources?.length) {
            this.ui.appendBlock(this.buildResourceSection(data.resources));
        }
    }

    buildChurchResultsSection(churches, location) {
        const section = document.createElement("section");
        section.className = "result-section";

        const title = document.createElement("h3");
        title.textContent = location?.label
            ? `Iglesias cerca de ${location.label}`
            : "Iglesias cercanas";

        const grid = document.createElement("div");
        grid.className = "result-grid";

        churches.forEach((church) => {
            const card = document.createElement("article");
            card.className = "result-card";

            const top = document.createElement("div");
            top.className = "result-card-top";

            const titleWrap = document.createElement("div");
            titleWrap.className = "result-card-title";

            const kicker = document.createElement("span");
            kicker.className = "result-card-kicker";
            kicker.textContent = church.denomination || "Iglesia cristiana";

            const strong = document.createElement("strong");
            strong.textContent = church.name || "Iglesia";

            titleWrap.append(kicker, strong);

            const badge = document.createElement("span");
            badge.className = "result-badge";
            badge.textContent = church.distance_label || "Cerca";

            top.append(titleWrap, badge);

            const lines = [
                church.address ? `Direccion: ${church.address}` : "Direccion no disponible.",
                church.opening_hours ? `Horario: ${church.opening_hours}` : "",
                church.phone ? `Telefono: ${church.phone}` : "",
                church.website ? `Web: ${church.website}` : "",
            ].filter(Boolean);

            const body = document.createElement("div");
            body.className = "result-copy";
            lines.forEach((line) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = line;
                body.appendChild(paragraph);
            });

            const actions = document.createElement("div");
            actions.className = "result-actions";

            [
                { label: "Como llegar", url: church.directions_url },
                { label: "Abrir mapa", url: church.map_url },
                { label: "Web", url: church.website },
            ].forEach((item) => {
                if (!item.url) return;
                const link = document.createElement("a");
                link.href = item.url;
                link.target = "_blank";
                link.rel = "noreferrer";
                link.className = "result-link";
                link.textContent = item.label;
                actions.appendChild(link);
            });

            card.append(top, body, actions);
            grid.appendChild(card);
        });

        section.append(title, grid);
        return section;
    }

    buildResourceSection(resources) {
        const section = document.createElement("section");
        section.className = "result-section";

        const title = document.createElement("h3");
        title.textContent = "Recursos relacionados";

        const grid = document.createElement("div");
        grid.className = "result-grid";

        resources.forEach((resource) => {
            const card = document.createElement("article");
            card.className = "result-card";

            const top = document.createElement("div");
            top.className = "result-card-title";

            const kicker = document.createElement("span");
            kicker.className = "result-card-kicker";
            kicker.textContent = resource.verse_reference || "Versiculo";

            const strong = document.createElement("strong");
            strong.textContent = resource.title || "Recurso";

            top.append(kicker, strong);

            const summary = document.createElement("p");
            summary.textContent = resource.summary || "";

            const takeaway = document.createElement("p");
            takeaway.textContent = resource.verse_takeaway
                ? `Idea clave: ${resource.verse_takeaway}`
                : "";

            const prayer = document.createElement("p");
            prayer.textContent = resource.prayer
                ? `Oracion breve: ${resource.prayer}`
                : "";

            card.append(top, summary);
            if (takeaway.textContent) {
                card.appendChild(takeaway);
            }
            if (prayer.textContent) {
                card.appendChild(prayer);
            }
            grid.appendChild(card);
        });

        section.append(title, grid);
        return section;
    }
}
