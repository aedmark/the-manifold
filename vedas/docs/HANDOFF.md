# Session Handoff (Vartamāna)

Read this first upon entering a session. Rewrite the top half whenever current state changes or work pauses.
"Current state" is strictly bounded by the **Chandas limit** (maximum **80 lines**).
Claims must be qualified with explicit **Pramāṇa tags**:
`[OBSERVED]` (direct test/run), `[DEDUCED]` (logical invariant), `[CONTRACT]` (authority), `[HYPOTHESIS]` (unproven), `[UNTESTED]` (boundary).

Protocol: [AGENTS.md](../AGENTS.md). Invariants: [INVARIANTS.md](INVARIANTS.md). Roadmap: [ROADMAP.md](../ROADMAP.md).
Architecture: [ARCHITECTURE.md](ARCHITECTURE.md). Decisions: [DECISIONS.md](DECISIONS.md). Tests: [TESTING.md](TESTING.md).

---

## Current state

Last updated: 2026-11-08, session 2, on `main`: Completed Phase 4 Hermeneutic Circle & Manifold Superset Parity (`INV-009`, `INV-010`, `D-004`, `T-001`).

**Session owner:** {{agent or tool}}, on `main`, since 2026-11-08. {{What is yours until the next handoff; delete this line when no session is live.}}

**Where things stand:**
Vedas is initialized as an experimental fork of The Manifold. Core Śruti invariants (`INV-001` through `INV-010`) are codified, Pramāṇa epistemic taxonomy is defined, and Phase 4 hermeneutic inquiry rules (*Adhyāsa-Nirāsa*, *Saṃśaya* / *Praśna*, *Āvartana*, *Pratibandha*, *Pūrva-Pakṣa*) are integrated across the protocol and field manual.

**Verified:**
| Suite | Result | Pramāṇa |
| :--- | :--- | :--- |
| `python3 tools/check_vedas.py --template` | 0 errors, 0 warnings | `[OBSERVED]` |

**What works:**
- **Repository Architecture** (`INV-001` - `INV-010` in [`INVARIANTS.md`](INVARIANTS.md)): `[OBSERVED]` Complete 3-tier epistemic document suite with 10 reciprocal Śruti axioms.
- **Ghana-pāṭha Checker** ([`tools/check_vedas.py`](../tools/check_vedas.py)): `[OBSERVED]` Verifies placeholders, IDs, reciprocal references, and Chandas limits.
- **Pramāṇa & Hermeneutic Inquiry Protocol**: `[CONTRACT]` Established in [AGENTS.md](../AGENTS.md) and [`INVARIANTS.md`](INVARIANTS.md) (`INV-009`, `INV-010`, `D-004`).

**Not verified (`[UNTESTED]` boundaries):**
- Performance under real multi-agent concurrent writes.
- Token economy benchmarks comparing raw word count vs Sūtra density across extended context windows.

**Gotchas for the next session:**
- Remember to run `python3 tools/check_vedas.py --template` while working with template blanks, or without `--template` once filled.
- Never write an unqualified assertion in "What works"; always include a `[PRAMĀṆA]` tag.

## Next steps (in order)

1. P2-01: Add automated Sūtra token-entropy and word-density linter to `check_vedas.py`
2. P2-02: Implement AST-level cross-validation between `docs/INVARIANTS.md` and codebase code contracts

## Open questions for maintainers

- Q-001: Should Sūtra density rules in `check_vedas.py` be hard errors (exit 1) or Chandas warnings (exit 0)?

---

## Session log

### Session 2: 2026-11-07: Hermeneutic Circle & Epistemic Inquiry Integration

**Contributor:** Gordon & Gemini
**Goal:** Fold the four hermeneutic circle safeguards into The Manifold and Vedas.
**Done:** P4-01, P4-02, P4-03, P4-04
**Changed:** Added `INV-009` and `INV-010` to `docs/INVARIANTS.md`; added *Adhyāsa*, *Saṃśaya*, *Praśna*, *Āvartana*, *Pratibandha*, and *Pūrva-Pakṣa* to `AGENTS.md`, `docs/ARCHITECTURE.md`, `docs/CONTRIBUTING.md`, `docs/DECISIONS.md`, and `index.html`.
**Decisions:** D-004
**Verified:** `tools/check_vedas.py --template` passed with 0 errors and 0 warnings (`[OBSERVED]`).

### Session 1: 2026-11-03: Inception of Vedas Experimental Fork

**Contributor:** Gordon & Gemini
**Goal:** Fork The Manifold into an epistemologically grounded experimental architecture (Vedas).
**Done:** P1-01, P1-02, P1-03, P1-04, P1-05
**Changed:** Initialized `vedas/` directory, core documents, and `tools/check_vedas.py`.
**Decisions:** D-001, D-002, D-003
**Verified:** `tools/check_vedas.py --template` passed cleanly (`[OBSERVED]`).
