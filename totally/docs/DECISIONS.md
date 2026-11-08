# Architectural Decisions (The Receipts)

Append-only record of consequential architectural choices.
Reversals supersede; they do not erase history. Each entry preserves the backstory (the problem, context, and rejected paths) so future sessions understand why a boundary exists before changing it.
Formulated with minimal filler: punchy statements, maximum clarity, zero fluff.

Decisions: `D-NNN` in strict ascending order.
Held tensions: `T-NNN` in strict ascending order.
Open questions: `Q-NNN` in strict ascending order.

---

## D-001: Dedicated Valley-Girl Edition in `totally/` Directory
- **Rule Link:** [`INV-001`](INVARIANTS.md), [`INV-002`](INVARIANTS.md)
- **Proposition:** Create `totally/` alongside `vedas/` and `mellon/` as an approachable Valley-Girl themed edition rather than modifying existing editions.
- **Alternatives:** Replace existing editions in place; create a dynamic translation CLI toggle.
- **Rationale:** Preserves the Sanskrit original and Middle-earth edition while offering teams an ultra-relatable, zero-jargon option they can adopt or customize.
- **Consequence:** Four parallel editions coexist cleanly in the repository (The Manifold root, `vedas/`, `mellon/`, and `totally/`).

---

## D-002: Three-Speed Memory Hierarchy (The Non-Negotiables / The Receipts / The Group Chat)
- **Rule Link:** [`INV-002`](INVARIANTS.md), [`INV-005`](INVARIANTS.md)
- **Proposition:** Split repository knowledge into three distinct speeds: immutable foundation (`INVARIANTS.md`), append-only history (`AGENTS.md`, `ARCHITECTURE.md`, `DECISIONS.md`), and an 80-line current status (`HANDOFF.md`).
- **Alternatives:** A single unstructured README; binary rewrite-vs-append rules.
- **Rationale:** Without a permanent bedrock tier (`INVARIANTS.md`), foundational rules gradually degrade across successive AI agent sessions.
- **Consequence:** Modifying `docs/INVARIANTS.md` requires explicit human maintainer approval.

---

## D-003: Mandatory Receipt Tags on All Handoff Assertions
- **Rule Link:** [`INV-003`](INVARIANTS.md)
- **Proposition:** Require `[SAW_IT_MYSELF]`, `[OBVIOUSLY]`, `[GOSPEL]`, `[VIBE_CHECK]`, or `[NO_RECEIPTS]` tags on every capability bullet in `docs/HANDOFF.md`.
- **Alternatives:** Freeform prose disclaimers in a notes section.
- **Rationale:** Models regularly confuse plausible speculation with verified reality; explicit tags stop unproven guesses from masquerading as working features.
- **Consequence:** `tools/check_totally.py` flags any untagged bullet in `What works`.

---

## D-004: Hermeneutic Safeguards ("Ask First, Never Guess")
- **Rule Link:** [`INV-004`](INVARIANTS.md), [`INV-007`](INVARIANTS.md), [`INV-009`](INVARIANTS.md), [`INV-010`](INVARIANTS.md)
- **Proposition:** Codify `INV-009` (Ask First, Don't Guess), `INV-010` (Drop the Assumptions), Hit Pause & Regroup (mid-build loopback), Catch the Red Flag (stop on test/code friction), and Why Is This Even Here? (Chesterton's Fence check).
- **Alternatives:** Rely solely on post-build handoff reviews (`INV-003`).
- **Rationale:** Post-hoc reviews catch issues only after time and tokens are spent, whereas asking clarifying questions upfront prevents messy workarounds before they happen.
- **Consequence:** Agents halt and ask clarifying questions whenever requirements, priors, tests, or existing constraints conflict.

---

## Held tensions

Two true claims that do not fit together yet (**Both Things Are True**). Keep both visible with an owner and a review trigger so an agent does not silently flatten one side to make a clean edit. Delete the entry when a decision resolves it or the world changes.

### T-001: Punchy Brevity vs. Self-Contained Onboarding
- **Owner:** Maintainer
- **Claim A:** Propositions must stay tight (under 25 words) to protect the context window (`INV-008`).
- **Claim B:** New contributors and agents need enough operational detail in `AGENTS.md` and `ARCHITECTURE.md` to work without guessing (`INV-009`).
- **Why both hold:** Over-compression breeds confusion; verbose documentation overflows the 80-line Group Chat cap (`INV-005`).
- **Cost of holding both:** Authors must pair concise propositions with structured tables and the glossary (`GLOSSARY.md`).
- **Review trigger:** P2-01 (`check_totally.py` word-density linter implementation).

---

## Open questions

### Q-001: Enforcement Level for Proposition Word Count in Linter
- **Blocks:** P2-01
- **Question:** Should propositions in `docs/DECISIONS.md` exceeding 25 words trigger hard errors (exit 1) or warnings (exit 0) in `check_totally.py`?
- **Hypothesis:** Warnings (exit 0) keep fast iteration smooth while reserving hard errors (exit 1) for broken links, missing tags, or em dashes.
