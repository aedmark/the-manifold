# Mellon

**Plain-English & Middle-earth epistemic memory for agentic work.**  
*The accessible, lore-friendly sibling of [Vedas](../vedas/README.md) and [The Manifold](../README.md).*

> *"Speak, friend, and enter."*  
> *The Fellowship changes every session. The Red Book endures.*

---

## What is Mellon?

**Mellon** is the plain-English, Middle-earth themed edition of **[Vedas](../vedas/README.md)** (which itself extends **[The Manifold](../README.md)**).

Vedas proved that classical epistemic engineering solves the core failure mode of AI coding agents: **preserving complex architectural truth across successive generations of ephemeral, amnesiac sessions without semantic drift, silent guessing, or bit rot.** However, Sanskrit terminology (*Śruti*, *Pramāṇa*, *Ghana-pāṭha*, *Pūrva-Pakṣa*) creates a steep barrier to entry for teams who just want the rigor in plain English.

Mellon keeps **100% of the formal mechanics** of Vedas and translates every concept into crisp **plain English** anchored by familiar **Middle-earth (Lord of the Rings)** archetypes:

1. **Proof Badges (Ranger Marks):**  
   Every claim in current state, architecture, and testing is formally tagged by its source of proof:
   - `[OBSERVED]`: Directly verified by running a command or test in this session (*Eyes of the Ranger*).
   - `[DEDUCED]`: Invariant logical deduction from schemas, types, or proved laws (*Lore-master's Deduction*).
   - `[CONTRACT]`: Formally declared specification or maintainer policy (*Word of the Council*).
   - `[HYPOTHESIS]`: Working theory explaining an anomaly; awaiting empirical proof (*Rumor in the Shire*).
   - `[UNTESTED]`: Explicit negative boundary; what has *not* been verified (*Uncharted Wilds / "Here Be Dragons"*).

2. **The Three Tiers of Lore (Elder Runes / The Red Book / The Watchfire):**  
   Mellon separates project truth into three temporal speeds:
   - **The Elder Runes ([`docs/INVARIANTS.md`](docs/INVARIANTS.md)):** Irreducible bedrock laws carved in stone that no agent may alter without explicit maintainer decree (`INV-001` through `INV-010`).
   - **The Red Book of Westmarch ([`AGENTS.md`](AGENTS.md), [`docs/DECISIONS.md`](docs/DECISIONS.md), [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)):** Append-only institutional memory and epochal conventions. When a choice changes, a new chapter supersedes the old; history is never erased.
   - **The Watchfire Log ([`docs/HANDOFF.md`](docs/HANDOFF.md)):** The Beacon of Minas Tirith. Rewritten every session, capped at 80 lines, showing only what is true *right now*.

3. **Mithril Prose (*Light as a Feather, Hard as Dragon Scales*):**  
   Rules and decisions are written in high-density propositions (under 25 words), stripped of conversational filler, sycophantic clichés, and em dashes (`INV-006`, `INV-008`).

4. **The Hermeneutic Safeguards ("Speak, Friend, and Enter"):**  
   - **Ban Saruman's Voice (`INV-010`):** Drop pre-trained model illusions on entry; never assume a build step, package manager, or framework that is not in the files.
   - **The Council of Elrond (`INV-009`):** Never compile silent assumptions into code. When requirements or edge cases are ambiguous, stop and ask clarifying questions (**Speak, Friend**).
   - **The Doors of Durin (`INV-004`, `INV-009`):** Before removing or altering an old guard clause or constraint, trace the originating decision (`D-NNN`) that built it.
   - **Turn Back at Caradhras (`INV-009`):** When a mid-build surprise breaks your scoped plan, loop back to scoping instead of hacking through the blizzard.
   - **"You Shall Not Pass!" (`INV-007`, `INV-009`):** When a test or contract blocks your change, treat it as a stop-and-inquire signal, never an obstacle to route around with a workaround.

5. **The Palantír Linter ([`tools/check_mellon.py`](tools/check_mellon.py)):**  
   A zero-dependency standard-library Python script that performs **bidirectional verification**:
   - Invariants cited anywhere must exist in `docs/INVARIANTS.md`, and every invariant in `docs/INVARIANTS.md` must be cited in the living docs.
   - Next steps in `docs/HANDOFF.md` must resolve to active, uncompleted quests in `ROADMAP.md`.
   - Every claim in `What works` must carry an explicit Proof Badge.
   - Zero em dashes (`—`) across all prose.

---

## Document Map

| Document | Tier | Owns | Update Trigger |
| :--- | :--- | :--- | :--- |
| [`AGENTS.md`](AGENTS.md) | **The Red Book** (Protocol) | Six Crafts, Quest Loop, canonical terms, repository map | A standing workflow or rule changes |
| [`CLAUDE.md`](CLAUDE.md) | **The Red Book** (Pointer) | One-line pointer importing `AGENTS.md` | Almost never |
| [`README.md`](README.md) | **The Red Book** (Overview) | Public entry point, Mellon principles, quickstart | Protocol or public interface changes |
| [`ROADMAP.md`](ROADMAP.md) | **Shire Reckoning** (Phasing) | Phased quests with permanent `P<phase>-<nn>` IDs | Quest scope or status changes |
| [`docs/README.md`](docs/README.md) | **The Red Book** (Map) | Documentation ownership and update triggers | Documentation set changes |
| [`docs/INVARIANTS.md`](docs/INVARIANTS.md) | **Elder Runes** (Axioms) | Immutable system invariants (`INV-001` - `INV-010`) | Foundational architectural shift |
| [`docs/HANDOFF.md`](docs/HANDOFF.md) | **Watchfire Log** (State) | Rewritten current truth with mandatory Proof Badges (<= 80 lines) | Work pauses or current state changes |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | **The Red Book** (Structure) | Component topology, data flows, and failure mitigations | Component or interface changes |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | **The Red Book** (History) | Mithril-dense decision records (`D-NNN`) and open questions (`Q-NNN`) | A consequential choice is accepted or reversed |
| [`docs/TESTING.md`](docs/TESTING.md) | **The Red Book** (Proof) | Test suites, Sting's Blue Glow, and proof boundaries | Test suite or verification tooling changes |
| [`docs/SECURITY.md`](docs/SECURITY.md) | **The Red Book** (Wards) | Trust boundaries, secret handling, and protected assets | Security surface or boundary changes |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | **Quest Loop** (Ritual) | Human and agent Fellowship collaboration lifecycle | Contribution workflow changes |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | **The Red Book** (Chronicle) | User-visible evolutions | Release or user-facing milestone reached |
| [`docs/GLOSSARY.md`](docs/GLOSSARY.md) | **Elvish Lexicon** (Terms) | Full Plain English / Middle-earth / Vedic translation table | Domain vocabulary expands |
| [`docs/archive/`](docs/archive/README.md) | **The Red Book** (Archive) | Expired Watchfire logs and completed roadmap phases | Live files exceed Mithril bounds |
| [`tools/check_mellon.py`](tools/check_mellon.py) | **Palantír Linter** | Standard-library Python checker enforcing reciprocal integrity | Protocol verification rules change |

---

## The Palantír Linter

```bash
python3 tools/check_mellon.py
```

For a blank template containing `{{placeholders}}`:

```bash
python3 tools/check_mellon.py --template
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
└──────────────┬───────────────────────────────┬───────────────┘
               │                               │
               ▼                               ▼
┌─────────────────────────────┐ ┌──────────────────────────────┐
│            Vedas            │ │            Mellon            │
│   "Classical Epistemology"  │ │  "Plain English & Lore"      │
│  Śruti / Smṛti / Vartamāna, │ │  Elder Runes / Red Book /    │
│  Pramāṇa, Sūtras, Nyāya     │ │  Watchfire, Proof Badges,    │
│  For Sanskrit & logic nerds │ │  Mithril Prose, LOTR tropes  │
└─────────────────────────────┘ └──────────────────────────────┘
```
