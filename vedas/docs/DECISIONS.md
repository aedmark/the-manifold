# Architectural Decisions (Smṛti)

Append-only record of consequential architectural choices.
Reversals supersede; they do not erase history. Each entry preserves the *Pūrva-Pakṣa* (the originating problem and rejected alternatives) so future sessions reconstruct why a constraint exists before superseding it.
Formulated with **Sūtra density**: minimal syllables, maximal semantic mass, unequivocal assertions.

Decisions: `D-NNN` in strict ascending order.
Open questions: `Q-NNN` in strict ascending order.

---

## D-001: Separation into Dedicated `vedas/` Fork
- **Axiom Link:** [`INV-001`](INVARIANTS.md), [`INV-002`](INVARIANTS.md)
- **Proposition:** Isolate Vedic epistemic upgrades inside `/vedas` rather than modifying the root Manifold.
- **Alternatives:** In-place alteration of root Manifold files; separate git repository.
- **Rationale:** Preserves pristine template integrity of The Manifold while enabling rapid experimentation with Vedic knowledge structures in the same workspace.
- **Consequence:** Two parallel checkers exist (`tools/check_docs.py` for root; `vedas/tools/check_vedas.py` for Vedas).

---

## D-002: Three-Speed Memory Hierarchy (Śruti / Smṛti / Vartamāna)
- **Axiom Link:** [`INV-002`](INVARIANTS.md)
- **Proposition:** Structure project truth into three temporal velocities: immutable axioms (`INVARIANTS.md`), epochal law (`AGENTS.md`, `ARCHITECTURE.md`), and ephemeral state (`HANDOFF.md`).
- **Alternatives:** Maintain The Manifold's binary rewrite-vs-append dichotomy.
- **Rationale:** Binary speeds fail to protect core architectural axioms from gradual semantic erosion during long multi-session projects.
- **Consequence:** Modifying `docs/INVARIANTS.md` requires explicit human maintainer re-consecration.

---

## D-003: Mandatory Pramāṇa Provenance Tagging
- **Axiom Link:** [`INV-003`](INVARIANTS.md)
- **Proposition:** Require `[OBSERVED]`, `[DEDUCED]`, `[CONTRACT]`, `[HYPOTHESIS]`, or `[UNTESTED]` tags on all state assertions.
- **Alternatives:** Unstructured prose disclaimers in `Not verified`.
- **Rationale:** LLMs conflate inference with execution; explicit epistemic classification prevents hallucinated competence from propagating into future sessions.
- **Consequence:** Increased authoring discipline during session handoff; automated checker can reject untagged claims.

---

## D-004: Hermeneutic Circle & Pre-Execution Epistemic Inquiry
- **Axiom Link:** [`INV-004`](INVARIANTS.md), [`INV-007`](INVARIANTS.md), [`INV-009`](INVARIANTS.md), [`INV-010`](INVARIANTS.md)
- **Proposition:** Codify `INV-009` (*Saṃśaya-Ccheda* / *Praśna*), `INV-010` (*Adhyāsa-Nirāsa*), spiral *Āvartana* loopback, *Pratibandha* stop-triggers, and *Pūrva-Pakṣa* fence reconstruction across the Kalpa loop.
- **Alternatives:** Rely on post-hoc handoff verification alone (`INV-003`) without governing pre-execution ambiguity or training-prior superimposition.
- **Rationale:** Post-hoc checks catch false test claims after work is done, whereas pre-execution inquiry prevents silent assumptions, training-prior projection, workaround smoothing, and blind constraint deletion before code is written.
- **Consequence:** Agents halt and ask clarifying questions (*Praśna*) or loop back (*Āvartana*) whenever intent, priors, tests, or historical constraints conflict.

---

## Open questions

### Q-001: Enforcement Level for Sūtra Density in Checker
- **Blocks:** P2-01
- **Question:** Should word/token counts exceeding sūtra density thresholds in `docs/DECISIONS.md` trigger hard errors (exit 1) or Chandas warnings (exit 0)?
- **Hypothesis:** Warnings (exit 0) preserve development velocity while maintaining awareness, reserving hard errors for link or reference violations.
