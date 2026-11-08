# System Architecture (The Red Book)

Describes the structural shape, interfaces, invariants, and failure modes of **Mellon**.
Current truth: if an architectural claim is no longer accurate, rewrite it; obsolete models belong in [`DECISIONS.md`](DECISIONS.md).

---

## System Topology

Mellon establishes a three-tier memory fortress around the ephemeral AI agent context window:

```
                      ┌────────────────────────────┐
                      │   New Traveler (Context)   │
                      │  Clean slate, zero memory  │
                      │    of the previous quest   │
                      └─────────────┬──────────────┘
                                    │ Reads from & Writes to
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 MELLON MEMORY FORTRESS                  │
       ├─────────────────────────────────────────────────────────┤
       │  THE ELDER RUNES (docs/INVARIANTS.md)                   │
       │  - Bedrock laws INV-001 through INV-010                 │
       │  - Carved in stone; immutable across sessions           │
       ├─────────────────────────────────────────────────────────┤
       │  THE RED BOOK (AGENTS.md, ARCHITECTURE.md, DECISIONS.md)│
       │  - The Six Crafts & 5-stage Fellowship Quest Loop       │
       │  - Mithril ADRs (D-NNN), Roadmap (P-NNN), Glossary      │
       ├─────────────────────────────────────────────────────────┤
       │  THE WATCHFIRE LOG (docs/HANDOFF.md)                    │
       │  - Immediate state tagged with Proof Badges             │
       │  - Strict Mithril bound (<= 80 lines)                   │
       ├─────────────────────────────────────────────────────────┤
       │  THE PALANTÍR LINTER (tools/check_mellon.py)            │
       │  - Bidirectional seeing-stone reference checker         │
       │  - No-Black-Speech (zero em dash) automated enforcement │
       └─────────────────────────────────────────────────────────┘
```

---

## Component Boundaries and Ownership

1. **The Elder Runes (Bedrock Foundation):**
   - File: [`docs/INVARIANTS.md`](INVARIANTS.md)
   - Scope: System invariants (`INV-001` through `INV-010`).
   - Boundary: Never rewritten by autonomous agents without explicit human maintainer decree.

2. **The Red Book (Operational & Historical Lore):**
   - Files: [`../AGENTS.md`](../AGENTS.md), [`ARCHITECTURE.md`](ARCHITECTURE.md), [`DECISIONS.md`](DECISIONS.md), [`TESTING.md`](TESTING.md), [`SECURITY.md`](SECURITY.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), [`CHANGELOG.md`](CHANGELOG.md), [`GLOSSARY.md`](GLOSSARY.md).
   - Scope: Structural definitions, Quest Loop rules, architectural decisions (`D-NNN`), open questions (`Q-NNN`), and Mithril Prose patterns.
   - Boundary: Append-only for decisions and changelogs; refined as architecture advances.

3. **The Watchfire Log (Immediate Operational State):**
   - File: [`docs/HANDOFF.md`](HANDOFF.md)
   - Scope: Current truth, verified tests, what works, unverified gaps, next steps, active session logs.
   - Boundary: Rewritten every session; capped at 80 lines (`INV-005`).

4. **The Palantír Linter (Verification Engine):**
   - File: [`../tools/check_mellon.py`](../tools/check_mellon.py)
   - Scope: Python standard-library checker enforcing placeholder elimination, ID validity, reciprocal linking (`INV-004`), Proof Badges (`INV-003`), lexical firewall (`INV-006`), and Mithril bounds (`INV-005`).

---

## Mithril Prose & Elven Sleep Consolidation (`INV-008`)

Agentic sessions generate noisy dialogue, tool logs, and scratch notes. Left uncompressed, these logs bloat context windows and drown out critical rules.

The **Elven Sleep** pattern distills episodic history into **Mithril Prose** (*light as a feather, hard as dragon scales*):
1. **Harvest:** Candidate lessons are gathered when a session or roadmap phase closes.
2. **Forging:** Each lesson is forged into a single proposition governed by four rules:
   - *Feather-Light (Brevity):* Under 25 words per rule.
   - *Clear as Elven-Glass (Clarity):* Explicit, declarative statements with zero hedging.
   - *Zero Slag (Anti-Fluff):* Stripped of chat pleasantries and stock empathy clichés.
   - *Dragon-Proof (Verified):* Checked against the Elder Runes and the No-Black-Speech rule (`INV-006`).
3. **Inscription:** Accepted propositions are inscribed into [`docs/DECISIONS.md`](DECISIONS.md) or [`docs/INVARIANTS.md`](INVARIANTS.md).

---

## Failure Modes and Fellowship Mitigations

| Failure Mode | Plain-English Mechanism | Mellon Mitigation |
| :--- | :--- | :--- |
| **Amnesia & Drift** | Rules discussed only in chat vanish when the window closes. | **The Elder Runes:** Bedrock laws live in dedicated files outside the chat (`INV-001`, `INV-002`). |
| **Bluffing ("Trust Me")** | Agent assumes untested code works because it looks plausible. | **Proof Badges:** Every claim must state whether it is `[OBSERVED]` or `[UNTESTED]` (`INV-003`). |
| **Dull Blades (Fake Tests)** | Tests written after the fact that never failed on the bug. | **Sting's Blue Glow:** Mandatory proof that the test fails on broken code before trusting the fix (`INV-007`). |
| **Wordy Diaries** | Docs balloon with chatty narrative and exhaust token budgets. | **Mithril Prose:** Under-25-word propositions and an 80-line Watchfire cap (`INV-005`, `INV-008`). |
| **Robotic Filler & Em Dashes** | Model slips into sycophantic openers and em-dash punctuation ruts. | **No Black Speech:** Automated linter rejects em dashes and enforces plain declarative prose (`INV-006`). |
| **Abandoned Quests** | Tasks listed in handoffs disappear from the roadmap. | **Palantír Reciprocity:** `check_mellon.py` fails if a handoff step is not an active roadmap quest (`INV-004`). |
| **Guessing in the Dark** | Agent silently guesses when requirements are ambiguous. | **The Council of Elrond:** Agent halts on **Riddles in the Dark** and asks clarifying questions (**Speak, Friend**, `INV-009`). |
| **Saruman's Voice** | Agent projects pre-trained framework or build defaults onto the repo. | **Scouting Audit:** Agent drops external priors on entry and trusts only `[CONTRACT]` or `[OBSERVED]` files (`INV-010`). |
| **Caradhras Tunnel Vision** | Agent hits a broken premise mid-build and hacks locally instead of re-scoping. | **Turn Back at Caradhras:** Agent halts mid-build and loops back to the Council of Elrond (`INV-009`). |
| **Sneaking Past the Balrog** | Agent routes around a failing test or type check with a silent workaround. | **"You Shall Not Pass!":** Code or test friction triggers an immediate stop and inquiry (`INV-007`, `INV-009`). |
| **Tearing Down the Gate** | Agent deletes an unfamiliar guard clause without knowing why it was built. | **The Doors of Durin:** Agent traces the originating `D-NNN` or `INV-NNN` before altering any constraint (`INV-004`, `INV-009`). |
