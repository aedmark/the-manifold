# Mellon Roadmap (Shire Reckoning)

Stable Quest IDs: `P<phase>-<nn>`. Never renumbered or repurposed.
Status boxes: `[ ]` planned, `[~]` in progress, `[x]` finished, `[-]` dropped.

## Phase 1: Foundation of the Red Book

- [x] P1-01: Establish `mellon/` as the plain-English and Middle-earth sibling of `vedas/`
- [x] P1-02: Codify the Ten Elder Runes in `docs/INVARIANTS.md` (`INV-001` through `INV-010`)
- [x] P1-03: Formalize Proof Badges (`[OBSERVED]`, `[DEDUCED]`, `[CONTRACT]`, `[HYPOTHESIS]`, `[UNTESTED]`)
- [x] P1-04: Author `docs/GLOSSARY.md` mapping Plain English, Middle-earth tropes, and Vedic terms
- [x] P1-05: Author `tools/check_mellon.py` (The Palantír Linter) and the interactive Field Manual (`index.html`)

**What Phase 1 taught:** Translating formal epistemic invariants into plain English and familiar Middle-earth metaphors lowers the cognitive barrier to entry while preserving 100% of the mechanical guarantees.

## Phase 2: Palantír Tooling & Verification

- [ ] P2-01: Add automated Mithril Prose word-density linter (<25 words per proposition) to `check_mellon.py`
- [ ] P2-02: Implement AST-level cross-validation between `docs/INVARIANTS.md` and codebase contracts
- [ ] P2-03: Add automated Proof Badge validator comparing test runner receipts against `docs/HANDOFF.md` claims

## Phase 3: Fellowship Benchmarks

- [ ] P3-01: Compare onboarding speed and rule compliance between Sanskrit (`vedas/`) and Plain-English/Middle-earth (`mellon/`) prompts across agent sessions
- [ ] P3-02: Measure reduction in silent guessing under `INV-009` (The Council of Elrond) and `INV-010` (Banning Saruman's Voice)
