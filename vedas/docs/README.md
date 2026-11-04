# Documentation Map

This directory stores the durable memory contracts of **Vedas**.
Knowledge is classified into three epistemic speeds: **Śruti** (Axiomatic Invariants), **Smṛti** (Epochal Conventions & Design), and **Vartamāna** (Ephemeral Current State).

---

## The Three Epistemic Speeds

```
┌────────────────────────────────────────────────────────┐
│               ŚRUTI (Axiomatic Invariants)             │
│               docs/INVARIANTS.md [INV-NNN]             │
│          Eternal laws; immutable across epochs         │
└──────────────────────────┬─────────────────────────────┘
                           │ Governs
                           ▼
┌────────────────────────────────────────────────────────┐
│               SMṚTI (Epochal Memory & Law)             │
│   AGENTS.md, docs/ARCHITECTURE.md, docs/DECISIONS.md   │
│   Appended or refined as architecture & paradigms shift│
└──────────────────────────┬─────────────────────────────┘
                           │ Directs
                           ▼
┌────────────────────────────────────────────────────────┐
│               VARTAMĀNA (Immediate State)              │
│                 docs/HANDOFF.md [PRAMĀṆA]              │
│       Rewritten continuously; strictly under 80 lines  │
└────────────────────────────────────────────────────────┘
```

---

## Audiences and Ownership

| Document | Epistemic Layer | Vedāṅga | Owns | Does Not Own |
| :--- | :--- | :--- | :--- | :--- |
| `../README.md` | Smṛti | Orientation | Vedic principles, public quickstart | Session state or agent workflows |
| `../AGENTS.md` | Smṛti | Kalpa / Protocol | Standing rules, 5-stage session loop, canonical lexicon | Implementation code or test results |
| `../ROADMAP.md` | Smṛti | Jyotiṣa | Planned phases and immutable `P<phase>-<nn>` IDs | Detailed design or historical logs |
| `INVARIANTS.md` | **Śruti** | Foundation | Immutable system axioms (`INV-NNN`) | Configurable parameters |
| `HANDOFF.md` | **Vartamāna** | State | Rewritten present state with Pramāṇa tags (80-line cap) | Permanent design rules |
| `ARCHITECTURE.md` | Smṛti | Structure | Component topology, boundaries, and failure modes | Chronological history |
| `DECISIONS.md` | Smṛti | History | Sūtra-dense decision records (`D-NNN`) & questions (`Q-NNN`) | Ephemeral task status |
| `TESTING.md` | Smṛti | Proof | Commands, Pramāṇa proof boundaries, test suites | Duplicate copy of test output |
| `SECURITY.md` | Smṛti | Safeguards | Trust boundaries, sacred secrets, reporting path | Incident retrospectives |
| `CONTRIBUTING.md` | Kalpa | Ritual | Human & agent collaboration workflow | Agent-only technical specs |
| `CHANGELOG.md` | Smṛti | History | Released user-visible changes | Internal commit history |
| `archive/` | Smṛti | Archive | Archived session logs and completed roadmap phases | Active contracts |

---

## Update Triggers

| Change | Required Documentation |
| :--- | :--- |
| Foundational paradigm or structural invariant shift | `INVARIANTS.md` (requires maintainer re-consecration) |
| Component topology, boundary, or data-flow change | `ARCHITECTURE.md` |
| Architectural choice made, rejected, or reversed | `DECISIONS.md` (mark old decisions superseded) |
| New open question blocking progress | `DECISIONS.md` under Open Questions (`Q-NNN`) |
| Test command, environment boundary, or suite change | `TESTING.md` |
| Secret boundary or security surface change | `SECURITY.md` |
| Work pauses or session transitions | `HANDOFF.md` (rewrite current state; append session) |
| New planned milestone or status transition | `ROADMAP.md` |
