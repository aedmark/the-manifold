# The Manifold

**Repository memory for agentic work.**

The model is disposable. The repository is not.

The Manifold is a zero-dependency repository template for projects worked on across short human and coding-agent
sessions. It moves durable project memory out of the chat and into a small set of Markdown contracts, each with one
authoritative owner, plus a standard-library Python checker that refuses the mistakes that make a handoff lie.

It is the agentic extension of [The Hypervisor](https://github.com/aedmark/the-hypervisor): the Hypervisor gives a
model a body; the Manifold gives the work a memory. Use either alone. Read the [field manual](index.html) for the
long version, or the essay [“Your Agent is a Goldfish”](https://medium.com/@mycelialmirror/your-agent-is-a-goldfish-the-importance-of-a-self-verifying-repository-template-219589a53142)
for the argument behind it.

## The problem

A fresh context window is a feature. It is also where project memory goes to die. Session two adds a second writer
because the first one's rule lived in a chat that closed. Session ten re-litigates a decision nobody recorded, and
the README describes an export that stopped working two formats ago.

The Manifold does not ask the model to remember. It makes the repository carry the memory: current state, enduring
design, planned work, verification, and history, separated so each fact has one owner and each kind of truth can age
at its own speed.

## The two speeds

- **Current truth is rewritten.** [`docs/HANDOFF.md`](docs/HANDOFF.md) and
  [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) describe the repository as it exists now. If a statement is no
  longer true, it is deleted, not kept to make the document look thorough.
- **History is appended.** [`docs/DECISIONS.md`](docs/DECISIONS.md) keeps the choice, the alternatives, the
  consequence, and the tensions still being held. [`ROADMAP.md`](ROADMAP.md) keeps permanent IDs and what a failed
  attempt taught you. A reversal supersedes; it does not erase.
- **Plans have stable references.** Roadmap IDs (`P<phase>-<nn>`), decisions (`D-NNN`), and open questions (`Q-NNN`)
  are never renumbered after other documents cite them.
- **Claims carry limits.** A test says what it proves and what it does not. A clean checker run says the documents
  agree with each other, not that they agree with the code.

## What is in the box

| File | Owns | Update when |
| --- | --- | --- |
| [`AGENTS.md`](AGENTS.md) | Standing rules, authority, maintainer preferences, protected areas, zones, session ownership, repository map | A durable workflow rule or preference changes |
| [`CLAUDE.md`](CLAUDE.md) | A one-line import of `AGENTS.md` | Almost never; it is a pointer |
| [`README.md`](README.md) | Purpose, quick start, and the public entry points | Onboarding or the public entry point changes |
| [`ROADMAP.md`](ROADMAP.md) | Planned, active, finished, and dropped work with stable IDs | Planned status or scope changes |
| [`docs/README.md`](docs/README.md) | Which document owns each kind of information, and update triggers | The documentation set changes |
| [`docs/HANDOFF.md`](docs/HANDOFF.md) | Current state, live session owner, what is unverified, next steps, the last ten sessions | Work pauses or current state changes materially |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | System shape, interfaces, invariants, boundaries, failure modes | Components, interfaces, data flow, or invariants change |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | Accepted choices, alternatives, consequences, held tensions, and open questions | A consequential choice is accepted, reversed, or answered |
| [`docs/TESTING.md`](docs/TESTING.md) | Commands, proof boundaries, limitations, and pitfalls | A suite, command, requirement, or limitation changes |
| [`docs/SECURITY.md`](docs/SECURITY.md) | Assets, trust boundaries, secret handling, and reporting | A threat, boundary, secret, or response path changes |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | The workflow shared by human and automated contributors | The contribution workflow changes |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | User-visible changes | A user-visible change lands or a release is cut |
| [`docs/archive/`](docs/archive/README.md) | Historical session logs and finished roadmap phases | Live documents exceed their useful size |
| [`tools/check_docs.py`](tools/check_docs.py) | Placeholders, IDs, cross-references, links, duplicate sessions, handoff size, invisible characters | Documentation conventions change |

The template ships all thirteen documents and the checker so nothing is missing on day one. Delete what does not earn its upkeep,
and remove its links and checker entries with it. A small, truthful set beats a comprehensive, abandoned one.

## The checker

```bash
python3 tools/check_docs.py
```

It uses only the Python standard library (`re`, `sys`, `pathlib`). It exits non-zero for a leftover placeholder, a
duplicate or misfiled roadmap ID, an invalid decision or tension number, a dangling `P-`/`D-`/`Q-`/`T-` reference, a
duplicate session, a broken relative link, a path in the `AGENTS.md` layout table that does not exist, or an invisible
or bidirectional control character in a document. It warns, without failing, when the handoff is missing its date,
older than its newest session entry, over ten session entries, or over eighty lines of current state.

A clean run is not proof that the prose is true. It is proof that the documents are internally consistent. Code
correctness still belongs to tests, diffs, and the “Does not prove” column.

## Adopt it

1. Copy the directory contents to the repository root.
2. Replace every `{{...}}` placeholder. Run `python3 tools/check_docs.py` to find leftovers.
3. Delete inapplicable sections and documents, then remove their links and checker entries.
4. Describe the system as it exists. Record inherited choices as accepted decisions instead of pretending they were
   made during the migration.
5. Agree on branch, review, release, dependency, and destructive-action authority in `AGENTS.md`.
6. Seed the roadmap and handoff with the next real piece of work. Run `python3 tools/check_docs.py` again.

For an existing repository, derive claims from code, tests, configuration, and history. Mark unverified assumptions
plainly and turn important gaps into roadmap items.

## This repository is the template

The documents here still contain `{{placeholders}}` on purpose: they are the blank forms an adopter replaces. The
clean run for the template itself is:

```bash
python3 tools/check_docs.py --template
```

That prints `0 error(s), 0 warning(s) in 13 file(s)`. Without `--template`, the checker lists every blank an adopter
must fill. That is not a broken repository; it is the adoption checklist.

The field manual is [`index.html`](index.html). It is the current front door. For three-speed epistemic extensions with
mandatory proof badges and reciprocal invariant checkers, see [`vedas/`](vedas/README.md) (classical Sanskrit
epistemology) and [`mellon/`](mellon/README.md) (the plain-English and Middle-earth edition).

## Requirements

Python 3, `git` for the clone, and any agent that can read and write files. No packages, no virtual environment, no
network access, and no build step.

## Licence

MIT. See [`LICENSE`](LICENSE).
