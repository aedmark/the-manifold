# Vedas Agent Protocol

Canonical instruction file for coding agents working in **Vedas** (an experimental, epistemologically grounded fork of The Manifold).

## The Six Vedāṅgas (Architectural Limbs)

The agent operates strictly within the six disciplines of Vedic knowledge preservation:

### 1. Kalpa: The Session Ritual Loop
Every agent session must follow the five invariant stages:

1. **Śravaṇa (Attentive Reading):**
   - Read [`docs/HANDOFF.md`](docs/HANDOFF.md), [`docs/INVARIANTS.md`](docs/INVARIANTS.md), and the active roadmap item in [`ROADMAP.md`](ROADMAP.md).
   - Inspect `git status` and recent diffs. Verify environment and working state before editing.
   - Purge *Adhyāsa* (superimposition of pre-trained framework, library, or architectural priors, `INV-010`). Treat any convention not grounded in a `[CONTRACT]` or `[OBSERVED]` repository file as unverified.
2. **Manana (Reflective Scoping):**
   - Propose exactly one reviewable, bounded change.
   - Check the local part against the architectural whole ([`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md), [`docs/DECISIONS.md`](docs/DECISIONS.md)) and confirm that the proposed change does not contradict any Śruti invariant (`INV-NNN`).
   - Establish *Pūrva-Pakṣa* (Origin-Question Reconstruction): before removing or altering an existing constraint, guard, or architectural boundary, trace its originating decision (`D-NNN`), invariant (`INV-NNN`), or commit rationale (`INV-004`). If the originating question is unrecorded, halt and issue *Praśna* (`INV-009`) before removing the fence.
   - Identify *Saṃśaya* (underspecified intent, unstated assumptions, or competing interpretations) and ask concise clarifying questions (*Praśna*) before building (`INV-009`). Never guess silently.
   - If a question cannot be answered in the current turn, record it under Open questions in [`docs/DECISIONS.md`](docs/DECISIONS.md) instead of committing an assumption.
3. **Nididhyāsana (Meditative Building):**
   - Implement the change with surgical precision.
   - Maintain *Sūtra* density: zero filler, minimal tokens, unequivocal statements.
   - Update documentation in lockstep with code.
   - Execute *Āvartana* (Spiral Loopback): if implementation invalidates a premise established in *Manana*, halt immediately and return to Stage 2 (*Manana*) to re-scope or issue *Praśna* (`INV-009`). Never widen scope mid-build.
4. **Pramāṇa-Parīkṣā (Epistemic Verification):**
   - Run tests according to [`docs/TESTING.md`](docs/TESTING.md) using the Nyāya 5-step sequence (*Pañca-Avayava*).
   - Negative Proof Grounding (`INV-007`): A new test must fail on the old code before being trusted on the new code.
   - Honor *Pratibandha* (Textual Resistance): when a test, type check, or existing contract resists the planned change, never bypass it with a silent fallback, weakened assertion, or linter suppression (`INV-007`, `INV-009`). Halt, surface the contradiction via *Praśna*, or record the anomaly as `[HYPOTHESIS]` awaiting maintainer resolution.
   - If verification reveals a part-whole contradiction against scoped assumptions, trigger *Āvartana* and return to *Manana* (`INV-009`).
   - Classify all verification claims using formal *Pramāṇa* tags:
     - `[OBSERVED]`: directly run and proven this session.
     - `[DEDUCED]`: mathematically or logically derived from types/invariants.
     - `[CONTRACT]`: established by canonical external specification.
     - `[HYPOTHESIS]`: temporary conjecture awaiting empirical proof.
     - `[UNTESTED]`: explicit boundary of what was *not* run.
5. **Saṃgraha (Handoff & Closure):**
   - Rewrite the current state in [`docs/HANDOFF.md`](docs/HANDOFF.md) (staying under the 80-line Chandas limit, `INV-005`).
   - Append the session entry to the session log.
   - Run `python3 tools/check_vedas.py` and ensure a clean exit.

---

### 2. Vyākaraṇa: Formal Contract Grammar
The standard-library Python checker [`tools/check_vedas.py`](tools/check_vedas.py) acts as the formal linguistic engine. It refuses:
- Leftover placeholders (`{{...}}`).
- Dangling or duplicate `P-`, `D-`, `Q-`, or `INV-` references (`INV-004`).
- Lexical Firewall violations: em dashes (`—`) across docs (`INV-006`).
- Missing or malformed *Pramāṇa* tags in current state claims (`INV-003`).
- Handoffs exceeding the 80-line cap or harboring more than 10 sessions (`INV-005`).

---

### 3. Nirukta: Canonical Lexicon (Names and Terms)

To prevent semantic drift across different model weights or contexts, adhere to canonical terminology:

| Canonical Term | Vedic Epistemic Meaning | Distinct From / Not To Be Confused With |
| :--- | :--- | :--- |
| **Śruti** | Immutable, non-negotiable architectural invariant (`INV-001` - `INV-010`) | Configurable parameters, temporary preferences |
| **Smṛti** | Epochal architectural guidance, conventions, and ADR history | Ephemeral current status |
| **Vartamāna** | The rewritten, immediate present state (`HANDOFF.md`) | Historical project log, changelog |
| **Pramāṇa** | Formally validated means of knowledge with explicit proof source | Unverified inference, hallucinated claim |
| **Adhyāsa** | Illegitimate superimposition of pre-trained model priors onto the repository (`INV-010`) | Verified `[CONTRACT]` or `[OBSERVED]` repository truth |
| **Saṃśaya** | Recognized ambiguity or part-whole tension blocking sound deduction | Silent assumption or blind execution |
| **Praśna** | Targeted clarifying inquiry issued prior to implementation (`INV-009`) | Post-hoc excuse or open-ended chat |
| **Āvartana** | Spiral part-whole loopback from *Nididhyāsana* or *Pramāṇa* back to *Manana* when a premise breaks (`INV-009`) | Linear, one-way execution that forces a broken plan through |
| **Pratibandha** | Epistemic resistance when code, tests, or contracts contradict a planned change (`INV-007`, `INV-009`) | An obstacle to route around via workarounds or weakened checks |
| **Pūrva-Pakṣa** | Reconstructing the originating question or failure mode behind an existing constraint before altering it (`INV-004`, `INV-009`) | Blindly refactoring or deleting unfamiliar guards (Chesterton's Fence) |
| **Sūtra** | High-density, minimal-syllable proposition (<25 words) | Discursive, conversational explanation |
| **Sūtra Consolidator** | Subconscious distillation of episodic memory into durable invariants (`INV-008`) | Raw conversation logging, lossy summarization |
| **Śūnya** | The fresh, unconditioned context window primed for pure deduction | Defective amnesia or memory loss |

---

### 4. Chandas: Metrical Economy (Token Constraints)
- **Handoff Limit:** "Current state" in [`docs/HANDOFF.md`](docs/HANDOFF.md) is capped at **80 lines** (`INV-005`).
- **Log Limit:** The session log retains a maximum of **10 sessions**; older entries move to [`docs/archive/`](docs/archive/README.md).
- **Sūtra Conciseness:** Decision records in [`docs/DECISIONS.md`](docs/DECISIONS.md) must be concise and axiomatic, avoiding narrative fluff.

---

### 5. Jyotiṣa: Chronometry and Phasing
- Work is sequenced through permanent, immutable identifiers in [`ROADMAP.md`](ROADMAP.md): `P<phase>-<nn>`.
- Phases indicate structural evolution; IDs are never renumbered or repurposed.

---

### 6. Śikṣā: Signal Fidelity and Lexical Firewall
- **Lexical Firewall (`INV-006`):** Zero em dashes (`—`) in prose, comments, or commits; conversational structure uses commas, semicolons, or parentheses.
- No extraneous modifications, phantom whitespace, or unwanted formatting changes.
- Never commit secrets, tokens, or personal identifiers.
- Preserve user edits; never clean or reset git history without explicit maintainer decree.

---

## Repository Map

| Path | Vedāṅga / Layer | Purpose |
| :--- | :--- | :--- |
| `AGENTS.md` | Smṛti / Kalpa | Canonical agent instructions and session protocol |
| `CLAUDE.md` | Smṛti / Pointer | Pointer importing `AGENTS.md` |
| `README.md` | Smṛti / Overview | Public introduction and Vedic methodology |
| `ROADMAP.md` | Jyotiṣa | Planned phases and stable task IDs |
| `docs/README.md` | Smṛti / Map | Documentation ownership and update triggers |
| `docs/INVARIANTS.md` | **Śruti** | Immutable system invariants |
| `docs/HANDOFF.md` | **Vartamāna** | Ephemeral current state with Pramāṇa tags |
| `docs/ARCHITECTURE.md` | Smṛti / Structure | System shape, interfaces, and boundary topology |
| `docs/DECISIONS.md` | Smṛti / History | Append-only Sūtra ADRs and open questions |
| `docs/TESTING.md` | Smṛti / Proof | Verification commands and proof boundaries |
| `docs/SECURITY.md` | Smṛti / Safeguards | Trust boundaries and secret handling |
| `docs/CONTRIBUTING.md` | Kalpa / Ritual | Collaborative ritual for human & agent pairs |
| `docs/CHANGELOG.md` | Smṛti / History | User-visible evolutions |
| `docs/archive/` | Smṛti / Archive | Retired sessions and completed phases |
| `tools/check_vedas.py` | Vyākaraṇa | Structural and reciprocal Ghana-pāṭha checker |

---

## Run and Verify

- Self-check (template mode): `python3 tools/check_vedas.py --template`
- Full check (active repository): `python3 tools/check_vedas.py`
