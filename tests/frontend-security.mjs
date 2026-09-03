import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

globalThis.window = { location: { origin: "https://axelbl.dev" } };

const source = await readFile(
    new URL("../frontend/agents/tenista/js/chat.js", import.meta.url),
    "utf8",
);
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const { ChatController } = await import(moduleUrl);
const controller = Object.create(ChatController.prototype);

test("external URL sanitizer accepts web URLs", () => {
    assert.equal(controller.getCleanExternalUrl("https://example.com/story"), "https://example.com/story");
    assert.equal(controller.getCleanExternalUrl("/agents/tenista"), "https://axelbl.dev/agents/tenista");
});

test("external URL sanitizer rejects executable and malformed URLs", () => {
    assert.equal(controller.getCleanExternalUrl("javascript:alert(1)"), "");
    assert.equal(controller.getCleanExternalUrl("data:text/html,unsafe"), "");
    assert.equal(controller.getCleanExternalUrl("https://example .com"), "");
    assert.equal(controller.getCleanExternalUrl(null), "");
});
