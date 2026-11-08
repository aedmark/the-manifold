# Contribution Protocol: The Fellowship Quest Loop

Governs the collaborative workflow between human maintainers and coding agents.

---

## The 5-Stage Quest Loop

```
     1. Scouting          2. Council of Elrond        3. The Forge         4. Khazad-dûm        5. Watchfire
  (Read & Drop Priors) ──► (Scope & Ask First) ──► (Mithril Implementation) ──► (Sting & Badges) ──► (Log & Palantír)
                                   ▲                         │                        │
                                   └───── Turn Back at Caradhras (Loopback) ──────────┘
```

1. **Scouting at Amon Hen (Read & Drop Illusions):**
   - Read [`docs/HANDOFF.md`](HANDOFF.md) and [`docs/INVARIANTS.md`](INVARIANTS.md).
   - Confirm the active quest (`P<phase>-<nn>`) in [`../ROADMAP.md`](../ROADMAP.md).
   - Run `git status` to confirm a clean working tree.
   - Ban **Saruman's Voice** ([`INV-010`](INVARIANTS.md)): drop pre-trained framework or build assumptions not grounded in the repository's files.

2. **The Council of Elrond (Scope & Clarify):**
   - Formulate one small, reviewable change.
   - Check **The Doors of Durin** ([`INV-004`](INVARIANTS.md), [`INV-009`](INVARIANTS.md)): trace why an existing constraint exists (`D-NNN`, `INV-NNN`) before altering or removing it.
   - Resolve **Riddles in the Dark** ([`INV-009`](INVARIANTS.md)): surface unstated assumptions and ask clarifying questions (**Speak, Friend**) before writing code.
   - Do not mix opportunistic refactoring with targeted quest work.

3. **The Forge of Celebrimbor (Build in Mithril Prose):**
   - Implement the change with minimal tokens and clean diffs.
   - Update corresponding documentation contracts in the same turn.
   - If implementation or testing invalidates a scoped assumption, **Turn Back at Caradhras** (loop back to the Council of Elrond and ask clarifying questions, [`INV-009`](INVARIANTS.md)) rather than widening scope in place.

4. **Trial at Khazad-dûm (Verify & Badge):**
   - Execute test suites as outlined in [`docs/TESTING.md`](TESTING.md), observing **Sting's Blue Glow** ([`INV-007`](INVARIANTS.md)).
   - Honor **"You Shall Not Pass!"** ([`INV-007`](INVARIANTS.md), [`INV-009`](INVARIANTS.md)): never route around failing checks or contract friction with silent workarounds.
   - Tag all claims with `[OBSERVED]`, `[DEDUCED]`, `[CONTRACT]`, `[HYPOTHESIS]`, or `[UNTESTED]` ([`INV-003`](INVARIANTS.md)).

5. **Lighting the Watchfire (Handoff & Palantír Check):**
   - Rewrite the current state in [`docs/HANDOFF.md`](HANDOFF.md) (staying under 80 lines, [`INV-005`](INVARIANTS.md)).
   - Run `python3 tools/check_mellon.py` and ensure zero errors.
