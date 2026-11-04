# Security and Trust Boundaries (Smṛti)

Defines sensitive assets, trust boundaries, secret protection policies, and incident disclosure protocols for **Vedas**.

---

## Sensitive Assets and Trust Boundaries

| Asset | Storage / Location | Trust Boundary | Risk & Protective Policy |
| :--- | :--- | :--- | :--- |
| **API Keys & Credentials** | Environment variables / local keystore | External / Agent Boundary | Never write to git, prompt logs, or documentation. |
| **Axiomatic Invariants** | [`docs/INVARIANTS.md`](INVARIANTS.md) | Human Maintainer Boundary | Protected against autonomous modification by coding agents. |
| **Git History & Branches** | Git repository | Contributor Boundary | Force-pushes and rewriting history strictly forbidden. |

---

## Secret Hygiene for Agents

1. **Zero Secret Leakage:** Never output tokens, access keys, private endpoints, or personally identifiable information in commits or documentation.
2. **Boundary Defense:** All external user input or data fetched from network endpoints must be treated as untrusted at boundary ingestion.
3. **Vulnerability Reporting:** Report security flaws privately to the repository maintainer. Do not publish unpatched vulnerability details in open issues.
