# Verification and Testing Strategy (The Receipts)

Testing commands, coverage boundaries, known pitfalls, and proof limits.
Every suite explicitly defines its **Receipt Tag boundary**: what it proves directly (`[SAW_IT_MYSELF]`), what it deduces logically (`[OBVIOUSLY]`), and what it leaves unproven (`[NO_RECEIPTS]`).

---

## The 5-Step Verification Routine (Show Me the Receipts)

When fixing a bug or adding behavior, the agent follows the 5-step Verification Routine:

1. **State the Claim:** State the exact behavior or Non-Negotiable being asserted (`INV-001` through `INV-010`).
2. **Find the Culprit:** Identify the exact defect or missing check in the existing code.
3. **Catch the Red Flag (Negative Proof, `INV-007`):** Run the new test against the pre-change codebase and watch it fail. A test that passes on broken code is totally useless and proves nothing.
4. **Make the Edit:** Apply the minimal, surgical code change.
5. **Clear the Check:** Run the test suite against the post-change codebase, observe clean passage, and mark the result `[SAW_IT_MYSELF]`.

If any test or contract blocks the change unexpectedly, do not route around it with a cheesy workaround or weakened assertion (`INV-007`, `INV-009`); stop and ask the maintainer.

---

## Verification Commands

### 1. Document & Protocol Integrity Check (The Vibe Linter)
```bash
# Template self-check (allows {{placeholders}})
python3 tools/check_totally.py --template

# Strict check for an active adopted repository
python3 tools/check_totally.py
```

### 2. Receipt Tag Boundaries

| Command / Suite | Receipt Tag | What It Proves (`[SAW_IT_MYSELF]`) | What It Does NOT Prove (`[NO_RECEIPTS]`) | Enforced Invariants |
| :--- | :--- | :--- | :--- | :--- |
| `python3 tools/check_totally.py --template` | `[SAW_IT_MYSELF]` | Document structure is valid; links resolve; IDs and Receipt Tags match; zero em dashes. | Does not prove that application code compiles or passes runtime tests. | `INV-001` through `INV-010` |
| Code Unit Tests (`{{unit_cmd}}`) | `[SAW_IT_MYSELF]` | Deterministic functions match expected inputs and outputs. | Does not prove UI layout on real devices or concurrency under load. | `INV-007`, `INV-008` |
| Type / Schema Check (`{{type_cmd}}`) | `[OBVIOUSLY]` | Static types and interfaces conform to declared contracts. | Does not prove absence of business-logic bugs. | `INV-002`, `INV-007` |

---

## Before Any Run

What has to be true before a test or live run means anything, and what keeps a run from harming the host machine.

- **Clean state:** `{{the reset command, e.g. sh reset.sh}}`. Tests and runs read saved state or logs; leftovers from an earlier run can pass or fail a test for the wrong reason. The reset command must never wipe caches that are expensive to rebuild ([`ARCHITECTURE.md`](ARCHITECTURE.md), "State and Caches").
- **Resource caps:** `{{e.g. systemd-run --user --scope -p MemoryMax=8G}}`. A runaway test or model loop can exhaust host memory and take down the session.
- **Required services:** `{{local model server, database, or dev server on port NNNN}}`, and how to verify they are listening before running tests.

---

## Runs That Vary (Nondeterministic & Model-Evaluated Suites)

Some results depend on factors outside deterministic code: a language model, network latency, or timing under load.

- **One run proves little:** Run nondeterministic suites several times and record the tally with the date and model (`"6/7, 7/7, 5/7 on {{model}}, 2026-11-08"`).
- **Read the failure before blaming the code:** State in [`HANDOFF.md`](HANDOFF.md) whether a miss came from application code or the outside service.
- **Inject rare bad inputs directly:** To test how the code handles malformed replies or timeouts, inject them deterministically rather than rerunning until they happen by chance.
- **Test the judge before trusting its verdict:** Anything that scores output (an LLM-as-judge, a similarity metric, a rubric) gets known-answer controls first, including a deliberately bad case it must rank last (`INV-007`). A judge that fails its controls is not `[SAW_IT_MYSELF]` evidence; record the control results next to the verdict.

---

## Change-to-Check Matrix

| Changed area | Minimum checks | Additional evidence |
| :--- | :--- | :--- |
| Documentation only | `python3 tools/check_totally.py` | Render or link check if relevant |
| Pure logic | `{{unit suite}}` | Property, fuzz, or negative proof check (`INV-007`) |
| User workflow | `{{unit plus end-to-end}}` | Manual accessibility or browser check |
| Schema, migration, or persistence | `{{migration and integration suites}}` | Backup and rollback rehearsal |
| Security boundary | `{{negative and abuse-case tests}}` | Targeted security review ([`SECURITY.md`](SECURITY.md)) |

---

## Manual Checks & Environment Recipes

- **Manual Checks (Before Release):** Record who checked what, where, and when in [`HANDOFF.md`](HANDOFF.md) (`{{e.g. open each app; type, save, reload; verify zero data loss across supported browsers}}`).
- **Environment Recipes:** How to provision test tools in each environment listed in [`../AGENTS.md`](../AGENTS.md) (`{{e.g. local virtual environment or headless browser setup}}`).

---

## Known Pitfalls

- **Untagged Handoff Claims:** Claiming a feature works in `docs/HANDOFF.md` without running its test suite this session. Mitigation: tag with `[NO_RECEIPTS]` unless directly observed (`INV-003`).
- **Fake Tests (Tautology):** Writing a test after the fix without verifying that it fails on the bug first. Mitigation: enforce negative proof grounding (`INV-007`).
- **Broken Cross-References:** Renaming or removing an ID without updating documents that cite it. Mitigation: run `python3 tools/check_totally.py` (`INV-004`).
- **Group Chat Overflow:** Letting `Current state` in `docs/HANDOFF.md` grow past 80 lines. Mitigation: distill old notes into punchy rules and archive expired session logs (`INV-005`, `INV-008`).
