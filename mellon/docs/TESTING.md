# Verification and Testing Strategy (The Red Book)

Testing commands, coverage boundaries, known pitfalls, and proof limits.
Every suite explicitly defines its **Proof Badge boundary**: what it proves directly (`[OBSERVED]`), what it deduces logically (`[DEDUCED]`), and what it leaves in the Uncharted Wilds (`[UNTESTED]`).

---

## The 5-Step Ranger's Trial (With Sting's Blue Glow)

When fixing a bug or adding behavior, the agent follows the 5-step Ranger's Trial:

1. **The Claim (Proposition):** State the exact behavior or Elder Rune being asserted (`INV-001` through `INV-010`).
2. **The Root Cause (Track the Orc):** Identify the exact defect or missing check in the existing code.
3. **Sting's Blue Glow (Negative Proof, `INV-007`):** Run the new test against the pre-change codebase and watch it fail (glow blue like Bilbo's blade when Orcs are near). A test that passes on broken code is a dull blade and proves nothing.
4. **The Forge (Implementation):** Apply the minimal, surgical code change.
5. **The Clear Blade (Verification):** Run the test suite against the post-change codebase, observe clean passage, and mark the result `[OBSERVED]`.

If any test or contract blocks the change unexpectedly (**"You Shall Not Pass!"**), do not route around it with a silent fallback or weakened assertion (`INV-007`, `INV-009`); stop and ask the maintainer.

---

## Verification Commands

### 1. Document & Protocol Integrity Check (The Palantír Linter)
```bash
# Template self-check (allows {{placeholders}})
python3 tools/check_mellon.py --template

# Strict check for an active adopted repository
python3 tools/check_mellon.py
```

### 2. Proof Badge Boundaries

| Command / Suite | Proof Badge | What It Proves (`[OBSERVED]`) | What It Does NOT Prove (`[UNTESTED]`) | Enforced Elder Runes |
| :--- | :--- | :--- | :--- | :--- |
| `python3 tools/check_mellon.py --template` | `[OBSERVED]` | Document structure is valid; links resolve; IDs and Proof Badges match; zero em dashes. | Does not prove that application code compiles or passes runtime tests. | `INV-001` through `INV-010` |
| Code Unit Tests (`{{unit_cmd}}`) | `[OBSERVED]` | Deterministic functions match expected inputs and outputs. | Does not prove UI layout on real devices or concurrency under load. | `INV-007`, `INV-008` |
| Type / Schema Check (`{{type_cmd}}`) | `[DEDUCED]` | Static types and interfaces conform to declared contracts. | Does not prove absence of business-logic bugs. | `INV-002`, `INV-007` |

---

## Known Pitfalls

- **Untagged Watchfire Claims:** Claiming a feature works in `docs/HANDOFF.md` without running its test suite this session. Mitigation: tag with `[UNTESTED]` unless directly observed (`INV-003`).
- **Dull Blades (Tautological Tests):** Writing a test after the fix without verifying that it fails on the bug. Mitigation: enforce Sting's Blue Glow (`INV-007`).
- **Broken Palantír Links:** Renaming or removing an ID without updating documents that cite it. Mitigation: run `python3 tools/check_mellon.py` (`INV-004`).
- **Watchfire Overflow:** Letting `Current state` in `docs/HANDOFF.md` grow past 80 lines. Mitigation: distill old notes into Mithril Prose and archive expired session logs (`INV-005`, `INV-008`).
