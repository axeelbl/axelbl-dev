import json
import sys
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

from fastapi.testclient import TestClient


BACKEND_DIR = Path(__file__).resolve().parents[1] / "backend"
sys.path.insert(0, str(BACKEND_DIR))

from app import main  # noqa: E402


def completion(text: str, finish_reason: str):
    return SimpleNamespace(
        choices=[
            SimpleNamespace(
                message=SimpleNamespace(content=text),
                finish_reason=finish_reason,
            )
        ]
    )


class FakeCompletions:
    def __init__(self, responses):
        self.responses = iter(responses)
        self.calls = []

    def create(self, **kwargs):
        self.calls.append(kwargs)
        return next(self.responses)


def fake_client(*responses):
    completions = FakeCompletions(responses)
    return SimpleNamespace(chat=SimpleNamespace(completions=completions)), completions


class TennisCompletionTests(unittest.TestCase):
    def test_tennis_answer_continues_after_length_finish_reason(self):
        first = "Análisis largo con contexto, forma reciente y riesgos"
        ending = "Conclusión completa y aviso de juego responsable."
        client, calls = fake_client(
            completion(first, "length"),
            completion(ending, "stop"),
        )

        with patch.object(main, "groq_client", client):
            answer = main.ask_llm("tenista", "Analiza el partido en detalle")

        self.assertEqual(answer, f"{first}\n{ending}")
        self.assertEqual(calls.calls[0]["max_tokens"], main.TENNIS_MAX_TOKENS)
        self.assertEqual(calls.calls[1]["max_tokens"], main.TENNIS_CONTINUATION_MAX_TOKENS)
        self.assertEqual(calls.calls[1]["messages"][-2]["content"], first)
        self.assertIn("termina ahora", calls.calls[1]["messages"][-1]["content"])

    def test_tennis_answer_never_returns_a_still_truncated_partial(self):
        client, calls = fake_client(
            completion("Parte 1", "length"),
            completion("Parte 2", "length"),
        )

        with patch.object(main, "groq_client", client):
            answer = main.ask_llm("tenista", "Escribe una respuesta desmesuradamente larga")

        self.assertEqual(answer, main.FALLBACKS["tenista"])
        self.assertEqual(len(calls.calls), 2)

    def test_tennis_messages_require_a_bounded_complete_answer(self):
        messages = main.build_messages("tenista", "Explica un partido en detalle")

        self.assertEqual(messages[0]["role"], "system")
        self.assertEqual(messages[1]["role"], "system")
        self.assertIn("respuesta completa", messages[1]["content"])
        self.assertIn("no dejes frases", messages[1]["content"])
        self.assertEqual(messages[-1], {"role": "user", "content": "Explica un partido en detalle"})

    def test_other_agents_keep_the_existing_single_call_contract(self):
        client, calls = fake_client(completion("Respuesta CV", "stop"))

        with patch.object(main, "groq_client", client):
            answer = main.ask_llm("cv", "Resume tu experiencia")

        self.assertEqual(answer, "Respuesta CV")
        self.assertEqual(len(calls.calls), 1)
        self.assertEqual(calls.calls[0]["max_tokens"], 700)

    def test_chat_endpoint_serializes_a_long_complete_tennis_answer(self):
        long_answer = "Inicio del análisis. " + ("Juego sólido desde el fondo. " * 180) + "FIN"
        client = TestClient(main.app)

        with patch.object(main, "ask_llm", return_value=long_answer), patch.object(main, "save_lead"):
            response = client.post(
                "/chat",
                headers={"referer": "https://axelbl.dev/agents/tenista/"},
                json={"user_message": "Dame un análisis largo", "history": []},
            )

        self.assertEqual(response.status_code, 200)
        decoded = json.loads(response.content)
        self.assertEqual(decoded["agent"], "tenista")
        self.assertEqual(decoded["bot_message"], long_answer)
        self.assertTrue(decoded["bot_message"].endswith("FIN"))


if __name__ == "__main__":
    unittest.main()
