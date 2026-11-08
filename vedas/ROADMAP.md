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

## Phase 4: Hermeneutic Circle & Epistemic Inquiry

- [x] P4-01: Codify Anti-Superimposition (*Adhyāsa-Nirāsa*, `INV-010`) during *Śravaṇa* to separate observed repository contracts from pre-trained model priors
- [x] P4-02: Formalize the Spiral Kalpa Loopback (*Āvartana*, `INV-009`) returning from *Nididhyāsana* or *Pramāṇa-Parīkṣā* to *Manana* when part-whole assumptions break
- [x] P4-03: Codify Textual Resistance (*Anstoß* / *Pratibandha*, `INV-007`, `INV-009`) as a mandatory stop-and-inquire trigger prohibiting silent workarounds
- [x] P4-04: Enforce Origin-Question Reconstruction (*Pūrva-Pakṣa* / Chesterton's Fence, `INV-004`, `INV-009`) before altering or removing existing constraints

**What Phase 4 taught:** Post-hoc verification catches false claims after execution, whereas pre-execution inquiry (*Praśna*), prior-purging (*Adhyāsa-Nirāsa*), and spiral loopback (*Āvartana*) prevent silent assumptions before code is written.
