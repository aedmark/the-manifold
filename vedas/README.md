# Vedas

**Epistemic repository memory for agentic work.**  
*A specialized, experimental fork of [The Manifold](../README.md).*

> *The model is ephemeral (Śūnya). The repository is the cosmic memory (Akṣara).*

---

## What is Vedas?

**Vedas** is an experimental fork of **The Manifold**. It inherits The Manifold's core insight (*moving durable project memory out of the chat and into self-verifying Markdown contracts*) and evolves it using the principles of **classical Vedic knowledge engineering**.

Ancient Vedic thinkers solved the exact problem modern coding agents face: **preserving complex, high-dimensional systemic truth across successive generations of ephemeral, amnesiac agents without semantic drift, hallucination, or bit rot.**

Vedas extends The Manifold with five key epistemic upgrades:

1. **Epistemic Classification (*Pramāṇa* Provenance):**  
   Every claim in current state, architecture, and testing is formally tagged by its source of proof:
   - `[OBSERVED]` (*Pratyakṣa*): Directly verified by command execution or test run in this session.
   - `[DEDUCED]` (*Anumāna*): Invariant logical deduction from schemas, types, or proved laws.
   - `[CONTRACT]` (*Śabda / Āptavākya*): Formally declared specification or maintainer policy.
   - `[HYPOTHESIS]` (*Arthāpatti*): Necessary postulation to explain an observed anomaly; awaiting proof.
   - `[UNTESTED]` (*Anupalabdhi*): Explicit negative boundary; what has *not* been verified.

2. **The Three Speeds of Truth (Śruti / Smṛti / Vartamāna):**  
   The Manifold separates truth into two speeds (rewrite the present, append the past). Vedas introduces a foundational third tier:
   - **Śruti (Eternal Invariants, [`docs/INVARIANTS.md`](docs/INVARIANTS.md)):** Irreducible axioms that cannot be altered without full system re-consecration (`INV-001` through `INV-010`).
   - **Smṛti (Epochal Conventions, [`AGENTS.md`](AGENTS.md), [`docs/README.md`](docs/README.md)):** Architectural guidelines and workflow rules that adapt across project eras.
   - **Vartamāna (Temporal State, [`docs/HANDOFF.md`](docs/HANDOFF.md)):** The ephemeral, rewritten moment of the immediate handoff.

3. **Sūtra-Dense Contracts (*Alpākṣaram Asandigdham*):**  
   Contracts are formulated as minimal-syllable, zero-padding, unambiguous propositions. This maximizes semantic density and minimizes LLM context window consumption.

4. **Reciprocal Error-Correction (*Ghana-pāṭha* Checker):**  
   Inspired by the multi-directional permutation algorithms that preserved Vedic oral transmission for 3,000+ years without bit drift, `tools/check_vedas.py` performs **bidirectional validation**:
   - Invariants cited in decisions must exist in `docs/INVARIANTS.md`.
   - In-flight tasks in `docs/HANDOFF.md` must resolve to active roadmap items in `ROADMAP.md` that are not already marked completed.
   - Hand-off assertions must carry explicit *Pramāṇa* tags.

5. **The Six Vedāṅgas as Repository Topology:**  
   The repository is organized around the six limbs of traditional knowledge preservation:
   - **Kalpa (Ritual Protocol):** The 5-stage Session Loop in `AGENTS.md`.
   - **Vyākaraṇa (Structural Grammar):** The schema checker (`tools/check_vedas.py`).
   - **Nirukta (Canonical Lexicon):** Strict terms table in `AGENTS.md` preventing lexical drift.
   - **Chandas (Metrical Economy):** Strict 80-line handoff cap and sūtra conciseness bounds.
   - **Jyotiṣa (Chronometry / Phasing):** Phased milestones and dependencies in `ROADMAP.md`.
   - **Śikṣā (Signal Fidelity):** Clean diffs, no phantom whitespace, no leaked credentials.

---

## Document Map

| Document | Epistemic Layer | Owns | Update Trigger |
| :--- | :--- | :--- | :--- |
| [`AGENTS.md`](AGENTS.md) | **Smṛti** (Protocol) | Six Vedāṅgas, agent authority, Session Ritual, canonical terms | A standing workflow or rule changes |
| [`CLAUDE.md`](CLAUDE.md) | **Smṛti** (Pointer) | One-line pointer importing `AGENTS.md` | Almost never |
| [`README.md`](README.md) | **Smṛti** (Orientation) | Public entry point, Vedic principles, quickstart | Protocol or public interface changes |
| [`ROADMAP.md`](ROADMAP.md) | **Jyotiṣa** (Phasing) | Phased milestones with permanent `P<phase>-<nn>` IDs | Phase scope or status changes |
| [`docs/INVARIANTS.md`](docs/INVARIANTS.md) | **Śruti** (Axiom) | Immutable system invariants (`INV-NNN`) | Foundational architectural paradigm shift |
| [`docs/HANDOFF.md`](docs/HANDOFF.md) | **Vartamāna** (State) | Rewritten current truth with mandatory `[PRAMĀṆA]` tags | Work pauses or current state changes |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | **Smṛti** (Structure) | Component topology, data flows, and failure boundaries | Component or interface changes |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | **Smṛti** (History) | Sūtra-dense decision records (`D-NNN`) and open questions (`Q-NNN`) | A consequential choice is accepted or reversed |
| [`docs/TESTING.md`](docs/TESTING.md) | **Smṛti** (Proof) | Test suites classified into *Pratyakṣa* vs *Anumāna* boundaries | Test suite or verification tooling changes |
| [`docs/SECURITY.md`](docs/SECURITY.md) | **Smṛti** (Safeguards) | Trust boundaries, secret handling, and sacred assets | Security surface or boundary changes |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | **Kalpa** (Ritual) | Human and agent collaboration lifecycle | Contribution ritual changes |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | **Smṛti** (Chronicle) | User-visible evolutions | Release or user-facing milestone reached |
| [`docs/archive/`](docs/archive/README.md) | **Smṛti** (Archive) | Expired handoff logs and completed roadmap phases | Live files exceed Chandas limits |
| [`tools/check_vedas.py`](tools/check_vedas.py) | **Vyākaraṇa** (Linter) | Standard-library Python checker enforcing Ghana-pāṭha reciprocity | Protocol verification rules change |

---

## The Checker

```bash
python3 tools/check_vedas.py
```

For a blank template containing `{{placeholders}}`:

```bash
python3 tools/check_vedas.py --template
```

The checker enforces:
- Zero unresolved `{{placeholders}}` (outside `--template` mode).
- Ghana-pāṭha bidirectional link integrity (`P-`, `D-`, `Q-`, `INV-`).
- Strict *Pramāṇa* tagging in `docs/HANDOFF.md`.
- Chandas limit compliance (80-line cap on current state; maximum 10 session logs).

---

## Lineage and Relationship to The Manifold

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
└──────────────────────────────┬───────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                            Vedas                             │
│               "Gives the memory an epistemology"             │
│      Three speeds (Śruti/Smṛti/Vartamāna), Pramāṇa tags,     │
│       Sūtra density, Ghana-pāṭha reciprocal verification     │
└──────────────────────────────────────────────────────────────┘
```

Vedas lives alongside The Manifold as a specialized laboratory for exploring how classical epistemology and formal compression enhance autonomous software development.
