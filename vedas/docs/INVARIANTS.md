# Śruti: System Invariants

This document contains the immutable, axiomatic invariants of **Vedas**.
While architectural documents and handoff logs adapt to circumstances (*Smṛti* and *Vartamāna*), these invariants represent foundational laws. They cannot be amended without formal consensus and explicit re-consecration of the repository.

Identifiers: `INV-NNN`. Permanent and immutable.

---

## INV-001: Zero External Dependencies
- **Axiom:** The core repository protocol, memory structures, and verification tools must execute using exclusively standard-library utilities (e.g., Python standard library `re`, `sys`, `pathlib`).
- **Rationale:** A memory protocol that requires an external runtime or third-party packages to verify its own integrity introduces circular vulnerability and fragility across environments.
- **Enforcement:** `tools/check_vedas.py` must import only standard modules.

---

## INV-002: Single Source of Truth (*Ekam Sat*)
- **Axiom:** Every system fact, state, decision, or boundary owns exactly one authoritative home file. If two documents can disagree, one of them is illegitimate.
- **Rationale:** Semantic drift and hallucination thrive when redundant descriptions exist. Link to the canonical owner; never duplicate.
- **Enforcement:** Document ownership matrix in [`docs/README.md`](README.md).

---

## INV-003: Explicit Pramāṇa Grounding
- **Axiom:** No claim of current operational capability, test passage, or runtime behavior may appear in [`docs/HANDOFF.md`](HANDOFF.md) without an explicit *Pramāṇa* tag:
  - `[OBSERVED]` (*Pratyakṣa*): Directly run and proven in the current session.
  - `[DEDUCED]` (*Anumāna*): Invariantly derived from types, logic, or mathematical necessity.
  - `[CONTRACT]` (*Śabda*): Prescribed by authoritative maintainer decree.
  - `[HYPOTHESIS]` (*Arthāpatti*): Speculative assumption requiring empirical verification.
  - `[UNTESTED]` (*Anupalabdhi*): Explicit boundary of non-observation.
- **Rationale:** Blurring the line between what is proven and what is assumed is the primary mechanism of agent failure.
- **Enforcement:** Checked by `tools/check_vedas.py`.

---

## INV-004: Ghana-pāṭha Reciprocal Integrity
- **Axiom:** All references across contracts must exhibit bidirectional semantic consistency:
  - If a decision (`D-NNN`) touches an invariant, it must explicitly reference the invariant ID (`INV-NNN`).
  - If a handoff lists a pending step, it must correspond to an active, uncompleted item in [`ROADMAP.md`](../ROADMAP.md).
- **Rationale:** Cyclic validation prevents dead references and ensures that the repository remains self-contained.
- **Enforcement:** Bidirectional cross-reference scanning in `tools/check_vedas.py`.

---

## INV-005: Chandas Boundary Preservation
- **Axiom:** Current state memory must fit within a bounded cognitive window.
  - "Current state" in [`docs/HANDOFF.md`](HANDOFF.md) shall not exceed **80 lines**.
  - Active session log shall not exceed **10 sessions**.
- **Rationale:** Unbounded documentation generates token dilution, degrading agent reasoning.
- **Enforcement:** Line count checks in `tools/check_vedas.py`.

---

## INV-006: Lexical Firewall (Śikṣā)
- **Axiom:** Zero em dashes (`—`) or decorative typographic padding in documentation, code comments, and commit messages. Prose uses standard spoken punctuation: commas, semicolons, or parentheses.
- **Rationale:** Artificial punctuation is a hallmark of corporate RLHF filler and ungrounded generation; colloquial precision anchors agent voice.
- **Enforcement:** Enforced natively by `tools/check_vedas.py`.

---

## INV-007: Negative Proof Grounding (Vyatireka Pramāṇa)
- **Axiom:** A new test must fail on the pre-change codebase before being trusted to verify the post-change codebase (*Udāharaṇa* / *Vyatireka*).
- **Rationale:** Tautological tests that pass regardless of underlying implementation create illusory security. Proof requires observing failure on defect and passage on fix.
- **Enforcement:** Mandated by the Nyāya 5-step verification protocol in [`docs/TESTING.md`](TESTING.md).

---

## INV-008: Subconscious Sūtra Consolidation
- **Axiom:** Long-term memory distillation must compress episodic reflections into minimal-syllable, high-density invariant propositions (under 25 words), purged of conversational filler and sycophantic boilerplate.
- **Rationale:** Episodic memories balloon context tokens; distilling them during idle or sleep cycles preserves enduring truth at minimal token cost.
- **Enforcement:** Sūtra density rules in [`docs/ARCHITECTURE.md`](ARCHITECTURE.md).

---

## INV-009: Zero Silent Assumptions (Saṃśaya-Ccheda)
- **Axiom:** Unverified assumptions may never be silently compiled into implementation. When requirements, scope, or part-whole architecture admit multiple valid interpretations (*Saṃśaya*), the agent must halt and ask targeted clarifying questions (*Praśna*) or record an explicit open question (`Q-NNN` in [`docs/DECISIONS.md`](DECISIONS.md)) before building.
- **Rationale:** Silent assumptions convert pre-execution ambiguity into architectural drift and wasted implementation cycles.
- **Enforcement:** Mandated by Stage 2 (*Manana*) of the Session Ritual in [`AGENTS.md`](../AGENTS.md).

---

## INV-010: Anti-Superimposition (Adhyāsa-Nirāsa)
- **Axiom:** Pre-trained model priors (assumed build steps, package managers, framework conventions, or implicit directory roles) may never be superimposed (*Adhyāsa*) onto the repository. Every architectural or operational convention relied upon must trace to an explicit `[CONTRACT]` or `[OBSERVED]` source in the repository.
- **Rationale:** A fresh context window (*Śūnya*) clears chat history, not model weights; unexamined training defaults corrupt bespoke repository architectures on entry.
- **Enforcement:** Mandated by Stage 1 (*Śravaṇa*) of the Session Ritual in [`AGENTS.md`](../AGENTS.md).
