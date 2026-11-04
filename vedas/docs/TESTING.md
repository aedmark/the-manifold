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

## Known Pitfalls

- **Unqualified Handoff Claims:** Writing that a feature works without running the corresponding suite in the current session. Mitigation: tag with `[UNTESTED]` unless directly observed.
- **Tautological Tests:** Writing a test after code that never failed on defects. Mitigation: verify negative proof before fix (`INV-007`).
- **Dangling Invariant References:** Amending an invariant ID without updating decisions that reference it. Mitigation: run `check_vedas.py` to trigger Ghana-pāṭha reciprocal checks (`INV-004`).
- **Chandas Exceedance:** Letting `docs/HANDOFF.md` grow beyond 80 lines. Mitigation: summarize current state and move expired logs to `docs/archive/` (`INV-005`).
