# The Non-Negotiables: System Invariants

This document contains the bedrock, non-negotiable invariants of **Totally**.
Architecture files and the Group Chat handoff adapt as the project evolves (**The Receipts** and **The Group Chat**), but these Non-Negotiables are set in stone. You literally cannot sit with us if you break these rules. They cannot be bypassed, relaxed, or edited by an autonomous agent without explicit maintainer sign-off.

Identifiers: `INV-NNN`. Permanent and immutable.

---

## INV-001: Zero External Baggage (Standard Library Only)
- **Axiom:** The core repository protocol, memory structures, and verification tools must run using standard-library utilities exclusively (Python standard library `re`, `sys`, `pathlib`).
- **Rationale:** If your linter needs fifty third-party packages just to check a text file, that is high-maintenance drama that will break the moment dependencies shift.
- **Enforcement:** `tools/check_totally.py` imports only Python standard library modules.

---

## INV-002: One Source of Truth (Don't Be Two-Faced)
- **Axiom:** Every system fact, state, decision, or boundary owns exactly one authoritative home file. If two documents say different things, one of them is fake.
- **Rationale:** Duplicate rules cause hallucinations and mixed signals. Link to the canonical owner; never copy-paste facts across files.
- **Enforcement:** Document ownership matrix in [`docs/README.md`](README.md).

---

## INV-003: Show Me the Receipts (Mandatory Receipt Tags)
- **Axiom:** No claim of current operational capability, test passage, or runtime behavior may appear in [`docs/HANDOFF.md`](HANDOFF.md) without an explicit **Receipt Tag**:
  - `[SAW_IT_MYSELF]`: Directly executed and verified in the current session (`[OBSERVED]`).
  - `[OBVIOUSLY]`: Invariantly derived from types, schemas, or mathematical logic (`[DEDUCED]`).
  - `[GOSPEL]`: Decreed by authoritative maintainer policy (`[CONTRACT]`).
  - `[VIBE_CHECK]`: Speculative working theory requiring empirical testing (`[HYPOTHESIS]`).
  - `[NO_RECEIPTS]`: Explicit boundary of non-observation (`[UNTESTED]`).
- **Rationale:** Confusing what is actually tested with what just sounds good is peak delusion and breaks builds.
- **Enforcement:** Checked by `tools/check_totally.py`.

---

## INV-004: Two-Way Sync (No Ghosting References)
- **Axiom:** All references across contracts must stay in two-way alignment:
  - Every Non-Negotiable (`INV-NNN`) defined here must be cited in architecture, testing, or agent protocols, and every `INV-NNN` cited elsewhere must exist here.
  - Every next step in [`docs/HANDOFF.md`](HANDOFF.md) must link to an active, uncompleted task item (`P<phase>-<nn>`) in [`ROADMAP.md`](../ROADMAP.md).
- **Rationale:** Broken cross-references and abandoned tasks leave the team stranded with dangling plans.
- **Enforcement:** Bidirectional cross-reference scanning in `tools/check_totally.py`.

---

## INV-005: Keep It Short (The 80-Line Group Chat Rule)
- **Axiom:** Current state memory must fit on a single screen without scrolling forever:
  - "Current state" in [`docs/HANDOFF.md`](HANDOFF.md) shall not exceed **80 lines**.
  - Active session log shall not exceed **10 sessions**.
- **Rationale:** Nobody reads a giant novel in the group chat; bloated handoff files dilute agent context and bury crucial updates.
- **Enforcement:** Line count and session count checks in `tools/check_totally.py`.

---

## INV-006: No Em Dashes, Seriously (The Lexical Firewall)
- **Axiom:** Zero em dashes (`—`) or robotic filler in documentation, code comments, and commit messages. Prose uses standard spoken punctuation: commas, semicolons, or parentheses.
- **Rationale:** Em dashes and repetitive openers ("That is a fantastic question!") are hallmarks of ungrounded model chatter; clean, direct sentences keep agents focused.
- **Enforcement:** Enforced natively by `tools/check_totally.py`.

---

## INV-007: Catch the Red Flag (Negative Proof Grounding)
- **Axiom:** Before you claim a fix works, you have to prove the bug was real: run the test against the pre-change code and watch it fail cleanly before writing the fix.
- **Rationale:** A test that passes even when the code is broken is totally useless; it gives fake reassurance and proves nothing.
- **Enforcement:** Mandated by the 5-step verification routine in [`docs/TESTING.md`](TESTING.md).

---

## INV-008: Keep It Tight (Minimal Word Count Rules)
- **Axiom:** Long-term decisions and distilled takeaways must be compressed into tight, high-density propositions (under 25 words per rule), completely free of chat filler.
- **Rationale:** Wordy explanations eat up context tokens; short, punchy rules preserve institutional memory at minimal token cost.
- **Enforcement:** Proposition guidelines in [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) and [`docs/DECISIONS.md`](DECISIONS.md).

---

## INV-009: Ask First, Don't Guess (The Clarification Mandate)
- **Axiom:** Unverified assumptions may never be silently compiled into code. When requirements, scope, or edge cases admit multiple valid interpretations, the agent must pause and ask clear clarifying questions or record an explicit open question (`Q-NNN` in [`docs/DECISIONS.md`](DECISIONS.md)) before writing code.
- **Rationale:** Silently guessing what someone wants turns a two-minute question into hours of wasted rework.
- **Enforcement:** Mandated by Stage 2 (The Vibe Check) of the Agent Loop in [`AGENTS.md`](../AGENTS.md).

---

## INV-010: Drop the Assumptions (Zero External Prior Projection)
- **Axiom:** Pre-trained model defaults (assumed build commands, package managers, framework idioms, or guessed directory roles) may never be projected onto the repository. Every operational convention must trace to an explicit `[GOSPEL]` or `[SAW_IT_MYSELF]` source in the files.
- **Rationale:** A fresh context window clears the chat, not model training priors; agents easily hallucinate standard defaults instead of inspecting the actual repository.
- **Enforcement:** Mandated by Stage 1 (Catching Up on the Tea) of the Agent Loop in [`AGENTS.md`](../AGENTS.md).
