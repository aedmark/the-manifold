# The Elder Runes: System Invariants

This document contains the immutable, bedrock invariants of **Mellon**.
While architectural documents and Watchfire handoff logs adapt to circumstances (**The Red Book** and **The Watchfire Log**), these Elder Runes are carved in stone like the Doors of Durin. They cannot be broken, relaxed, or edited by an agent without explicit maintainer decree.

Identifiers: `INV-NNN`. Permanent and immutable.

---

## INV-001: Zero External Dependencies (Travelling Light)
- **Axiom:** The core repository protocol, memory structures, and verification tools must execute using exclusively standard-library utilities (Python standard library `re`, `sys`, `pathlib`).
- **Rationale:** Like the Fellowship travelling on foot through the wild, a memory protocol that depends on third-party packages or external servers to verify its own integrity breaks when the road gets rough.
- **Enforcement:** `tools/check_mellon.py` must import only Python standard library modules.

---

## INV-002: One Fact, One Home (One Ring Rule)
- **Axiom:** Every system fact, state, decision, or boundary owns exactly one authoritative home file. If two documents can disagree, one of them is illegitimate.
- **Rationale:** Semantic drift and hallucination thrive when duplicate descriptions exist. Link to the canonical owner; never copy the fact.
- **Enforcement:** Document ownership matrix in [`docs/README.md`](README.md).

---

## INV-003: Explicit Proof Badges (Ranger Marks)
- **Axiom:** No claim of current operational capability, test passage, or runtime behavior may appear in [`docs/HANDOFF.md`](HANDOFF.md) without an explicit **Proof Badge**:
  - `[OBSERVED]`: Directly run and proven in the current session (*Eyes of the Ranger*).
  - `[DEDUCED]`: Invariantly derived from types, schemas, or mathematical necessity (*Lore-master's Deduction*).
  - `[CONTRACT]`: Prescribed by authoritative maintainer decree (*Word of the Council*).
  - `[HYPOTHESIS]`: Speculative working theory requiring empirical verification (*Rumor in the Shire*).
  - `[UNTESTED]`: Explicit boundary of non-observation (*Uncharted Wilds / "Here Be Dragons"*).
- **Rationale:** Blurring the line between what is proven and what is assumed is the primary cause of agent failure.
- **Enforcement:** Checked by `tools/check_mellon.py`.

---

## INV-004: Palantír Reciprocal Integrity
- **Axiom:** All references across contracts must exhibit bidirectional consistency:
  - Every Elder Rune (`INV-NNN`) defined here must be cited in the living architecture, testing, or agent protocol, and every `INV-NNN` cited elsewhere must exist here.
  - Every next step in [`docs/HANDOFF.md`](HANDOFF.md) must correspond to an active, uncompleted quest item (`P<phase>-<nn>`) in [`ROADMAP.md`](../ROADMAP.md).
- **Rationale:** Two-way seeing-stone validation prevents dead references and abandoned intentions.
- **Enforcement:** Bidirectional cross-reference scanning in `tools/check_mellon.py`.

---

## INV-005: Mithril Boundary Preservation (The 80-Line Watchfire)
- **Axiom:** Current state memory must fit within a single cognitive screen:
  - "Current state" in [`docs/HANDOFF.md`](HANDOFF.md) shall not exceed **80 lines**.
  - Active session log shall not exceed **10 sessions**.
- **Rationale:** bloated handoff files dilute context windows and bury what the next traveler needs to see first.
- **Enforcement:** Line count and session count checks in `tools/check_mellon.py`.

---

## INV-006: No Black Speech (The Lexical Firewall)
- **Axiom:** Zero em dashes (`—`) or robotic AI filler in documentation, code comments, and commit messages. Prose uses standard spoken punctuation: commas, semicolons, or parentheses.
- **Rationale:** Em dashes and stock sycophantic openers ("That's a great question!") are hallmarks of ungrounded RLHF generation; plain, direct speech anchors agent focus.
- **Enforcement:** Enforced natively by `tools/check_mellon.py`.

---

## INV-007: Sting's Blue Glow (Negative Proof Grounding)
- **Axiom:** Like Bilbo's blade *Sting* glowing blue when Orcs are near, a new test must fail on the pre-change buggy codebase before being trusted when it passes on the post-change codebase.
- **Rationale:** A test that passes even when the bug is present is a broken blade; it gives false comfort and proves nothing.
- **Enforcement:** Mandated by the 5-step Ranger's Trial in [`docs/TESTING.md`](TESTING.md).

---

## INV-008: Mithril Prose Consolidation (Elven Sleep)
- **Axiom:** Long-term decisions and distilled learnings must be compressed into **Mithril Prose**: high-density, minimal-word propositions (under 25 words per rule), light as a feather and hard as dragon scales, stripped of chat filler.
- **Rationale:** Verbose diaries exhaust context tokens; dense propositions preserve enduring lore at minimal token cost.
- **Enforcement:** Mithril Prose rules in [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) and [`docs/DECISIONS.md`](DECISIONS.md).

---

## INV-009: The Council of Elrond (Ask, Never Guess)
- **Axiom:** Unverified assumptions may never be silently compiled into code. When requirements, scope, or part-whole architecture admit multiple valid interpretations (**Riddles in the Dark**), the agent must halt and ask targeted clarifying questions (**Speak, Friend**) or record an explicit open question (`Q-NNN` in [`docs/DECISIONS.md`](DECISIONS.md)) before building.
- **Rationale:** Guessing in the dark turns a five-second question into hours of wasted work on the wrong road.
- **Enforcement:** Mandated by Stage 2 (*The Council of Elrond*) of the Quest Loop in [`AGENTS.md`](../AGENTS.md).

---

## INV-010: Ban Saruman's Voice (No Prior Projection)
- **Axiom:** Pre-trained model defaults (assumed build steps, package managers, framework idioms, or implicit directory roles) may never be projected onto the repository. Every architectural or operational convention relied upon must trace to an explicit `[CONTRACT]` or `[OBSERVED]` source in the files.
- **Rationale:** A fresh context window clears chat history, not model weights; Saruman's voice whispers that every project uses the same standard defaults, blinding the agent to what is actually in the repository.
- **Enforcement:** Mandated by Stage 1 (*Scouting at Amon Hen*) of the Quest Loop in [`AGENTS.md`](../AGENTS.md).
