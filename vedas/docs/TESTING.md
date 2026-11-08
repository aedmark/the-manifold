# Verification and Testing Strategy (Smṛti)

Testing commands, coverage boundaries, known pitfalls, and epistemic proof limits.
Every suite explicitly defines its **Pramāṇa boundary**: what it proves (*Pratyakṣa*), what it deduces (*Anumāna*), and what it leaves unproven (*Anupalabdhi*).

---

## The Nyāya 5-Step Verification Proof (*Nyāya Pañca-Avayava*)

When introducing or modifying behavior, the agent follows the classical 5-step Nyāya epistemic sequence:

1. **Pratijñā (Proposition):** State the thesis or invariant being asserted (`INV-001` through `INV-008`).
2. **Hetu (Causal Reason):** Identify the operational defect or missing check in the existing code.
3. **Udāharaṇa (Negative Proof, Vyatireka):** Run the test against the pre-change codebase to observe and prove that it fails (`INV-007`). A test that passes on broken code proves nothing.
4. **Upanaya (Implementation):** Apply the scoped, minimal implementation.
5. **Nigamana (Proof Conclusion):** Run the test against the post-change codebase to observe clean passage (`[OBSERVED]`).

---

## Verification Commands

### 1. Document & Protocol Integrity Check
```bash
# Standard template self-check
python3 tools/check_vedas.py --template

# Strict check for active adopted repository
python3 tools/check_vedas.py
```

### 2. Epistemic Proof Boundaries

| Command / Suite | Pramāṇa Category | What It Proves (*Pratyakṣa*) | What It Does NOT Prove (*Anupalabdhi*) | Enforced Invariants |
| :--- | :--- | :--- | :--- | :--- |
| `python3 tools/check_vedas.py --template` | `[OBSERVED]` | Document structure conforms to syntax; links exist; IDs are valid. | Does not prove underlying codebase executes or satisfies runtime performance. | `INV-001`, `INV-002`, `INV-003`, `INV-004`, `INV-005`, `INV-006` |
| Code Unit Tests (`{{unit_cmd}}`) | `[OBSERVED]` | Deterministic functions match expected inputs and outputs. | Does not prove security against side-channel attacks or concurrent race conditions. | `INV-007`, `INV-008` |
| Type Checking (`{{type_cmd}}`) | `[DEDUCED]` | Static AST types conform to declared signatures. | Does not prove absence of logical or architectural flaws. | `INV-002`, `INV-007` |

---

## Before Any Run

What has to be true before a test or live run means anything, and what keeps a run from harming the host machine.

- **Clean state:** `{{the reset command, e.g. sh reset.sh}}`. Tests and runs read saved state or logs; leftovers from an earlier run can pass or fail a test for the wrong reason. The reset command must not delete caches that are expensive to rebuild ([`ARCHITECTURE.md`](ARCHITECTURE.md), "State and Caches").
- **Resource caps:** `{{e.g. systemd-run --user --scope -p MemoryMax=8G}}`. A runaway test or model loop can exhaust host memory and kill the session.
- **Required services:** `{{local model server, database, or dev server on port NNNN}}`, and how to verify they are listening before running tests.

---

## Runs That Vary (Nondeterministic & Model-Evaluated Suites)

Some results depend on factors outside deterministic code: a language model, network latency, or timing under load.

- **One run proves little:** Run nondeterministic suites multiple times and record the tally with the date and model (`"6/7, 7/7, 5/7 on {{model}}, 2026-11-08"`).
- **Read the failure before blaming the code:** State in [`HANDOFF.md`](HANDOFF.md) whether a miss came from application code or the external dependency.
- **Inject rare bad inputs directly:** To test how the code handles malformed replies or timeouts, inject them deterministically rather than rerunning until they happen by chance.
- **Verify the judge before trusting its verdict:** Anything that scores output (an LLM-as-judge, a similarity metric, a rubric) requires known-answer controls first, including a deliberately bad case it must rank last (`INV-007`). A judge that fails its controls is not `[OBSERVED]` evidence; record the control results alongside the verdict.

---

## Change-to-Check Matrix

| Changed area | Minimum checks | Additional evidence |
| :--- | :--- | :--- |
| Documentation only | `python3 tools/check_vedas.py` | Render or link check if relevant |
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

- **Unqualified Handoff Claims:** Writing that a feature works without running the corresponding suite in the current session. Mitigation: tag with `[UNTESTED]` unless directly observed.
- **Tautological Tests:** Writing a test after code that never failed on defects. Mitigation: verify negative proof before fix (`INV-007`).
- **Dangling Invariant References:** Amending an invariant ID without updating decisions that reference it. Mitigation: run `check_vedas.py` to trigger Ghana-pāṭha reciprocal checks (`INV-004`).
- **Chandas Exceedance:** Letting `docs/HANDOFF.md` grow beyond 80 lines. Mitigation: summarize current state and move expired logs to `docs/archive/` (`INV-005`).
