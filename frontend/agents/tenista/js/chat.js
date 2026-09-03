export class ChatController {
    constructor(ui, avatar, apiUrl) {
        this.ui = ui;
        this.avatar = avatar;
        this.apiUrl = apiUrl;
        this.liveFeedUrl = "/tennis-live-feed";
        this.predictionUrl = "/tennis-match-prediction";
        this.queue = [];
        this.processing = false;
        this.conversationHistory = [];
        this.defaultScreenChannels = [];
        this.activeScreenChannels = [];
        this.activeScreenChannelIndex = 0;
        this.isShowingDefaultFeed = true;
        this.screenRotationTimer = null;
        this.liveFeedRefreshTimer = null;

        this.ui.sendBtn.addEventListener("click", () => this.submitCurrentInput());
        this.ui.userInput.addEventListener("keydown", (event) => {
            if (event.key !== "Enter") return;
            event.preventDefault();
            this.submitCurrentInput();
        });
        this.ui.setClearHandler(() => this.resetConversation());
        this.ui.setScreenResetHandler(() => this.resumeDefaultLiveFeed());
        this.setupChannelControls();
        this.setupPredictionForm();
        void this.initializeLiveFeed();
    }

    async showWelcomeMessage() {
        const welcomeMessage =
            "Soy Agente Apuestas Tenis.\n\n" +
            "Puedo ayudarte con contexto de jugadores, torneos, partidos ATP/WTA, conceptos de tenis y predicciones pre-partido cuando el modelo ML este disponible. Las predicciones son orientativas y apostar implica riesgo.";
        await this.ui.addBotMessageTyping(welcomeMessage);
        this.pushHistory("assistant", welcomeMessage);
    }

    resetConversation() {
        this.queue = [];
        this.processing = false;
        this.conversationHistory = [];
        this.avatar?.stopTalking?.();
        this.resumeDefaultLiveFeed();
        void this.showWelcomeMessage();
    }

    pushHistory(role, content) {
        const value = (content || "").trim();
        if (!value) return;
        this.conversationHistory.push({ role, content: value });
        this.conversationHistory = this.conversationHistory.slice(-12);
    }

    setupChannelControls() {
        this.ui.channelPrevBtn?.addEventListener("click", () => this.showPrevScreenChannel({ manual: true }));
        this.ui.channelNextBtn?.addEventListener("click", () => this.showNextScreenChannel({ manual: true }));
    }

    setupPredictionForm() {
        const form = document.getElementById("predictionForm");
        if (!form) return;
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            void this.submitPredictionForm();
        });
    }

    async initializeLiveFeed() {
        await this.refreshLiveFeed({ forceDisplay: true });
        this.liveFeedRefreshTimer = setInterval(() => void this.refreshLiveFeed(), 240000);
    }

    async refreshLiveFeed({ forceDisplay = false } = {}) {
        try {
            const response = await fetch(this.liveFeedUrl);
            if (!response.ok) throw new Error(`Live feed failed with status ${response.status}`);
            const data = await response.json();
            const channels = this.normalizeChannels(data.channels);
            if (!channels.length) throw new Error("No channels");
            this.defaultScreenChannels = channels;
            if (forceDisplay || this.isShowingDefaultFeed || !this.activeScreenChannels.length) {
                this.setActiveScreenChannels(channels, { isDefault: true });
            }
        } catch (error) {
            if (this.activeScreenChannels.length) return;
            this.ui.showFeaturedState({
                eyebrow: "Conexión",
                title: "No he podido cargar el radar de tenis",
                body: "Prueba de nuevo en unos segundos o usa el chat para preguntar por un partido concreto.",
            });
            this.ui.setChannelCounter(1, 1);
            this.ui.setChannelNavigationEnabled(false);
        }
    }

    normalizeChannels(channels) {
        return (Array.isArray(channels) ? channels : [])
            .map((channel) => ({
                eyebrow: channel.eyebrow || "Tenis",
                title: channel.title || "Panel de tenis",
                body: channel.body || "Sin contenido disponible.",
                imageUrl: this.getCleanImageUrl(channel.imageUrl),
                linkUrl: this.getCleanExternalUrl(channel.linkUrl),
                linkLabel: channel.linkLabel || "Abrir fuente",
                prediction: channel.prediction || null,
                match: channel.match || null,
            }))
            .filter((channel) => channel.title);
    }

    getCleanImageUrl(url) {
        return this.getCleanExternalUrl(url);
    }

    getCleanExternalUrl(url) {
        const value = typeof url === "string" ? url.trim() : "";
        if (!value) return "";

        try {
            const parsed = new URL(value, window.location.origin);
            return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
        } catch {
            return "";
        }
    }

    setActiveScreenChannels(items, { isDefault = false } = {}) {
        if (!Array.isArray(items) || !items.length) return false;
        this.activeScreenChannels = items;
        this.activeScreenChannelIndex = 0;
        this.isShowingDefaultFeed = isDefault;
        this.showScreenChannel(0);
        this.resetScreenRotation();
        return true;
    }

    showScreenChannel(index) {
        const total = this.activeScreenChannels.length;
        if (!total) return;
        const safeIndex = ((index % total) + total) % total;
        const channel = this.activeScreenChannels[safeIndex];
        this.activeScreenChannelIndex = safeIndex;
        this.ui.showFeaturedState(channel);
        this.ui.setChannelCounter(safeIndex + 1, total);
        this.ui.setChannelNavigationEnabled(total > 1);
    }

    showNextScreenChannel({ manual = false } = {}) {
        this.showScreenChannel(this.activeScreenChannelIndex + 1);
        if (manual) this.resetScreenRotation();
    }

    showPrevScreenChannel({ manual = false } = {}) {
        this.showScreenChannel(this.activeScreenChannelIndex - 1);
        if (manual) this.resetScreenRotation();
    }

    resetScreenRotation() {
        clearInterval(this.screenRotationTimer);
        if (this.activeScreenChannels.length > 1) {
            this.screenRotationTimer = setInterval(() => this.showNextScreenChannel(), 9000);
        }
    }

    resumeDefaultLiveFeed() {
        if (this.defaultScreenChannels.length) {
            this.setActiveScreenChannels(this.defaultScreenChannels, { isDefault: true });
            return;
        }
        this.ui.resetFeaturedState();
        void this.refreshLiveFeed({ forceDisplay: true });
    }

    submitCurrentInput() {
        if (this.queueMessage(this.ui.userInput.value)) {
            this.ui.userInput.value = "";
        }
    }

    queueMessage(text) {
        const message = text.trim();
        if (!message) return false;
        this.ui.addUserMessage(message);
        this.queue.push(message);
        void this.processQueue();
        return true;
    }

    async processQueue() {
        if (this.processing || !this.queue.length) return;
        this.processing = true;
        const text = this.queue.shift();
        const history = this.conversationHistory.slice(-8);

        this.avatar?.startTalking?.();
        this.ui.setPendingState(true);
        this.ui.userInput.disabled = true;
        this.ui.sendBtn.disabled = true;
        this.ui.clearBtn.disabled = true;
        this.ui.showFeaturedState({
            eyebrow: "Analizando",
            title: "Preparando respuesta de tenis",
            body: "Estoy revisando si hace falta contexto, partidos vivos o predicción ML.",
            isLoading: true,
        });

        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_message: text, history }),
            });
            if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

            const data = await response.json();
            const channels = this.normalizeChannels(data.channels);
            if (channels.length) this.setActiveScreenChannels(channels, { isDefault: false });
            else this.resumeDefaultLiveFeed();

            await this.ui.addBotMessageTyping(data.bot_message || "No he podido preparar respuesta.");
            this.pushHistory("user", text);
            this.pushHistory("assistant", data.bot_message || "");
            this.appendResponseBlocks(data);
        } catch (error) {
            const fallbackMessage = "No he podido conectar con el servicio de tenis ahora mismo.";
            await this.ui.addBotMessageTyping(fallbackMessage);
            this.pushHistory("user", text);
            this.pushHistory("assistant", fallbackMessage);
        } finally {
            this.avatar?.stopTalking?.();
            this.ui.setPendingState(false);
            this.ui.userInput.disabled = false;
            this.ui.sendBtn.disabled = false;
            this.ui.clearBtn.disabled = false;
            this.ui.userInput.focus();
            this.processing = false;
            void this.processQueue();
        }
    }

    appendResponseBlocks(data) {
        if (data.prediction) {
            this.renderPredictionResult(data.prediction);
            if (data.prediction.available) {
                const block = this.buildPredictionPanel(data.prediction);
                this.ui.appendBlock(block);
                this.ui.focusBlock(block);
            }
        }

        if (data.matches?.length) {
            const block = this.buildMatchesPanel(data.matches);
            this.ui.appendBlock(block);
        }

        if (data.articles?.length) {
            const block = this.buildNewsPanel(data.articles);
            this.ui.appendBlock(block);
        }
    }

    async submitPredictionForm() {
        const player1 = document.getElementById("player1Input")?.value.trim();
        const player2 = document.getElementById("player2Input")?.value.trim();
        if (!player1 || !player2) {
            this.setPredictionResultText("Indica dos jugadores para predecir.");
            return;
        }

        const params = new URLSearchParams({
            player1,
            player2,
            surface: document.getElementById("surfaceInput")?.value || "",
            level: document.getElementById("levelInput")?.value || "",
            round: document.getElementById("roundInput")?.value || "",
        });
        const bestOf = document.getElementById("bestOfInput")?.value;
        if (bestOf) params.set("best_of", bestOf);

        this.setPredictionResultText("Calculando predicción...");
        try {
            const response = await fetch(`${this.predictionUrl}?${params.toString()}`);
            if (!response.ok) throw new Error(`Prediction failed with status ${response.status}`);
            const data = await response.json();
            this.renderPredictionResult(data);
        } catch (error) {
            this.setPredictionResultText("No he podido obtener la predicción ahora mismo.");
        }
    }

    renderPredictionResult(prediction) {
        const target = document.getElementById("predictionResult");
        if (!target) return;
        target.innerHTML = "";
        target.appendChild(this.buildPredictionPanel(prediction, { compact: true }));
    }

    setPredictionResultText(text) {
        const target = document.getElementById("predictionResult");
        if (target) target.textContent = text;
    }

    buildPredictionPanel(prediction, { compact = false } = {}) {
        const panel = document.createElement("section");
        panel.className = compact ? "prediction-mini" : "insight-panel prediction-panel";

        const title = document.createElement("h3");
        title.textContent = prediction.available
            ? `Ganador previsto: ${prediction.winner_predicted}`
            : "Modelo no disponible";

        const subtitle = document.createElement("p");
        subtitle.textContent = `${prediction.player1 || "Jugador 1"} vs ${prediction.player2 || "Jugador 2"}${prediction.surface ? ` | ${prediction.surface}` : ""}`;

        panel.append(title, subtitle);

        if (prediction.available) {
            panel.append(
                this.createProbabilityRow(prediction.player1, prediction.player1_probability),
                this.createProbabilityRow(prediction.player2, prediction.player2_probability),
            );
            const confidence = document.createElement("p");
            confidence.className = "prediction-confidence";
            confidence.textContent = `Confianza: ${prediction.confidence || "no disponible"}`;
            panel.appendChild(confidence);

            if (prediction.key_factors?.length) {
                const list = document.createElement("ul");
                prediction.key_factors.forEach((factor) => {
                    const item = document.createElement("li");
                    item.textContent = factor;
                    list.appendChild(item);
                });
                panel.appendChild(list);
            }
        } else {
            const error = document.createElement("p");
            error.textContent = "Predicción ML pendiente: falta instalar o conectar el modelo entrenado.";
            panel.appendChild(error);
        }

        const disclaimer = document.createElement("p");
        disclaimer.className = "risk-note";
        disclaimer.textContent = prediction.available
            ? (prediction.disclaimer || "Predicción orientativa; apostar implica riesgo.")
            : "Sin modelo no se muestran probabilidades ni ganador previsto.";
        panel.appendChild(disclaimer);
        return panel;
    }

    createProbabilityRow(label, value) {
        const row = document.createElement("div");
        row.className = "probability-row";
        const probability = Number.isFinite(value) ? value : 0;

        const top = document.createElement("div");
        top.className = "probability-top";
        const player = document.createElement("span");
        player.textContent = label || "Jugador";
        const percentage = document.createElement("strong");
        percentage.textContent = Number.isFinite(value) ? `${(value * 100).toFixed(1)}%` : "n/d";
        top.append(player, percentage);

        const bar = document.createElement("div");
        bar.className = "probability-bar";
        const fill = document.createElement("span");
        fill.style.width = `${Math.max(0, Math.min(100, probability * 100))}%`;
        bar.appendChild(fill);
        row.append(top, bar);
        return row;
    }

    buildMatchesPanel(matches) {
        const panel = document.createElement("section");
        panel.className = "insight-panel";
        panel.innerHTML = "<h3>Partidos detectados</h3>";
        const list = document.createElement("ul");
        matches.slice(0, 8).forEach((match) => {
            const names = (match.players || []).map((player) => player.name).filter(Boolean).slice(0, 2).join(" vs ");
            const item = document.createElement("li");
            item.textContent = `${match.tour || "Tenis"} | ${names || match.name || "Partido"} | ${match.status || "estado no disponible"}`;
            list.appendChild(item);
        });
        panel.appendChild(list);
        return panel;
    }

    buildNewsPanel(articles) {
        const panel = document.createElement("section");
        panel.className = "insight-panel news-panel";
        const heading = document.createElement("h3");
        heading.textContent = "Noticias destacadas";
        panel.appendChild(heading);

        articles.slice(0, 4).forEach((article) => {
            const card = document.createElement("article");
            card.className = "news-card";

            const body = document.createElement("div");
            body.className = "news-card-body";

            const meta = document.createElement("div");
            meta.className = "news-card-meta";
            meta.textContent = `${article.source || "Fuente"} | ${this.formatPublishedAt(article.published_at)}`;

            const title = document.createElement("h4");
            title.textContent = article.title || "Noticia de tenis";

            const description = document.createElement("p");
            description.textContent = article.description || "Sin extracto disponible.";

            body.append(meta, title, description);
            const articleUrl = this.getCleanExternalUrl(article.url);
            if (articleUrl) {
                const link = document.createElement("a");
                link.href = articleUrl;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = "Abrir fuente";
                body.appendChild(link);
            }

            card.appendChild(body);
            panel.appendChild(card);
        });
        return panel;
    }

    formatPublishedAt(value) {
        if (!value) return "Fecha no disponible";
        const parsedDate = new Date(value);
        if (Number.isNaN(parsedDate.getTime())) return value;
        return new Intl.DateTimeFormat("es-ES", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
        }).format(parsedDate);
    }
}
