# Documentation Map (The Red Book)

This directory stores the durable memory contracts of **Mellon**.
Knowledge is separated into three temporal tiers: **The Elder Runes** (Immutable Bedrock Laws), **The Red Book** (Append-Only Architecture & History), and **The Watchfire Log** (Rewritten Immediate State).

---

## The Three Tiers of Lore

```
┌────────────────────────────────────────────────────────┐
│           THE ELDER RUNES (Bedrock Laws)               │
│               docs/INVARIANTS.md [INV-NNN]             │
│        Carved in stone; immutable across sessions      │
└──────────────────────────┬─────────────────────────────┘
                           │ Governs
                           ▼
┌────────────────────────────────────────────────────────┐
│        THE RED BOOK (Architecture & History)           │
│   AGENTS.md, docs/ARCHITECTURE.md, docs/DECISIONS.md   │
│   Appended or refined as architecture & quests evolve  │
└──────────────────────────┬─────────────────────────────┘
                           │ Directs
                           ▼
┌────────────────────────────────────────────────────────┐
│         THE WATCHFIRE LOG (Immediate State)            │
│               docs/HANDOFF.md [PROOF BADGE]            │
│       Rewritten continuously; strictly under 80 lines  │
└────────────────────────────────────────────────────────┘
```

---

## Audiences and Ownership

| Document | Tier | Craft | Owns | Does Not Own |
| :--- | :--- | :--- | :--- | :--- |
| `../README.md` | Red Book | Orientation | Mellon principles, public quickstart | Session state or internal agent rules |
| `../AGENTS.md` | Red Book | Quest Loop | Standing rules, 5-stage Quest Loop, canonical terms | Implementation code or test results |
| `../ROADMAP.md` | Red Book | Shire Reckoning | Planned phases and immutable `P<phase>-<nn>` IDs | Detailed design or historical logs |
| `INVARIANTS.md` | **Elder Runes** | Foundation | Immutable system axioms (`INV-001` - `INV-010`) | Configurable parameters |
| `HANDOFF.md` | **Watchfire Log** | State | Rewritten present state with Proof Badges (80-line cap) | Permanent design rules |
| `ARCHITECTURE.md` | Red Book | Structure | Component topology, boundaries, and failure modes | Chronological history |
| `DECISIONS.md` | Red Book | History | Mithril-dense decision records (`D-NNN`) & questions (`Q-NNN`) | Ephemeral task status |
| `TESTING.md` | Red Book | Proof | Commands, Sting's Blue Glow, and Proof Badge boundaries | Duplicate copy of test output |
| `SECURITY.md` | Red Book | Wards | Trust boundaries, protected secrets, reporting path | Incident retrospectives |
| `CONTRIBUTING.md` | Quest Loop | Ritual | Human & agent Fellowship workflow | Agent-only technical specs |
| `CHANGELOG.md` | Red Book | Chronicle | Released user-visible changes | Internal commit history |
| `GLOSSARY.md` | Elvish Lexicon | Terms | Plain English, Middle-earth, and Vedic term equivalents | Session status |
| `archive/` | Red Book | Archive | Archived Watchfire logs and completed roadmap phases | Active contracts |

---

## Update Triggers

| Change | Required Documentation |
| :--- | :--- |
| Foundational paradigm or bedrock rule shift | `INVARIANTS.md` (requires explicit maintainer decree) |
| Component topology, boundary, or data-flow change | `ARCHITECTURE.md` |
| Architectural choice made, rejected, or reversed | `DECISIONS.md` (mark old decisions superseded) |
| New open question blocking progress | `DECISIONS.md` under Open Questions (`Q-NNN`) |
| Test command, environment boundary, or suite change | `TESTING.md` |
| Secret boundary or security surface change | `SECURITY.md` |
| Work pauses or session transitions | `HANDOFF.md` (rewrite current state; append session) |
| New planned quest or status transition | `ROADMAP.md` |
| New canonical domain or lore term | `GLOSSARY.md` and `AGENTS.md` |
