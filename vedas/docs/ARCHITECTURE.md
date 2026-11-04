# System Architecture (Smṛti)

Describes the structural shape, interfaces, invariants, and failure modes of **Vedas**.
Current truth: if an architectural claim is no longer accurate, rewrite it; obsolete models belong in history.

---

## System Topology

Vedas establishes an epistemic memory boundary around the disposable AI agent context window:

```
                      ┌────────────────────────────┐
                      │    AI Context (Śūnya)      │
                      │  Empty, unconditioned,     │
                      │   ephemeral potentiality   │
                      └─────────────┬──────────────┘
                                    │ Projects from & Writes to
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 VEDAS MEMORY MANIFOLD                   │
       ├─────────────────────────────────────────────────────────┤
       │  ŚRUTI LAYER (docs/INVARIANTS.md)                       │
       │  - Axioms INV-001 through INV-008                       │
       │  - Immutable foundational laws                          │
       ├─────────────────────────────────────────────────────────┤
       │  SMṚTI LAYER (AGENTS.md, ARCHITECTURE.md, DECISIONS.md) │
       │  - The Six Vedāṅgas (Protocol, Lexicon, Grammar...)     │
       │  - Sūtra ADRs (D-NNN) and Roadmap (P-NNN)               │
       ├─────────────────────────────────────────────────────────┤
       │  VARTAMĀNA LAYER (docs/HANDOFF.md)                      │
       │  - Ephemeral state qualified by Pramāṇa tags            │
       │  - Strict Chandas bound (<= 80 lines)                   │
       ├─────────────────────────────────────────────────────────┤
       │  VYĀKARAṆA LINTER (tools/check_vedas.py)                │
       │  - Ghana-pāṭha bidirectional reciprocal checker         │
       │  - Lexical firewall automated verification              │
       └─────────────────────────────────────────────────────────┘
```

---

## Component Boundaries and Ownership

1. **Śruti (Axiomatic Foundation):**
   - File: [`docs/INVARIANTS.md`](INVARIANTS.md)
   - Scope: System invariants (`INV-001` through `INV-008`).
   - Boundary: Never rewritten by autonomous agents without human re-consecration.

2. **Smṛti (Operational & Historical Governance):**
   - Files: [`../AGENTS.md`](../AGENTS.md), [`ARCHITECTURE.md`](ARCHITECTURE.md), [`DECISIONS.md`](DECISIONS.md), [`TESTING.md`](TESTING.md), [`SECURITY.md`](SECURITY.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), [`CHANGELOG.md`](CHANGELOG.md).
   - Scope: Structural definitions, procedural rules, architectural decisions (`D-NNN`), open questions (`Q-NNN`), and Sūtra patterns.
   - Boundary: Append-only for decisions/changelogs; refined as architecture advances.

3. **Vartamāna (Immediate Operational State):**
   - File: [`docs/HANDOFF.md`](HANDOFF.md)
   - Scope: Current truth, verified tests, what works, unverified gaps, next steps, active session logs.
   - Boundary: Rewritten every session; limited to 80 lines (`INV-005`).

4. **Vyākaraṇa (Verification Engine):**
   - File: [`../tools/check_vedas.py`](../tools/check_vedas.py)
   - Scope: Python stdlib rule checker enforcing placeholder elimination, ID validity, reciprocal linking, lexical firewall (`INV-006`), and Chandas bounds (`INV-005`).

---

## The Subconscious Sūtra Consolidator Pattern (INV-008)

Agentic systems accumulate episodic dialogue, tool outputs, and reflection logs during active turns. Left uncompressed, these records saturate context windows and dilute grounding.

The Sūtra Consolidator pattern acts as a subconscious REM cycle:
1. **Candidate Harvest:** Candidate memories or reflections are gathered during idle or sleep periods.
2. **Epistemic Distillation:** A model distills each candidate into a permanent Sūtra governed by four classical constraints:
   - *Alpākṣaram (Metrical Economy):* Strict token cap (under 25 words).
   - *Asandigdham (Clarity):* Explicit, non-conjectural declarative statements.
   - *Analpatobham (Anti-Fluff):* Stripped of conversational filler, hedging, and therapy clichés.
   - *Anavadyam (Immutability):* Tested against Śruti invariants and the Lexical Firewall (`INV-006`).
3. **Crystallization:** Accepted Sūtras are written to durable associative storage (e.g. `self/memory/sutra.*`) where they are vector-indexed or surfaced as high-density anchor tokens.

---

## Failure Modes and Epistemic Mitigations

| Failure Mode | Mechanism in Standard Agents | Vedic Epistemic Mitigation |
| :--- | :--- | :--- |
| **Cognitive Drift** | Nuanced rules in chat context fade as conversations lengthen. | **Śruti Contracts:** Invariants live in dedicated, immutable files outside the chat (`INV-001`, `INV-002`). |
| **Hallucinated Competence** | Agent assumes untested functions work because they look plausible. | **Pramāṇa Tagging:** Every capability assertion must explicitly state whether it is `[OBSERVED]` or `[UNTESTED]` (`INV-003`). |
| **Tautological Testing** | Tests written post-hoc that never failed on defective code. | **Negative Proof Grounding:** Mandatory proof of failure on pre-change code before accepting tests (`INV-007`). |
| **Semantic Inflation** | Documents balloon with conversational explanations and boilerplate. | **Sūtra Compression:** Minimal-syllable, high-density propositions save context tokens (`INV-008`). |
| **Sycophantic Cliché & Opener Rut** | Model defaults to formulaic validation ("That's a heavy...") and repetitive openers. | **Lexical Firewall & Rut Breaker:** Automated orthographic linter (`INV-006`) and consecutive opener variation rules. |
| **Dangling Intentions** | Tasks mentioned in handoffs are never tracked in roadmaps. | **Ghana-pāṭha Reciprocity:** `check_vedas.py` fails if a handoff step is not an active roadmap item (`INV-004`). |
