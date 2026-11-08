# Contribution Protocol (Kalpa)

Governs the collaborative ritual between human maintainers and autonomous coding agents.

---

## The Collaborative Lifecycle

```
       1. Śravaṇa           2. Manana          3. Nididhyāsana      4. Pramāṇa          5. Saṃgraha
   (Read State & Inv) ──► (Scope & Praśna) ──► (Build in Sūtras) ──► (Run & Classify) ──► (Handoff & Check)
                                ▲                     │                    │
                                └────── Āvartana (Loopback on Surprise) ───┘
```

1. **Orientation (Śravaṇa):**
   - Read [`docs/HANDOFF.md`](HANDOFF.md) and [`docs/INVARIANTS.md`](INVARIANTS.md).
   - Confirm active roadmap item (`P<phase>-<nn>`) in [`../ROADMAP.md`](../ROADMAP.md).
   - Run `git status` to ensure working tree is clean.
   - Purge *Adhyāsa* (pre-trained framework or tooling defaults not grounded in the repository, [`INV-010`](INVARIANTS.md)).

2. **Scoping (Manana):**
   - Formulate exactly one reviewable, self-contained change.
   - Surface *Saṃśaya* (ambiguity or unstated assumptions) and ask clarifying questions (*Praśna*) before writing code ([`INV-009`](INVARIANTS.md)).
   - Do not mix opportunistic refactoring with targeted task execution.

3. **Execution (Nididhyāsana):**
   - Implement the change using minimal tokens and clean diffs.
   - Update corresponding documentation contracts in the same commit.
   - If implementation or testing invalidates a scoped assumption, execute *Āvartana* (loop back to *Manana* and issue *Praśna*, [`INV-009`](INVARIANTS.md)) rather than widening scope in place.

4. **Epistemic Proof (Pramāṇa-Parīkṣā):**
   - Execute test suites as outlined in [`docs/TESTING.md`](TESTING.md).
   - Qualify all assertions with `[OBSERVED]`, `[DEDUCED]`, or `[CONTRACT]`.

5. **Handoff (Saṃgraha):**
   - Rewrite the current state in [`docs/HANDOFF.md`](HANDOFF.md).
   - Run `python3 tools/check_vedas.py` and ensure zero errors.
