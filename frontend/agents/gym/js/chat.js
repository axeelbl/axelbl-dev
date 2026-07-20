export class ChatController {
    constructor(ui, avatar, apiUrl) {
        this.ui = ui;
        this.avatar = avatar;
        this.apiUrl = apiUrl;

        this.queue = [];
        this.processing = false;
        this.history = [];

        this.currentPhotos = [];
        this.currentIndex = 0;

        this.ui.sendBtn.addEventListener("click", () => this.queueMessage(this.ui.userInput.value));
        this.ui.userInput.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.queueMessage(this.ui.userInput.value);
            }
        });

        const viewer = document.getElementById("imageViewer");
        const closeBtn = document.getElementById("closeViewer");
        const leftBtn = document.getElementById("viewerLeft");
        const rightBtn = document.getElementById("viewerRight");

        if (closeBtn && viewer) {
            closeBtn.addEventListener("click", () => viewer.classList.add("hidden"));
        }

        if (viewer) {
            viewer.addEventListener("click", event => {
                if (event.target === viewer) {
                    viewer.classList.add("hidden");
                }
            });
        }

        if (leftBtn) {
            leftBtn.addEventListener("click", event => {
                event.stopPropagation();
                this.showPrev();
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener("click", event => {
                event.stopPropagation();
                this.showNext();
            });
        }

        document.addEventListener("keydown", event => {
            if (!viewer || viewer.classList.contains("hidden")) return;

            if (event.key === "ArrowRight") this.showNext();
            if (event.key === "ArrowLeft") this.showPrev();
            if (event.key === "Escape") viewer.classList.add("hidden");
        });
    }

    registerAssistantMessage(text) {
        this.pushHistory("assistant", text);
    }

    clearConversation() {
        this.history = [];
        this.currentPhotos = [];
        this.currentIndex = 0;
    }

    pushHistory(role, content) {
        const text = typeof content === "string" ? content.trim() : "";
        if (!text) return;

        this.history.push({ role, content: text });

        if (this.history.length > 20) {
            this.history = this.history.slice(-20);
        }
    }

    queueMessage(text) {
        const cleanText = typeof text === "string" ? text.trim() : "";
        if (!cleanText) return;

        this.ui.addUserMessage(cleanText);
        this.ui.userInput.value = "";
        this.queue.push({
            text: cleanText,
            history: this.history.slice(-10),
        });
        this.processQueue();
    }

    openViewer(index) {
        const viewer = document.getElementById("imageViewer");
        const viewerImg = document.getElementById("viewerImg");

        if (!viewer || !viewerImg || !this.currentPhotos.length) return;

        this.currentIndex = index;
        viewerImg.src = this.currentPhotos[this.currentIndex];
        viewer.classList.remove("hidden");
    }

    showNext() {
        if (!this.currentPhotos.length) return;
        this.currentIndex = (this.currentIndex + 1) % this.currentPhotos.length;
        document.getElementById("viewerImg").src = this.currentPhotos[this.currentIndex];
    }

    showPrev() {
        if (!this.currentPhotos.length) return;
        this.currentIndex =
            (this.currentIndex - 1 + this.currentPhotos.length) % this.currentPhotos.length;
        document.getElementById("viewerImg").src = this.currentPhotos[this.currentIndex];
    }

    normalizeMedia(data) {
        if (Array.isArray(data.media) && data.media.length) {
            return data.media;
        }

        if (Array.isArray(data.photos) && data.photos.length) {
            return data.photos.map(src => ({
                type: "image",
                src,
                title: "Referencia visual",
            }));
        }

        return [];
    }

    renderMedia(mediaItems) {
        if (!mediaItems.length) return;

        this.currentPhotos = mediaItems
            .filter(item => item.type === "image")
            .map(item => item.src);

        let imageIndex = 0;
        const galleryShell = document.createElement("section");
        const galleryHeader = document.createElement("div");
        const title = document.createElement("div");
        const note = document.createElement("div");
        const gallery = document.createElement("div");

        galleryShell.className = "media-gallery-shell";
        galleryHeader.className = "media-gallery-header";
        title.className = "media-gallery-title";
        note.className = "media-gallery-note";
        gallery.className = "media-gallery";

        title.textContent = "Visuales recomendados";
        note.textContent = this.currentPhotos.length
            ? "Pulsa una imagen para verla en grande."
            : "Reproduce el video para revisar la tecnica.";

        galleryHeader.appendChild(title);
        galleryHeader.appendChild(note);
        galleryShell.appendChild(galleryHeader);

        mediaItems.forEach(item => {
            const card = document.createElement("div");
            const mediaLabel = document.createElement("span");

            card.className = "media-card";
            mediaLabel.className = "media-index";

            if (item.type === "video") {
                const video = document.createElement("video");
                video.src = item.src;
                video.className = "chat-video";
                video.controls = true;
                video.playsInline = true;
                mediaLabel.textContent = "Video";
                card.appendChild(mediaLabel);
                card.appendChild(video);
            } else {
                const img = document.createElement("img");
                const viewerIndex = imageIndex;

                img.src = item.src;
                img.className = "chat-photo";
                img.alt = item.title || "Ejercicio";

                imageIndex += 1;
                mediaLabel.textContent = `Imagen ${String(imageIndex).padStart(2, "0")}`;

                img.addEventListener("click", () => {
                    this.openViewer(viewerIndex);
                });

                card.appendChild(mediaLabel);
                card.appendChild(img);
            }

            if (item.title) {
                const caption = document.createElement("div");
                caption.className = "media-caption";
                caption.textContent = item.title;
                card.appendChild(caption);
            }

            gallery.appendChild(card);
        });

        galleryShell.appendChild(gallery);
        this.ui.chatContainer.appendChild(galleryShell);
        this.ui.scrollToBottom();
    }

    async processQueue() {
        if (this.processing || this.queue.length === 0) return;
        this.processing = true;

        const currentItem = this.queue.shift();
        const { text, history } = currentItem;

        this.avatar.startTalking();
        this.ui.setBusyState(true);
        this.ui.userInput.disabled = true;
        this.ui.sendBtn.disabled = true;

        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_message: text,
                    history,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.bot_message || data.detail || "Error de servidor");
            }

            this.pushHistory("user", text);
            await this.ui.addBotMessageTyping(data.bot_message);
            this.pushHistory("assistant", data.bot_message);
            this.avatar.avatarStatus.textContent = "Coach online";

            this.renderMedia(this.normalizeMedia(data));
        } catch (error) {
            const fallbackMessage = error.message || "Error conectando con el servidor.";
            this.pushHistory("user", text);
            await this.ui.addBotMessageTyping(fallbackMessage);
            this.pushHistory("assistant", fallbackMessage);
            this.avatar.avatarStatus.textContent = "Conexion inestable";
        } finally {
            this.avatar.stopTalking();
            this.ui.setBusyState(false);
            this.ui.userInput.disabled = false;
            this.ui.sendBtn.disabled = false;
            this.ui.userInput.focus();
            this.processing = false;
            this.processQueue();
        }
    }
}
