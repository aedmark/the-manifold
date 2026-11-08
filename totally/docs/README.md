# Documentation Map (The Receipts)

This directory stores the durable memory contracts of **Totally**.
Knowledge is separated into three temporal speeds: **The Non-Negotiables** (Immutable Bedrock Rules), **The Receipts** (Append-Only Architecture & Decisions), and **The Group Chat** (Rewritten Immediate Status).

---

## The Three Speeds of Memory

```
┌────────────────────────────────────────────────────────┐
│            THE NON-NEGOTIABLES (Bedrock Rules)         │
│               docs/INVARIANTS.md [INV-NNN]             │
│        Carved in stone; immutable across sessions      │
└──────────────────────────┬─────────────────────────────┘
                           │ Governs
                           ▼
┌────────────────────────────────────────────────────────┐
│          THE RECEIPTS (Architecture & Decisions)       │
│   AGENTS.md, docs/ARCHITECTURE.md, docs/DECISIONS.md   │
│   Appended or refined as architecture & tasks evolve   │
└──────────────────────────┬─────────────────────────────┘
                           │ Directs
                           ▼
┌────────────────────────────────────────────────────────┐
│           THE GROUP CHAT (Immediate Status)            │
│               docs/HANDOFF.md [RECEIPT TAG]            │
│       Rewritten continuously; strictly under 80 lines  │
└────────────────────────────────────────────────────────┘
```

---

## Audiences and Ownership

| Document | Speed | Role | Owns | Does Not Own |
| :--- | :--- | :--- | :--- | :--- |
| `../README.md` | The Receipts | Orientation | Totally principles, quickstart guide | Session status or internal agent rules |
| `../AGENTS.md` | The Receipts | Agent Routine | Standing rules, 5-stage Agent Routine, canonical terms | Implementation code or test results |
| `../ROADMAP.md` | The Receipts | The Plan | Planned phases and immutable `P<phase>-<nn>` IDs | Detailed design or historical logs |
| `INVARIANTS.md` | **Non-Negotiables** | Foundation | Immutable system axioms (`INV-001` - `INV-010`) | Configurable parameters |
| `HANDOFF.md` | **The Group Chat** | State | Rewritten present state with Receipt Tags (80-line cap) | Permanent design rules |
| `ARCHITECTURE.md` | The Receipts | Structure | Component topology, boundaries, and failure modes | Chronological history |
| `DECISIONS.md` | The Receipts | History | Punchy decision records (`D-NNN`), tensions (`T-NNN`), questions (`Q-NNN`) | Ephemeral task status |
| `TESTING.md` | The Receipts | Proof | Commands, negative proof checks, and Receipt Tag boundaries | Duplicate copy of test output |
| `SECURITY.md` | The Receipts | Defense | Trust boundaries, protected secrets, reporting path | Incident retrospectives |
| `CONTRIBUTING.md` | Agent Routine | Workflow | Human and agent collaboration workflow | Agent-only technical specs |
| `CHANGELOG.md` | The Receipts | Chronicle | Released user-visible changes | Internal commit history |
| `GLOSSARY.md` | Lexicon | Terms | Valley-Girl, Middle-earth, Vedic, and plain English equivalents | Session status |
| `archive/` | The Receipts | Archive | Archived Group Chat logs and completed roadmap phases | Active contracts |

---

## Update Triggers

| Change | Required Documentation |
| :--- | :--- |
| Bedrock rule or architectural invariant shift | `INVARIANTS.md` (requires explicit maintainer sign-off) |
| Component topology, boundary, or data-flow change | `ARCHITECTURE.md` |
| Architectural choice made, rejected, or reversed | `DECISIONS.md` (mark old decisions superseded) |
| New open question blocking progress | `DECISIONS.md` under Open Questions (`Q-NNN`) |
| Test command, environment boundary, or suite change | `TESTING.md` |
| Secret boundary or security surface change | `SECURITY.md` |
| Work pauses or session transitions | `HANDOFF.md` (rewrite current state; append session) |
| New planned task or status transition | `ROADMAP.md` |
| New canonical term or slang mapping | `GLOSSARY.md` and `AGENTS.md` |
