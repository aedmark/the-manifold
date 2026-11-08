# Architectural Decisions (The Red Book)

Append-only record of consequential architectural choices.
Reversals supersede; they do not erase history. Each entry preserves the riddle of **The Doors of Durin** (the originating problem and rejected paths) so future sessions reconstruct why a gate was built before altering it.
Formulated in **Mithril Prose**: light as a feather, hard as dragon scales, zero filler.

Decisions: `D-NNN` in strict ascending order.
Open questions: `Q-NNN` in strict ascending order.

---

## D-001: Plain-English & Middle-earth Edition in Dedicated `mellon/` Directory
- **Elder Rune Link:** [`INV-001`](INVARIANTS.md), [`INV-002`](INVARIANTS.md)
- **Proposition:** Create `mellon/` alongside `vedas/` as a plain-English, Middle-earth themed edition rather than overwriting `vedas/`.
- **Alternatives:** Replace `vedas/` in place; add a runtime translation toggle inside `vedas/`.
- **Rationale:** Preserves the Sanskrit original for readers who want classical Indian epistemology while giving teams a zero-jargon, lore-friendly edition they can adopt or remix into their own theme.
- **Consequence:** Three parallel editions coexist in the repository (The Manifold root, `vedas/`, and `mellon/`).

---

## D-002: Three-Tier Lore Hierarchy (Elder Runes / Red Book / Watchfire Log)
- **Elder Rune Link:** [`INV-002`](INVARIANTS.md), [`INV-005`](INVARIANTS.md)
- **Proposition:** Separate repository truth into three speeds: immutable bedrock (`INVARIANTS.md`), append-only lore (`AGENTS.md`, `ARCHITECTURE.md`, `DECISIONS.md`), and an 80-line current handoff (`HANDOFF.md`).
- **Alternatives:** Binary rewrite-vs-append structure; single README diary.
- **Rationale:** Without a carved-in-stone tier (`INVARIANTS.md`), core project laws gradually erode across dozens of short agent sessions.
- **Consequence:** Editing `docs/INVARIANTS.md` requires explicit human maintainer approval.

---

## D-003: Mandatory Proof Badges on All Handoff Claims
- **Elder Rune Link:** [`INV-003`](INVARIANTS.md)
- **Proposition:** Require `[OBSERVED]`, `[DEDUCED]`, `[CONTRACT]`, `[HYPOTHESIS]`, or `[UNTESTED]` badges on every capability claim in `docs/HANDOFF.md`.
- **Alternatives:** Unstructured prose notes in `Not verified`.
- **Rationale:** Models routinely confuse plausible code with tested code; explicit badges stop unverified assumptions from masquerading as working features.
- **Consequence:** `tools/check_mellon.py` warns on any untagged bullet in `What works`.

---

## D-004: Hermeneutic Safeguards ("Speak, Friend, and Enter")
- **Elder Rune Link:** [`INV-004`](INVARIANTS.md), [`INV-007`](INVARIANTS.md), [`INV-009`](INVARIANTS.md), [`INV-010`](INVARIANTS.md)
- **Proposition:** Codify `INV-009` (*The Council of Elrond* / ask, never guess), `INV-010` (*Ban Saruman's Voice* / drop model priors), *Turn Back at Caradhras* (mid-build loopback), *"You Shall Not Pass!"* (stop on test/code friction), and *The Doors of Durin* (trace why an old constraint exists before removing it).
- **Alternatives:** Rely solely on post-build handoff checks (`INV-003`).
- **Rationale:** Post-build checks catch bad claims after tokens are spent, whereas pre-build questioning and mid-build loopbacks prevent silent assumptions and workaround hacks before they happen.
- **Consequence:** Agents halt and ask clarifying questions whenever requirements, priors, tests, or historical constraints conflict.

---

## Open questions

### Q-001: Enforcement Level for Mithril Prose Word Count in Linter
- **Blocks:** P2-01
- **Question:** Should propositions in `docs/DECISIONS.md` exceeding 25 words trigger hard errors (exit 1) or Mithril warnings (exit 0) in `check_mellon.py`?
- **Hypothesis:** Warnings (exit 0) keep fast iteration smooth while reserving hard errors (exit 1) for broken links, missing badges, or em dashes.
