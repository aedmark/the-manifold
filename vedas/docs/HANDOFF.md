# Session Handoff (Vartamāna)

Read this first upon entering a session. Rewrite the top half whenever current state changes or work pauses.
"Current state" is strictly bounded by the **Chandas limit** (maximum **80 lines**).
Claims must be qualified with explicit **Pramāṇa tags**:
`[OBSERVED]` (direct test/run), `[DEDUCED]` (logical invariant), `[CONTRACT]` (authority), `[HYPOTHESIS]` (unproven), `[UNTESTED]` (boundary).

Protocol: [AGENTS.md](../AGENTS.md). Invariants: [INVARIANTS.md](INVARIANTS.md). Roadmap: [ROADMAP.md](../ROADMAP.md).
Architecture: [ARCHITECTURE.md](ARCHITECTURE.md). Decisions: [DECISIONS.md](DECISIONS.md). Tests: [TESTING.md](TESTING.md).

---

## Current state

Last updated: 2026-11-03, session 1, on `main`: Initial fork of Vedas established with core epistemic contracts.

**Where things stand:**
Vedas is initialized as an experimental fork of The Manifold. Core Śruti invariants (INV-001 through INV-005) are codified, Pramāṇa epistemic taxonomy is defined, and initial contracts are drafted.

**Verified:**
| Suite | Result | Pramāṇa |
| :--- | :--- | :--- |
| `python3 tools/check_vedas.py --template` | 0 errors | `[OBSERVED]` |

**What works:**
- **Repository Architecture** (`INV-001` - `INV-005` in [`INVARIANTS.md`](INVARIANTS.md)): `[OBSERVED]` Complete 3-tier epistemic document suite.
- **Ghana-pāṭha Checker** ([`tools/check_vedas.py`](../tools/check_vedas.py)): `[OBSERVED]` Verifies placeholders, IDs, reciprocal references, and Chandas limits.
- **Pramāṇa Tagging**: `[CONTRACT]` Established in [AGENTS.md](../AGENTS.md) and enforced by convention.

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

### Session 1: 2026-11-03: Inception of Vedas Experimental Fork

**Contributor:** Gordon & Gemini
**Goal:** Fork The Manifold into an epistemologically grounded experimental architecture (Vedas).
**Done:** P1-01, P1-02, P1-03, P1-04, P1-05
**Changed:** Initialized `vedas/` directory, core documents, and `tools/check_vedas.py`.
**Decisions:** D-001, D-002, D-003
**Verified:** `tools/check_vedas.py --template` passed cleanly (`[OBSERVED]`).
