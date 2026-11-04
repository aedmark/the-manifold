# Vedas Roadmap

Stable IDs: `P<phase>-<nn>`. Never renumbered or repurposed.
Status boxes: `[ ]` planned, `[~]` in progress, `[x]` finished, `[-]` dropped.

## Phase 1: Vedic Memory Architecture

- [x] P1-01: Fork The Manifold into dedicated `vedas/` experimental directory with core documents
- [x] P1-02: Codify Śruti Invariants specification in `docs/INVARIANTS.md` (`INV-NNN` schema)
- [x] P1-03: Formalize Pramāṇa provenance tags (`[OBSERVED]`, `[DEDUCED]`, `[CONTRACT]`, `[HYPOTHESIS]`, `[UNTESTED]`)
- [x] P1-04: Implement Sūtra-dense formulation for decisions in `docs/DECISIONS.md`
- [x] P1-05: Author `tools/check_vedas.py` with Ghana-pāṭha reciprocal verification

## Phase 2: Tooling and Reciprocal Verification

- [ ] P2-01: Add automated Sūtra token-entropy and word-density linter to `check_vedas.py`
- [ ] P2-02: Implement AST-level cross-validation between `docs/INVARIANTS.md` and codebase code contracts
- [ ] P2-03: Add automated Pramāṇa tag consistency validator checking test run logs against handoff claims

## Phase 3: Agentic Rigour Experiments

- [ ] P3-01: Benchmark context retention of standard Manifold vs Vedas Sūtra compression across 20 simulated sessions
- [ ] P3-02: Measure hallucination rate on unverified assertions with and without mandatory Pramāṇa tagging
- [ ] P3-03: Document comparative findings in `docs/DECISIONS.md`
