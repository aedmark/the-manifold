# Totally

**Plain-English & Valley-Girl epistemic memory for agentic work.**  
*The approachable, zero-jargon sibling of [Vedas](../vedas/README.md), [Mellon](../mellon/README.md), and [The Manifold](../README.md).*

> *"Like, seriously, don't guess. Show me the receipts."*  
> *The agents come and go every session. The Receipts endure.*

---

## What is Totally?

**Totally** is the Valley-Girl edition of **[The Manifold](../README.md)** and **[Vedas](../vedas/README.md)**.

Vedas proved that classical epistemic engineering solves the core failure mode of AI coding agents: **preserving complex architectural truth across successive generations of ephemeral, amnesiac sessions without semantic drift, silent guessing, or bit rot.** Mellon showed that translating the Sanskrit concepts into Middle-earth lore lowers the barrier to entry. **Totally** takes accessibility one step further: turning high-rigor epistemic memory into fun, punchy, pop-culture English.

Totally preserves **100% of the formal mechanics** of Vedas and Mellon while making the rules impossible to misinterpret:

1. **Receipt Tags (Show Me the Receipts):**  
   Every claim in current state, architecture, and testing is formally tagged by its source of proof:
   - `[SAW_IT_MYSELF]`: Directly verified by running a command or test in this session (`[OBSERVED]`).
   - `[OBVIOUSLY]`: Invariant logical deduction from schemas, types, or proved laws (`[DEDUCED]`).
   - `[GOSPEL]`: Formally declared specification or maintainer policy (`[CONTRACT]`).
   - `[VIBE_CHECK]`: Working theory explaining an anomaly; awaiting empirical proof (`[HYPOTHESIS]`).
   - `[NO_RECEIPTS]`: Explicit negative boundary; what has *not* been verified (`[UNTESTED]`).

2. **The Three Speeds of Memory (Non-Negotiables / The Receipts / The Group Chat):**  
   Totally separates project truth into three temporal speeds:
   - **The Non-Negotiables ([`docs/INVARIANTS.md`](docs/INVARIANTS.md)):** Core rules set in stone that no agent may alter without explicit maintainer approval (`INV-001` through `INV-010`).
   - **The Receipts ([`AGENTS.md`](AGENTS.md), [`docs/DECISIONS.md`](docs/DECISIONS.md), [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)):** Append-only institutional memory and decisions. When a choice changes, a new entry supersedes the old; history is never deleted.
   - **The Group Chat ([`docs/HANDOFF.md`](docs/HANDOFF.md)):** The immediate status update. Rewritten every session, capped at 80 lines, showing only what is true *right now*.

3. **Punchy Propositions (<25 Words):**  
   Rules and decisions are written in high-density propositions (under 25 words), stripped of conversational filler, sycophantic clichés, and em dashes (`INV-006`, `INV-008`).

4. **Hermeneutic Safeguards ("Ask First, Don't Guess"):**  
   - **Drop the Assumptions (`INV-010`):** Drop pre-trained model illusions on entry; never assume a build step, package manager, or framework that is not in the files.
   - **Ask First, Don't Guess (`INV-009`):** Never compile silent assumptions into code. When requirements or edge cases are ambiguous, stop and ask clarifying questions.
   - **Why Is This Even Here? (`INV-004`, `INV-009`):** Before removing or altering an old guard clause or constraint, trace the originating decision (`D-NNN`) that built it.
   - **Hit Pause & Regroup (`INV-009`):** When a mid-build surprise breaks your scoped plan, loop back to scoping instead of spiraling into messy hacks.
   - **Huge Red Flag (`INV-007`, `INV-009`):** When a test or contract blocks your change, treat it as a stop-and-inquire signal, never an obstacle to route around with a workaround.

5. **The Vibe Linter ([`tools/check_totally.py`](tools/check_totally.py)):**  
   A zero-dependency standard-library Python script that performs **bidirectional verification**:
   - Invariants cited anywhere must exist in `docs/INVARIANTS.md`, and every invariant in `docs/INVARIANTS.md` must be cited in the living docs.
   - Next steps in `docs/HANDOFF.md` must resolve to active, uncompleted tasks in `ROADMAP.md`.
   - Every claim in `What works` must carry an explicit Receipt Tag.
   - Zero em dashes (`—`) across all prose.

---

## Document Map

| Document | Speed | Owns | Update Trigger |
| :--- | :--- | :--- | :--- |
| [`AGENTS.md`](AGENTS.md) | **The Receipts** (Protocol) | Five Stages, Agent Routine, canonical terms, repository map | A standing workflow or rule changes |
| [`CLAUDE.md`](CLAUDE.md) | **The Receipts** (Pointer) | One-line pointer importing `AGENTS.md` | Almost never |
| [`README.md`](README.md) | **The Receipts** (Overview) | Public entry point, Totally principles, quickstart | Protocol or public interface changes |
| [`ROADMAP.md`](ROADMAP.md) | **The Plan** (Phasing) | Phased tasks with permanent `P<phase>-<nn>` IDs | Task scope or status changes |
| [`docs/README.md`](docs/README.md) | **The Receipts** (Map) | Documentation ownership and update triggers | Documentation set changes |
| [`docs/INVARIANTS.md`](docs/INVARIANTS.md) | **Non-Negotiables** (Rules) | Immutable system invariants (`INV-001` - `INV-010`) | Foundational architectural shift |
| [`docs/HANDOFF.md`](docs/HANDOFF.md) | **The Group Chat** (Status) | Rewritten current truth with mandatory Receipt Tags (<= 80 lines) | Work pauses or current state changes |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | **The Receipts** (Structure) | Component topology, data flows, and failure mitigations | Component or interface changes |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | **The Receipts** (History) | Punchy decision records (`D-NNN`), tensions (`T-NNN`), questions (`Q-NNN`) | A consequential choice is accepted or reversed |
| [`docs/TESTING.md`](docs/TESTING.md) | **The Receipts** (Proof) | Test suites, negative proof checks, and Receipt Tag boundaries | Test suite or verification tooling changes |
| [`docs/SECURITY.md`](docs/SECURITY.md) | **The Receipts** (Defense) | Trust boundaries, secret handling, and protected assets | Security surface or boundary changes |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | **Agent Routine** (Workflow) | Human and agent collaboration lifecycle | Contribution workflow changes |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | **The Receipts** (Chronicle) | User-visible evolutions | Release or user-facing milestone reached |
| [`docs/GLOSSARY.md`](docs/GLOSSARY.md) | **Lexicon** (Terms) | Four-way translation table across editions | Domain vocabulary expands |
| [`docs/archive/`](docs/archive/README.md) | **The Receipts** (Archive) | Expired Group Chat logs and completed roadmap phases | Live files exceed line bounds |
| [`tools/check_totally.py`](tools/check_totally.py) | **Vibe Linter** | Standard-library Python checker enforcing reciprocal integrity | Protocol verification rules change |

---

## The Vibe Linter

```bash
python3 tools/check_totally.py
```

For a blank template containing `{{placeholders}}`:

```bash
python3 tools/check_totally.py --template
```

---

## Lineage

```
┌──────────────────────────────────────────────────────────────┐
│                        The Hypervisor                        │
│                 "Gives the model a body"                     │
│       Volatile semantic leverage, bio-physics, Village       │
└──────────────────────────────┬───────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                         The Manifold                         │
│                 "Gives the work a memory"                    │
│        Zero-dependency Markdown contracts, two speeds        │
└──────────────┬───────────────┬───────────────────────────────┘
               │               │
               ▼               ▼
┌─────────────────────────────┐ ┌──────────────────────────────┐
│            Vedas            │ │            Mellon            │
│   "Classical Epistemology"  │ │  "Plain English & Lore"      │
│  Śruti / Smṛti / Vartamāna, │ │  Elder Runes / Red Book /    │
│  Pramāṇa, Sūtras, Nyāya     │ │  Watchfire, Proof Badges,    │
│  For Sanskrit & logic nerds │ │  Mithril Prose, LOTR tropes  │
└──────────────┬──────────────┘ └──────────────────────────────┘
               │
               ▼
┌─────────────────────────────┐
│           Totally           │
│   "Like, Seriously Epistemic"
│  The Non-Negotiables,       │
│  The Receipts, Group Chat,  │
│  Receipt Tags, Pop English  │
└─────────────────────────────┘
```
