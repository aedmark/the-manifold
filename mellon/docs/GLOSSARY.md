# The Elvish Lexicon: Plain-English, Middle-earth & Vedic Glossary

Mellon translates every formal concept from [Vedas](../../vedas/README.md) into plain English and familiar Middle-earth (*Lord of the Rings*) tropes. Teams can also use this table as a template to skin the protocol in any universe they prefer.

---

## Complete Translation Table

| Plain English Meaning | Mellon Term (Middle-earth) | Vedic Term (`vedas/`) | Enforced By |
| :--- | :--- | :--- | :--- |
| **Fresh context window with zero memory of past chats** | **New Traveler** (at the Prancing Pony) | *Śūnya* (Emptiness) | Architecture |
| **Tier 1: Immutable bedrock laws of the project** | **The Elder Runes** (`docs/INVARIANTS.md`) | *Śruti* (Revealed Axiom) | `INV-001` - `INV-010` |
| **Tier 2: Append-only architecture and decision history** | **The Red Book of Westmarch** (`DECISIONS.md`) | *Smṛti* (Remembered Lore) | `INV-002`, `INV-004` |
| **Tier 3: Rewritten 80-line current session handoff** | **The Watchfire Log** (`docs/HANDOFF.md`) | *Vartamāna* (Living Present) | `INV-005` |
| **Mandatory tag showing how a claim was proven** | **Proof Badge / Ranger Mark** | *Pramāṇa* (Means of Knowledge) | `INV-003` |
| **Directly verified by running a test or command now** | **`[OBSERVED]`** (*Eyes of the Ranger*) | *Pratyakṣa* | `INV-003` |
| **Logically proved from static types, schemas, or laws** | **`[DEDUCED]`** (*Lore-master's Deduction*) | *Anumāna* | `INV-003` |
| **Established by maintainer policy or external spec** | **`[CONTRACT]`** (*Word of the Council*) | *Śabda / Āptavākya* | `INV-003` |
| **Working theory for an anomaly; needs proof** | **`[HYPOTHESIS]`** (*Rumor in the Shire*) | *Arthāpatti* | `INV-003` |
| **Explicit boundary of what was not run or tested** | **`[UNTESTED]`** (*Uncharted Wilds*) | *Anupalabdhi* | `INV-003` |
| **High-density rule under 25 words with zero fluff** | **Mithril Prose** (*Light & Dragon-Hard*) | *Sūtra* (Aphorism) | `INV-008` |
| **Distilling verbose logs into short durable rules** | **Elven Sleep** (Consolidation Pass) | *Sūtra Consolidator* | `INV-008` |
| **Ban on em dashes (`—`) and robotic AI filler** | **No Black Speech** (Lexical Firewall) | *Śikṣā* (Orthography) | `INV-006` |
| **A new test must fail on the old bug before you trust it** | **Sting's Blue Glow** (Negative Proof) | *Vyatireka / Udāharaṇa* | `INV-007` |
| **Bidirectional Python script that catches doc lies** | **The Palantír Linter** (`check_mellon.py`) | *Ghana-pāṭha* Checker | `INV-004` |
| **The 5-stage start-to-finish session workflow** | **The Fellowship Quest Loop** | *Kalpa* (Session Ritual) | `AGENTS.md` |
| **Projecting pre-trained model defaults onto the repo** | **Saruman's Voice** (Prior Illusion) | *Adhyāsa* (Superimposition) | `INV-010` |
| **Ambiguity or part-whole gap that blocks safe coding** | **Riddles in the Dark** | *Saṃśaya* (Epistemic Doubt) | `INV-009` |
| **Asking clarifying questions before writing code** | **Speak, Friend** (at the Council of Elrond) | *Praśna* (Clarifying Inquiry) | `INV-009` |
| **Looping from Build/Verify back to Scope on a surprise** | **Turn Back at Caradhras** (Spiral Loopback) | *Āvartana* (Rotary Return) | `INV-009` |
| **Code or test friction that halts workarounds** | **"You Shall Not Pass!"** (Balrog Stop-Trigger) | *Pratibandha* (Resistance) | `INV-007`, `INV-009` |
| **Tracing why an old guard exists before removing it** | **The Doors of Durin** (Chesterton's Gate) | *Pūrva-Pakṣa* (Prior Position) | `INV-004`, `INV-009` |
| **Two true claims that conflict, held with an owner & trigger** | **Held Tension / Two Watchtowers** (`T-NNN`) | *Ubhaya-Saṃkaṭa* (Dual Dilemma) | `DECISIONS.md` |
| **One repository and the rules that apply inside it** | **Zone / Realm Border** | *Kṣetra* (Field / Domain) | `AGENTS.md` |
| **Permanent, never-renumbered roadmap task IDs** | **The Shire Reckoning** (`P1-01`, `P2-03`) | *Jyotiṣa* (Chronometry) | `INV-004` |
