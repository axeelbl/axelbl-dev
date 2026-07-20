export class ChatUI {
    constructor(chatContainer, userInput, sendBtn, clearBtn) {
        this.chatContainer = chatContainer;
        this.userInput = userInput;
        this.sendBtn = sendBtn;
        this.clearBtn = clearBtn;

        this.workspaceStatus = document.getElementById("workspaceLiveStatus");
        this.composerStatus = document.getElementById("composerStatus");
        this.defaultSendLabel = this.sendBtn.textContent;
        this.defaultWorkspaceStatus = this.workspaceStatus?.textContent || "";
        this.defaultComposerStatus = this.composerStatus?.textContent || "";

        this.clearBtn.addEventListener("click", () => this.clearChat());
    }

    scrollToBottom() {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }

    formatTime() {
        return new Intl.DateTimeFormat("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date());
    }

    createMessageShell(role) {
        const wrapper = document.createElement("article");
        const header = document.createElement("div");
        const badge = document.createElement("span");
        const time = document.createElement("span");
        const content = document.createElement("div");

        wrapper.classList.add("message", role);
        header.className = "message-head";
        badge.className = "message-role";
        time.className = "message-time";
        content.className = role === "user" ? "user-content" : "bot-content";

        badge.textContent = role === "user" ? "Tu mensaje" : "Coach AI";
        time.textContent = this.formatTime();

        header.appendChild(badge);
        header.appendChild(time);
        wrapper.appendChild(header);
        wrapper.appendChild(content);

        return { wrapper, content };
    }

    setBusyState(isBusy) {
        document.body.classList.toggle("is-thinking", isBusy);
        this.chatContainer.setAttribute("aria-busy", String(isBusy));
        this.sendBtn.textContent = isBusy ? "Pensando..." : this.defaultSendLabel;

        if (this.workspaceStatus) {
            this.workspaceStatus.textContent = isBusy
                ? "Analizando objetivo..."
                : this.defaultWorkspaceStatus;
        }

        if (this.composerStatus) {
            this.composerStatus.textContent = isBusy
                ? "Coach procesando..."
                : this.defaultComposerStatus;
        }
    }

    addUserMessage(text) {
        const { wrapper, content } = this.createMessageShell("user");

        content.appendChild(this.createParagraph(text));
        this.chatContainer.appendChild(wrapper);
        this.scrollToBottom();
    }

    normalizeForMatch(text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    splitBlocks(text) {
        return text
            .split(/\n\s*\n/)
            .map(block =>
                block
                    .split("\n")
                    .map(line => line.trim())
                    .filter(Boolean),
            )
            .filter(block => block.length);
    }

    isBulletLine(line) {
        return /^(-|\u2022|\*|\d+\.)\s+/.test(line);
    }

    stripBullet(line) {
        return line.replace(/^(-|\u2022|\*|\d+\.)\s+/, "").trim();
    }

    isKeyValueLine(line) {
        const separatorIndex = line.indexOf(":");
        return separatorIndex > 0 && separatorIndex < 28 && line.slice(separatorIndex + 1).trim().length > 0;
    }

    isPlanHeading(line) {
        const normalized = this.normalizeForMatch(line);
        return /^(dia|sesion|bloque)\s+\d+/.test(normalized);
    }

    createParagraph(text) {
        const paragraph = document.createElement("p");
        paragraph.className = "rich-paragraph";
        paragraph.textContent = text;
        return paragraph;
    }

    matchMarkdownImage(text) {
        return String(text ?? "")
            .trim()
            .match(/^!\[([^\]]*)\]\(([^)\s]+)\)(?:\s*(?:->|-|:)\s*(.*))?$/);
    }

    createInlineMediaFigure(altText, src, extraCaption = "") {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");

        figure.className = "inline-media-figure";
        img.className = "inline-media-image";
        img.src = src;
        img.alt = altText || "Referencia visual";
        img.loading = "lazy";

        caption.className = "inline-media-caption";
        caption.textContent = extraCaption || altText || "Referencia visual";

        figure.appendChild(img);
        figure.appendChild(caption);
        return figure;
    }

    createRichLine(text) {
        const imageMatch = this.matchMarkdownImage(text);
        if (imageMatch) {
            const [, altText, src, extraCaption] = imageMatch;
            return this.createInlineMediaFigure(altText, src, extraCaption);
        }

        return this.createParagraph(text);
    }

    buildInfoGrid(lines) {
        const wrapper = document.createElement("section");
        const grid = document.createElement("div");

        wrapper.className = "rich-section";
        grid.className = "info-grid";

        lines.forEach(line => {
            const separatorIndex = line.indexOf(":");
            const label = line.slice(0, separatorIndex).trim();
            const value = line.slice(separatorIndex + 1).trim();

            const card = document.createElement("article");
            const labelNode = document.createElement("span");
            const valueNode = document.createElement("strong");

            card.className = "info-card";
            labelNode.className = "info-label";
            valueNode.className = "info-value";

            labelNode.textContent = label;
            valueNode.textContent = value;

            card.appendChild(labelNode);
            card.appendChild(valueNode);
            grid.appendChild(card);
        });

        wrapper.appendChild(grid);
        return wrapper;
    }

    buildExerciseItem(line) {
        const cleanLine = this.stripBullet(line);
        const separatorIndex = cleanLine.indexOf(":");
        const item = document.createElement("li");
        const nameNode = document.createElement("div");

        item.className = "exercise-item";
        nameNode.className = "exercise-name";

        if (separatorIndex > 0 && separatorIndex < 42) {
            const name = cleanLine.slice(0, separatorIndex).trim();
            const remainder = cleanLine.slice(separatorIndex + 1).trim();
            const parts = remainder
                .split("|")
                .map(part => part.trim())
                .filter(Boolean);

            nameNode.textContent = name;
            item.appendChild(nameNode);

            if (parts.length) {
                const summary = document.createElement("div");
                summary.className = "exercise-summary";
                summary.textContent = parts[0];
                item.appendChild(summary);
            }

            if (parts.length > 1) {
                const meta = document.createElement("div");
                meta.className = "exercise-meta";

                parts.slice(1).forEach(part => {
                    const chip = document.createElement("span");
                    chip.className = "meta-chip";
                    chip.textContent = part;
                    meta.appendChild(chip);
                });

                item.appendChild(meta);
            }

            return item;
        }

        nameNode.textContent = cleanLine;
        item.appendChild(nameNode);
        return item;
    }

    buildPlanDay(lines) {
        const section = document.createElement("section");
        const title = document.createElement("div");
        const list = document.createElement("ul");

        section.className = "plan-day";
        title.className = "plan-day-title";
        list.className = "exercise-list";

        title.textContent = lines[0];

        lines.slice(1).forEach(line => {
            list.appendChild(this.buildExerciseItem(line));
        });

        section.appendChild(title);

        if (list.children.length) {
            section.appendChild(list);
        }

        return section;
    }

    buildBulletSection(lines, titleText = "") {
        const section = document.createElement("section");
        const list = document.createElement("ul");

        section.className = "rich-section";
        list.className = "rich-list";

        if (titleText) {
            const title = document.createElement("h3");
            title.className = "section-title";
            title.textContent = titleText;
            section.appendChild(title);
        }

        lines.forEach(line => {
            const item = document.createElement("li");
            item.textContent = this.stripBullet(line);
            list.appendChild(item);
        });

        section.appendChild(list);
        return section;
    }

    buildTitledSection(lines) {
        const titleText = lines[0].replace(/:$/, "").trim();
        const bodyLines = lines.slice(1);
        const section = document.createElement("section");
        const title = document.createElement("h3");

        section.className = "rich-section";
        title.className = "section-title";
        title.textContent = titleText;

        section.appendChild(title);

        if (bodyLines.length && bodyLines.every(line => this.isKeyValueLine(line))) {
            section.appendChild(this.buildInfoGrid(bodyLines).firstChild);
            return section;
        }

        if (bodyLines.length && bodyLines.every(line => this.isBulletLine(line))) {
            const list = document.createElement("ul");
            list.className = "rich-list";

            bodyLines.forEach(line => {
                const item = document.createElement("li");
                item.textContent = this.stripBullet(line);
                list.appendChild(item);
            });

            section.appendChild(list);
            return section;
        }

        bodyLines.forEach(line => {
            section.appendChild(this.createRichLine(line));
        });

        return section;
    }

    buildParagraphBlock(lines) {
        const fragment = document.createDocumentFragment();
        lines.forEach(line => fragment.appendChild(this.createRichLine(line)));
        return fragment;
    }

    buildStructuredMessage(text) {
        const fragment = document.createDocumentFragment();
        const blocks = this.splitBlocks(String(text ?? ""));

        if (!blocks.length) {
            fragment.appendChild(this.createParagraph(String(text ?? "")));
            return fragment;
        }

        blocks.forEach(lines => {
            if (!lines.length) return;

            if (this.isPlanHeading(lines[0])) {
                fragment.appendChild(this.buildPlanDay(lines));
                return;
            }

            if (lines.length >= 2 && lines.length <= 6 && lines.every(line => this.isKeyValueLine(line))) {
                fragment.appendChild(this.buildInfoGrid(lines));
                return;
            }

            if (lines[0].endsWith(":") && lines.length > 1) {
                fragment.appendChild(this.buildTitledSection(lines));
                return;
            }

            if (lines.every(line => this.isBulletLine(line))) {
                fragment.appendChild(this.buildBulletSection(lines));
                return;
            }

            fragment.appendChild(this.buildParagraphBlock(lines));
        });

        return fragment;
    }

    async addBotMessageTyping(text, speed = 8) {
        const fullText = String(text ?? "");

        return new Promise(resolve => {
            const { wrapper, content } = this.createMessageShell("bot");

            wrapper.classList.add("typing");
            this.chatContainer.appendChild(wrapper);
            this.scrollToBottom();

            let index = 0;
            const typeChar = () => {
                if (index < fullText.length) {
                    content.textContent += fullText[index++];
                    this.scrollToBottom();
                    setTimeout(typeChar, speed);
                } else {
                    wrapper.classList.remove("typing");
                    content.textContent = "";
                    content.appendChild(this.buildStructuredMessage(fullText));
                    this.scrollToBottom();
                    resolve();
                }
            };

            typeChar();
        });
    }

    clearChat() {
        if (!confirm("Seguro que quieres borrar la conversacion?")) return;
        this.chatContainer.innerHTML = "";
        this.userInput.value = "";
        window.chatController?.clearConversation?.();
    }
}
