# Decisions

Short, append-only record of choices that a future session might otherwise re-litigate. One entry per decision.
Newest at the bottom. To reverse a decision, add a new entry that supersedes it; the old one keeps its text and only
its status changes ("superseded by D-MMM"). An "Update, same session" note at the end of an entry is fine while it is
still on the working branch.

Record pre-existing choices too, the first time a session has to understand them ("status: accepted, recorded
YYYY-MM-DD"): the reason something is the way it is gets lost faster than the code. Every constraint in the codebase is
an answer to an earlier question or failure mode; recording that originating question here stops a future session from
removing a fence whose purpose it forgot.

Format:

```
## D-NNN Title  (YYYY-MM-DD, status: proposed | accepted | rejected | superseded by D-MMM)
**Context:** the originating question, failure mode, or measurement this choice answers (and the roadmap item or bug).
**Decision:** what we chose (numbered points if there are several).
**Alternatives:** what else was considered, and why not (one line each). Optional, but it is what stops the
re-litigation.
**Consequences:** what it costs or constrains; what was left out and why.
**Review trigger:** an event that should cause reconsideration. Optional.
```

---

## D-001 {{The first architectural choice, e.g. "Static site, no build step"}}  ({{YYYY-MM-DD}}, status: accepted)
**Context:** {{...}}
**Decision:** {{...}}
**Alternatives:** {{...}}
**Consequences:** {{...}}

## Held tensions

A tension is two claims that are true and do not fit together yet. It is not an open question. An open question has
an unknown answer; a held tension has two known answers and a price. Hold it only while the price of holding is
lower than the price of choosing badly.

Each tension names an owner, a review trigger, and the cost of holding both. A tension with no owner or no trigger is
deleted at consolidation. A tension that survives review becomes a decision, with the losing claim recorded as an
alternative.

Format:

```
### T-NNN Title  (YYYY-MM-DD, status: held | resolved by D-MMM)
**Owner:** ...
**Claim A:** ...
**Claim B:** ...
**Why both hold:** ...
**Cost of holding both:** ...
**Review trigger:** ...
```

### T-001 {{The first held tension, e.g. "Zero dependencies against a parser"}}  ({{YYYY-MM-DD}}, status: held)
**Owner:** {{...}}
**Claim A:** {{...}}
**Claim B:** {{...}}
**Why both hold:** {{...}}
**Cost of holding both:** {{...}}
**Review trigger:** {{...}}

---

## Open questions

Questions requiring maintainer or stakeholder input. This is their one home: HANDOFF and the roadmap refer to them by ID. Numbers are
permanent; an answered question stays, with the answer and its date.

```
- **Q-NNN** The question. (asked YYYY-MM-DD, by whom; blocks P1-NN; recommendation: ...)
- **Q-NNN** ~~The question.~~ Answered YYYY-MM-DD: the answer, D-NNN.
```

- **Q-001** {{A question not answered yet.}} ({{asked YYYY-MM-DD; blocks which item; recommendation}})
