const BOT_LABEL = "Agente Nur";

export class ChatUI {
    constructor(chatContainer, userInput, sendBtn, clearBtn) {
        this.chatContainer = chatContainer;
        this.userInput = userInput;
        this.sendBtn = sendBtn;
        this.clearBtn = clearBtn;
        this.chatActivity = document.getElementById("chatActivity");
        this.chatActivityText = document.getElementById("chatActivityText");
        this.chatEmpty = document.getElementById("chatEmpty");
        this.afterClear = null;

        this.clearBtn.addEventListener("click", () => this.clearChat());
        this.toggleEmptyState();
    }

    setClearHandler(handler) {
        this.afterClear = handler;
    }

    createMessage(role, label = role === "user" ? "Tu" : BOT_LABEL) {
        const wrapper = document.createElement("article");
        wrapper.classList.add("message", role);

        const meta = document.createElement("div");
        meta.className = "message-meta";
        meta.textContent = `${label} | ${this.getTimeLabel()}`;

        const bubble = document.createElement("div");
        bubble.className = "message-bubble";

        wrapper.append(meta, bubble);
        return { wrapper, bubble };
    }

    getTimeLabel() {
        return new Intl.DateTimeFormat("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date());
    }

    appendBlock(node) {
        this.chatContainer.appendChild(node);
        this.toggleEmptyState();
        this.scrollToBottom({ deferred: true });
    }

    addUserMessage(text) {
        const { wrapper, bubble } = this.createMessage("user");
        bubble.textContent = text;
        this.appendBlock(wrapper);
    }

    addLoadingMessage(text) {
        const { wrapper, bubble } = this.createMessage("bot");
        wrapper.classList.add("loading-message");
        bubble.classList.add("loading-bubble");

        const row = document.createElement("div");
        row.className = "loading-inline";

        const spinner = document.createElement("span");
        spinner.className = "loading-spinner";
        spinner.setAttribute("aria-hidden", "true");

        const label = document.createElement("span");
        label.textContent = text;

        row.append(spinner, label);
        bubble.appendChild(row);
        this.appendBlock(wrapper);
        return wrapper;
    }

    removeBlock(node) {
        if (!node?.parentNode) return;
        node.parentNode.removeChild(node);
        this.toggleEmptyState();
    }

    async addBotMessageTyping(text, speed = 4) {
        return new Promise((resolve) => {
            const { wrapper, bubble } = this.createMessage("bot");
            const source = text ?? "";
            let index = 0;

            bubble.classList.add("is-typing");
            this.renderRichText(bubble, "", { isTyping: true });
            this.appendBlock(wrapper);

            const typeChar = () => {
                index = Math.min(source.length, index + 1);
                this.renderRichText(bubble, source.slice(0, index), { isTyping: index < source.length });
                this.scrollToBottom();

                if (index >= source.length) {
                    bubble.classList.remove("is-typing");
                    resolve();
                    return;
                }

                setTimeout(typeChar, speed);
            };

            typeChar();
        });
    }

    renderRichText(container, text, options = {}) {
        const normalized = (text ?? "").replace(/\r\n/g, "\n");
        const content = normalized.replace(/^\n+/, "");

        container.innerHTML = "";
        container.classList.toggle("is-typing", Boolean(options.isTyping));

        if (!content.trim()) {
            const paragraph = document.createElement("p");
            if (options.isTyping) {
                paragraph.appendChild(this.createCaret());
            }
            container.appendChild(paragraph);
            return;
        }

        const blocks = content.split(/\n{2,}/);

        blocks.forEach((block) => {
            const lines = block.split("\n");
            const meaningfulLines = lines.filter((line) => line.trim().length > 0);

            if (!meaningfulLines.length) {
                return;
            }

            const isBulletList = meaningfulLines.every((line) => /^[*-]\s+/.test(line.trim()));
            const isNumberedList = meaningfulLines.every((line) => /^\d+\.\s+/.test(line.trim()));
            const isHeading = meaningfulLines.length === 1 && /^\*\*[^*][\s\S]*\*\*$/.test(meaningfulLines[0].trim());

            if (isHeading) {
                const heading = document.createElement("h4");
                heading.textContent = meaningfulLines[0].trim().slice(2, -2);
                container.appendChild(heading);
                return;
            }

            if (isBulletList || isNumberedList) {
                const list = document.createElement(isNumberedList ? "ol" : "ul");

                meaningfulLines.forEach((line) => {
                    const item = document.createElement("li");
                    const cleaned = isNumberedList
                        ? line.replace(/^\d+\.\s+/, "")
                        : line.replace(/^[*-]\s+/, "");
                    this.appendInlineFormatting(item, cleaned);
                    list.appendChild(item);
                });

                container.appendChild(list);
                return;
            }

            const paragraph = document.createElement("p");

            lines.forEach((line, lineIndex) => {
                this.appendInlineFormatting(paragraph, line);

                if (lineIndex < lines.length - 1) {
                    paragraph.appendChild(document.createElement("br"));
                }
            });

            container.appendChild(paragraph);
        });

        if (options.isTyping) {
            this.attachCaretToLastRenderable(container);
        }
    }

    appendInlineFormatting(container, text) {
        const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

        parts.forEach((part) => {
            if (!part) return;

            if (/^\*\*[^*]+\*\*$/.test(part)) {
                const strong = document.createElement("strong");
                strong.textContent = part.slice(2, -2);
                container.appendChild(strong);
                return;
            }

            if (/^`[^`]+`$/.test(part)) {
                const code = document.createElement("code");
                code.textContent = part.slice(1, -1);
                container.appendChild(code);
                return;
            }

            container.appendChild(document.createTextNode(part));
        });
    }

    createCaret() {
        const caret = document.createElement("span");
        caret.className = "typing-caret";
        caret.setAttribute("aria-hidden", "true");
        return caret;
    }

    attachCaretToLastRenderable(container) {
        const lastNode = container.lastElementChild;
        if (!lastNode) return;

        if (lastNode.matches("ul, ol")) {
            const lastItem = lastNode.lastElementChild;
            if (lastItem) {
                lastItem.appendChild(this.createCaret());
            }
            return;
        }

        lastNode.appendChild(this.createCaret());
    }

    setPendingState(isPending) {
        if (this.chatActivity) {
            this.chatActivity.classList.toggle("is-thinking", isPending);
        }

        if (this.chatActivityText) {
            this.chatActivityText.textContent = isPending
                ? "Preparando una respuesta serena..."
                : "Listo para ayudarte";
        }
    }

    toggleEmptyState() {
        if (!this.chatEmpty) return;
        this.chatEmpty.classList.toggle("hidden", this.chatContainer.children.length > 0);
    }

    scrollToBottom({ deferred = false } = {}) {
        const scroll = () => {
            this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        };

        scroll();

        if (deferred) {
            requestAnimationFrame(() => {
                requestAnimationFrame(scroll);
            });
        }
    }

    clearChat() {
        if (!confirm("Seguro que quieres borrar la conversacion?")) return;
        this.chatContainer.innerHTML = "";
        this.userInput.value = "";
        this.setPendingState(false);
        this.toggleEmptyState();
        this.userInput.focus();

        if (typeof this.afterClear === "function") {
            this.afterClear();
        }
    }
}
