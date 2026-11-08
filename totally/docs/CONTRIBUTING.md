# Contribution Protocol: The Agent Routine

Governs the collaborative workflow between human maintainers and coding agents.

---

## The 5-Stage Agent Routine

```
     1. Catch Up          2. Vibe Check              3. The Edits            4. The Proof        5. Group Chat
  (Read & Drop Priors) ──► (Scope & Ask First) ──► (Surgical Implementation) ──► (Receipts & Red Flags) ──► (Log & Vibe Linter)
                                   ▲                         │                        │
                                   └───── Hit Pause & Regroup (Loopback) ─────────────┘
```

1. **Catching Up on the Tea (Read & Drop Priors):**
   - Read [`docs/HANDOFF.md`](HANDOFF.md) and [`docs/INVARIANTS.md`](INVARIANTS.md).
   - Confirm the active task (`P<phase>-<nn>`) in [`../ROADMAP.md`](../ROADMAP.md).
   - Run `git status` to confirm a clean working tree.
   - **Drop the Assumptions** ([`INV-010`](INVARIANTS.md)): discard pre-trained framework or build assumptions that are not backed up by repository files.

2. **The Vibe Check (Scope & Clarify):**
   - Formulate one small, reviewable change.
   - Check **Why Is This Even Here?** ([`INV-004`](INVARIANTS.md), [`INV-009`](INVARIANTS.md)): trace why an existing constraint was added (`D-NNN`, `INV-NNN`) before altering or deleting it.
   - **Ask First, Don't Guess** ([`INV-009`](INVARIANTS.md)): surface unstated assumptions and ask clear clarifying questions before writing code.
   - Do not mix opportunistic refactoring with targeted task work.

3. **Making the Edits (Surgical Implementation):**
   - Implement the change with clean, minimal diffs.
   - Update corresponding documentation contracts in the same turn.
   - If implementation or testing invalidates a scoped premise, **Hit Pause & Regroup** (loop back to Stage 2 and clarify scope, [`INV-009`](INVARIANTS.md)) instead of spiraling into messy hacks.

4. **Showing the Proof (Verify & Receipts):**
   - Execute test suites as outlined in [`docs/TESTING.md`](TESTING.md), verifying negative proof first ([`INV-007`](INVARIANTS.md)).
   - **Catch the Red Flag** ([`INV-007`](INVARIANTS.md), [`INV-009`](INVARIANTS.md)): never route around failing checks or contract friction with silent workarounds.
   - Tag all claims with `[SAW_IT_MYSELF]`, `[OBVIOUSLY]`, `[GOSPEL]`, `[VIBE_CHECK]`, or `[NO_RECEIPTS]` ([`INV-003`](INVARIANTS.md)).

5. **Updating the Group Chat (Handoff & Vibe Linter):**
   - Rewrite the current state in [`docs/HANDOFF.md`](HANDOFF.md) (staying under 80 lines, [`INV-005`](INVARIANTS.md)).
   - Run `python3 tools/check_totally.py` and ensure zero errors.
