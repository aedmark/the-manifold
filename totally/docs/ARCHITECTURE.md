# System Architecture (The Receipts)

Describes the structural shape, interfaces, invariants, and failure modes of **Totally**.
Current truth: if an architectural claim is no longer accurate, rewrite it; obsolete models belong in [`DECISIONS.md`](DECISIONS.md).

---

## System Topology

Totally establishes a three-tier memory structure around the ephemeral AI agent context window:

```
                      ┌────────────────────────────┐
                      │    Fresh Brain (Context)   │
                      │  Blank slate, zero memory  │
                      │   of yesterday's session   │
                      └─────────────┬──────────────┘
                                    │ Reads from & Writes to
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 TOTALLY MEMORY SYSTEM                   │
       ├─────────────────────────────────────────────────────────┤
       │  THE NON-NEGOTIABLES (docs/INVARIANTS.md)               │
       │  - Core rules INV-001 through INV-010                   │
       │  - Set in stone; immutable across sessions              │
       ├─────────────────────────────────────────────────────────┤
       │  THE RECEIPTS (AGENTS.md, ARCHITECTURE.md, DECISIONS.md)│
       │  - The 5-stage Agent Routine & Architecture             │
       │  - ADRs (D-NNN), Roadmap (P-NNN), Glossary              │
       ├─────────────────────────────────────────────────────────┤
       │  THE GROUP CHAT (docs/HANDOFF.md)                       │
       │  - Immediate status tagged with Receipt Tags            │
       │  - Strict Group Chat limit (<= 80 lines)                │
       ├─────────────────────────────────────────────────────────┤
       │  THE VIBE LINTER (tools/check_totally.py)               │
       │  - Bidirectional reference checker                      │
       │  - Zero em dashes, zero placeholders, receipt checks    │
       └─────────────────────────────────────────────────────────┘
```

---

## Component Boundaries and Ownership

1. **The Non-Negotiables (Bedrock Rules):**
   - File: [`docs/INVARIANTS.md`](INVARIANTS.md)
   - Scope: System invariants (`INV-001` through `INV-010`).
   - Boundary: Never rewritten by autonomous agents without explicit maintainer approval.

2. **The Receipts (Architecture & Decisions):**
   - Files: [`../AGENTS.md`](../AGENTS.md), [`ARCHITECTURE.md`](ARCHITECTURE.md), [`DECISIONS.md`](DECISIONS.md), [`TESTING.md`](TESTING.md), [`SECURITY.md`](SECURITY.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), [`CHANGELOG.md`](CHANGELOG.md), [`GLOSSARY.md`](GLOSSARY.md).
   - Scope: Structural design, Agent Routine, decisions (`D-NNN`), open questions (`Q-NNN`), and proposition patterns.
   - Boundary: Append-only for decisions and changelogs; refined as architecture advances.

3. **The Group Chat (Immediate Status):**
   - File: [`docs/HANDOFF.md`](HANDOFF.md)
   - Scope: Current truth, verified tests, what works, unverified gaps, next steps, active session logs.
   - Boundary: Rewritten every session; capped at 80 lines (`INV-005`).

4. **The Vibe Linter (Verification Engine):**
   - File: [`../tools/check_totally.py`](../tools/check_totally.py)
   - Scope: Python standard-library checker enforcing placeholder removal, ID validity, reciprocal linking (`INV-004`), Receipt Tags (`INV-003`), lexical firewall (`INV-006`), and line limits (`INV-005`).

---

## Memory Consolidation Pattern (`INV-008`)

Agent sessions generate noisy chat history, tool logs, and scratch notes. Left uncompressed, these logs bloat context windows and drown out essential rules.

The **Receipt Consolidation** pattern distills episodic history into tight, punchy rules:
1. **Harvest:** Candidate takeaways are gathered when a session or roadmap phase closes.
2. **Distill:** Each takeaway is distilled into a single proposition governed by four rules:
   - *Brevity:* Under 25 words per rule.
   - *Clarity:* Explicit, declarative statements with zero hedging.
   - *Zero Fluff:* Stripped of chat pleasantries and conversational filler.
   - *Verified:* Checked against the Non-Negotiables and the zero em dash rule (`INV-006`).
3. **Inscribe:** Accepted rules are recorded in [`docs/DECISIONS.md`](DECISIONS.md) or [`docs/INVARIANTS.md`](INVARIANTS.md).

---

## Failure Modes and Mitigations

| Failure Mode | Plain-English Mechanism | Totally Mitigation |
| :--- | :--- | :--- |
| **Amnesia & Drift** | Rules discussed only in chat vanish when the window closes. | **The Non-Negotiables:** Bedrock rules live in dedicated files outside the chat (`INV-001`, `INV-002`). |
| **Faking It (No Proof)** | Agent assumes untested code works because it looks plausible. | **Receipt Tags:** Every claim must state whether it is `[SAW_IT_MYSELF]` or `[NO_RECEIPTS]` (`INV-003`). |
| **Fake Tests (Tautology)** | Tests written after the fact that never failed on the bug. | **Catch the Red Flag:** Mandatory proof that the test fails on broken code before trusting the fix (`INV-007`). |
| **Wordy Novels** | Docs balloon with conversational narrative and exhaust token budgets. | **Punchy Propositions:** Under-25-word rules and an 80-line Group Chat cap (`INV-005`, `INV-008`). |
| **Robotic Filler & Em Dashes** | Model slips into sycophantic openers and em dash punctuation ruts. | **No Em Dashes, Seriously:** Automated linter rejects em dashes and enforces direct speech (`INV-006`). |
| **Abandoned Plans** | Tasks listed in handoffs disappear from the roadmap. | **Two-Way Sync:** `check_totally.py` fails if a handoff step is not an active roadmap task (`INV-004`). |
| **Silent Guessing** | Agent silently guesses when requirements are ambiguous. | **Ask First, Don't Guess:** Agent halts on ambiguous instructions and asks clarifying questions (`INV-009`). |
| **Projecting Assumptions** | Agent projects pre-trained framework or build defaults onto the repo. | **Drop the Assumptions:** Agent drops external priors on entry and trusts only `[GOSPEL]` or `[SAW_IT_MYSELF]` files (`INV-010`). |
| **Spiraling Mid-Build** | Agent hits a broken premise mid-build and hacks locally instead of re-scoping. | **Hit Pause & Regroup:** Agent halts mid-build and loops back to clarify scope (`INV-009`). |
| **Cheesy Workarounds** | Agent routes around a failing test or type check with a silent hack. | **Huge Red Flag:** Code or test friction triggers an immediate stop and inquiry (`INV-007`, `INV-009`). |
| **Deleting Old Guards** | Agent deletes an unfamiliar guard clause without knowing why it was built. | **Why Is This Even Here?:** Agent traces the originating `D-NNN` or `INV-NNN` before altering any constraint (`INV-004`, `INV-009`). |

---

## Code Map & Interfaces

Where to look for each area of the project, its entry point, and the direction data moves across stable interfaces.

| Area | Where | Entry point | Talks to |
| :--- | :--- | :--- | :--- |
| `{{Parser}}` | `{{src/parse/}}` | `{{parse()}}` | `{{the model; nothing else}}` |
| `{{Storage}}` | `{{src/store/}}` | `{{open()}}` | `{{IndexedDB / database}}` |

```text
{{input}} -> {{validation}} -> {{domain operation}} -> {{persistence/output}}
```

| Interface | Producer | Consumer | Contract / compatibility |
| :--- | :--- | :--- | :--- |
| `{{event, API, file, function}}` | `{{component}}` | `{{component}}` | `{{schema, versioning, error semantics}}` |

---

## Dependencies

Everything the project needs that it did not write itself. Adding a new dependency requires maintainer approval and a record in the same session.

| Dependency | Version | For | Why this one (and not writing it) |
| :--- | :--- | :--- | :--- |
| `{{name}}` | `{{pinned version}}` | `{{what uses it}}` | `{{one line, or D-NNN}}` |

---

## State and Caches

Everything a run leaves on disk or in external stores, and what may delete it. Reset commands must never wipe expensive caches without warning.

| What | Where | Written by | Reset by | Committed? |
| :--- | :--- | :--- | :--- | :--- |
| `{{User data}}` | `{{path}}` | `{{the app}}` | `{{reset clears it}}` | `{{no, gitignored}}` |
| `{{Cached model runs}}` | `{{path}}` | `{{the harness}}` | `{{by hand only; reset must not touch it}}` | `{{no}}` |

---

## Claims vs. Code

Places where a doc, a name, or a comment promises more than the code delivers, so nobody builds on an unverified claim. When a session hits resistance where the code contradicts a documented claim (or vice versa), record the mismatch here (`[VIBE_CHECK]`) and ask the maintainer (`INV-009`) rather than papering over the discrepancy in code. Remove a row when the code catches up or the claim is corrected.

- `{{e.g. "physics/ suggests a simulation; it is a set of thresholds feeding prompt text."}}`
