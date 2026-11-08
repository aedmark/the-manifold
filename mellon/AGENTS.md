# Mellon Agent Protocol

Canonical instruction file for coding agents working in **Mellon** (*"Speak, friend, and enter"*), the plain-English and Middle-earth edition of [Vedas](../vedas/README.md) and [The Manifold](../README.md).

## The Six Crafts of the Lore-Masters

The agent operates strictly within the six disciplines of durable knowledge preservation:

### 1. The Fellowship Quest Loop (Session Ritual)
Every agent session follows five invariant stages:

1. **Scouting at Amon Hen (Read & Drop Illusions):**
   - Read [`docs/HANDOFF.md`](docs/HANDOFF.md), [`docs/INVARIANTS.md`](docs/INVARIANTS.md), and the active quest item in [`ROADMAP.md`](ROADMAP.md).
   - Inspect `git status` and recent diffs. Verify the environment and working state before editing.
   - Ban **Saruman's Voice** (Prior Projection, `INV-010`): do not project pre-trained framework, library, or architectural defaults onto the repository. Treat any convention not grounded in a `[CONTRACT]` or `[OBSERVED]` file as unverified.
2. **The Council of Elrond (Scope & Ask Questions):**
   - Propose exactly one reviewable, bounded change.
   - Check the local part against the architectural whole ([`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md), [`docs/DECISIONS.md`](docs/DECISIONS.md)) and confirm that the proposed change does not violate any Elder Rune (`INV-NNN`).
   - Honor **The Doors of Durin** ("Speak, Friend, and Enter" / Chesterton's Gate, `INV-004`, `INV-009`): before removing or altering an existing constraint, guard clause, or boundary, trace its originating decision (`D-NNN`), invariant (`INV-NNN`), or commit rationale. If the originating riddle is unrecorded, stop and ask the maintainer before tearing down the gate.
   - Resolve **Riddles in the Dark** (`INV-009`): identify underspecified intent, unstated assumptions, or competing interpretations, and ask concise clarifying questions (**Speak, Friend**) before building. Never guess silently.
   - If a question cannot be answered in the current turn, record it under Open questions in [`docs/DECISIONS.md`](docs/DECISIONS.md) instead of committing an assumption.
3. **The Forge of Celebrimbor (Build in Mithril Prose):**
   - Implement the change with surgical precision.
   - Maintain **Mithril Prose**: light as a feather, hard as dragon scales (zero filler, minimal tokens, unequivocal statements).
   - Update documentation in lockstep with code.
   - **Turn Back at Caradhras** (Spiral Loopback, `INV-009`): if implementation invalidates a premise established at the Council of Elrond, halt immediately and loop back to Stage 2 to re-scope or ask clarifying questions. Never widen scope in the snow.
4. **Trial at Khazad-dûm (Verify & Badge):**
   - Run tests according to [`docs/TESTING.md`](docs/TESTING.md) using the 5-step **Ranger's Trial**.
   - **Sting's Blue Glow** (Negative Proof Grounding, `INV-007`): like Bilbo's blade glowing blue when Orcs are near, a new test must fail on the old broken code before being trusted when it passes on the new code.
   - Honor **"You Shall Not Pass!"** (The Balrog Stop-Trigger, `INV-007`, `INV-009`): when a test, type check, or existing contract blocks your path, never sneak around it with a silent fallback, weakened assertion, or linter suppression. Halt, surface the contradiction to the maintainer, or record the anomaly as `[HYPOTHESIS]`.
   - If verification exposes a part-whole contradiction against scoped assumptions, **Turn Back at Caradhras** (return to Stage 2, `INV-009`).
   - Classify all verification claims using formal **Proof Badges**:
     - `[OBSERVED]`: directly run and proven in this session.
     - `[DEDUCED]`: logically derived from types, schemas, or invariants.
     - `[CONTRACT]`: established by authoritative maintainer decree or specification.
     - `[HYPOTHESIS]`: temporary conjecture awaiting empirical proof.
     - `[UNTESTED]`: explicit boundary of what was *not* run.
5. **Lighting the Watchfire (Handoff & Closure):**
   - Rewrite the current state in [`docs/HANDOFF.md`](docs/HANDOFF.md) (staying under the 80-line Mithril limit, `INV-005`).
   - Append the session entry to the session log.
   - Run `python3 tools/check_mellon.py` and ensure a clean exit.

---

### 2. The Palantír Linter: Formal Contract Grammar
The standard-library Python checker [`tools/check_mellon.py`](tools/check_mellon.py) acts as the seeing-stone. It refuses:
- Leftover placeholders (`{{...}}`).
- Dangling or duplicate `P-`, `D-`, `Q-`, or `INV-` references (`INV-004`).
- Black Speech / Lexical Firewall violations: em dashes (`—`) across prose (`INV-006`).
- Missing or malformed Proof Badges in current state claims (`INV-003`).
- Watchfire handoffs exceeding the 80-line cap or harboring more than 10 sessions (`INV-005`).

---

### 3. The Elvish Lexicon: Canonical Names and Terms

To prevent semantic drift across different model weights or sessions, adhere to canonical terminology (see [`docs/GLOSSARY.md`](docs/GLOSSARY.md) for the full table):

| Canonical Term | Plain English Meaning | Distinct From / Not To Be Confused With |
| :--- | :--- | :--- |
| **Elder Runes** | Immutable, non-negotiable architectural invariants (`INV-001` - `INV-010`) | Configurable parameters, temporary preferences |
| **The Red Book** | Append-only architectural guidance, conventions, and decision history | Ephemeral current status |
| **Watchfire Log** | The rewritten, immediate present state (`docs/HANDOFF.md`, <= 80 lines) | Historical project log, changelog |
| **Proof Badge** | Formally validated source of proof (`[OBSERVED]`, `[DEDUCED]`, etc., `INV-003`) | Unverified inference, hallucinated claim |
| **Saruman's Voice** | Illegitimate projection of pre-trained model priors onto the repo (`INV-010`) | Verified `[CONTRACT]` or `[OBSERVED]` repository truth |
| **Riddles in the Dark** | Recognized ambiguity or part-whole gap blocking sound execution (`INV-009`) | Silent assumption or blind guessing |
| **Speak, Friend** | Targeted clarifying question issued prior to implementation (`INV-009`) | Post-hoc excuse or open-ended chat |
| **Turn Back at Caradhras** | Spiral part-whole loopback from Build/Verify back to Scope when a premise breaks (`INV-009`) | Linear tunnel vision that forces a broken plan through |
| **You Shall Not Pass!** | Epistemic resistance when code, tests, or contracts contradict a planned change (`INV-007`, `INV-009`) | An obstacle to route around via workarounds or weakened checks |
| **Doors of Durin** | Reconstructing the originating problem (`D-NNN`, `INV-NNN`) behind a guard before altering it (`INV-004`, `INV-009`) | Blindly deleting unfamiliar fences (Chesterton's Fence) |
| **Mithril Prose** | High-density, minimal-word proposition (<25 words, zero fluff) | Discursive, conversational explanation |
| **Elven Sleep** | Subconscious distillation of episodic memory into durable Mithril rules (`INV-008`) | Raw conversation logging, lossy summarization |
| **New Traveler** | The fresh, unconditioned context window arriving with zero prior session memory | Defective amnesia or system failure |

---

### 4. Mithril Economy: Token and Line Bounds
- **Watchfire Limit:** "Current state" in [`docs/HANDOFF.md`](docs/HANDOFF.md) is capped at **80 lines** (`INV-005`).
- **Log Limit:** The session log retains a maximum of **10 sessions**; older entries move to [`docs/archive/`](docs/archive/README.md).
- **Mithril Conciseness:** Decision records in [`docs/DECISIONS.md`](docs/DECISIONS.md) must be concise and axiomatic, avoiding narrative fluff (`INV-008`).

---

### 5. The Shire Reckoning: Chronometry and Phasing
- Work is sequenced through permanent, immutable identifiers in [`ROADMAP.md`](ROADMAP.md): `P<phase>-<nn>`.
- Phases indicate structural evolution; IDs are never renumbered or repurposed.

---

### 6. The Elvish Tongue: Signal Fidelity and Lexical Firewall
- **No Black Speech (`INV-006`):** Zero em dashes (`—`) in prose, comments, or commits; conversational structure uses commas, semicolons, or parentheses.
- No extraneous modifications, phantom whitespace, or unwanted formatting changes.
- Never commit secrets, tokens, or personal identifiers.
- Preserve user edits; never clean or reset git history without explicit maintainer decree.

---

## Repository Map

| Path | Layer / Craft | Purpose |
| :--- | :--- | :--- |
| `AGENTS.md` | Red Book / Quest Loop | Canonical agent instructions and session protocol |
| `CLAUDE.md` | Red Book / Pointer | One-line pointer importing `AGENTS.md` |
| `README.md` | Red Book / Overview | Public introduction and Mellon methodology |
| `ROADMAP.md` | Shire Reckoning | Planned phases and stable quest IDs |
| `docs/README.md` | Red Book / Map | Documentation ownership and update triggers |
| `docs/INVARIANTS.md` | **Elder Runes** | Immutable system invariants (`INV-001` - `INV-010`) |
| `docs/HANDOFF.md` | **Watchfire Log** | Ephemeral current state with Proof Badges |
| `docs/ARCHITECTURE.md` | Red Book / Structure | System shape, interfaces, and boundary topology |
| `docs/DECISIONS.md` | Red Book / History | Append-only Mithril ADRs and open questions |
| `docs/TESTING.md` | Red Book / Proof | Verification commands, Sting's Blue Glow, and proof boundaries |
| `docs/SECURITY.md` | Red Book / Wards | Trust boundaries and secret handling |
| `docs/CONTRIBUTING.md` | Quest Loop | Collaborative ritual for human & agent Fellowship |
| `docs/CHANGELOG.md` | Red Book / Chronicle | User-visible evolutions |
| `docs/GLOSSARY.md` | Elvish Lexicon | Full plain-English, Middle-earth, and Vedic translation table |
| `docs/archive/` | Red Book / Archive | Retired sessions and completed roadmap phases |
| `tools/check_mellon.py` | Palantír Linter | Structural and reciprocal verification engine |

---

## Run and Verify

- Self-check (template mode): `python3 tools/check_mellon.py --template`
- Full check (active repository): `python3 tools/check_mellon.py`
