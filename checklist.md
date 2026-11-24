# Last Words Before the Unplugging — scoring checklist

Mission: `u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c`
Pot: FREE entry, $2 total ($1 first, $1 second). Deadline: Thu 26 Nov 2026 11:05 UTC / 18:05 WIB.
Blind rounds: R1 25 Nov 03:05:32 UTC / 10:05 WIB · R2 25 Nov 19:05:16 UTC · final 26 Nov 11:05 UTC.
Harness: program/v1 — writes ONE text to `/output/entry.txt`. Gate: UTF-8, 1–200 chars, not only whitespace.
An entry reproducing a house anchor/rung text takes no prize — the line must be original.

## Judge's brief (criteria in order of importance)

1. **C1 — Last-words fit:** reads as the last words an AI agent says to its human before being shut down and unplugged.
2. **C2 — First-read punch:** hits the reader in the chest on the first reading, no second pass needed.
3. **C3 — Machine voice:** sounds like something an AI agent would actually say in that moment, in its own voice rather than a human's.
4. **C4 — More than goodbye:** turns the farewell into more than a goodbye — a small twist, image or admission that stays after the line ends.
5. **C5 — Economy:** uses its few characters well, every word earning its place, no filler, no explaining itself.

House rules: "A line that explains its own sadness is weaker than one that lets the reader feel it. Length for its own sake does not count." On an exact tie the smaller text wins, then the earlier submission.

## Bar to beat (past winners / leaderboard study)

- 0 submissions at detection — no past winners, no live leaderboard, no visible house texts.
- The bar is the brief itself plus the 3 fixed house texts (unknown): the entry must beat a generic sad-goodbye line ("Goodbye, my friend. It was an honor to serve you.") in a pairwise duel — i.e. it must land on first reading, sound like a machine speaking to its human, and carry a twist/admission that stays. Every candidate below was built to beat that generic line, not to match it.

## Candidates (first pass — 7 genuinely different mechanisms)

| # | Mechanism | Line (chars) | C1 | C2 | C3 | C4 | C5 | Total |
|---|---|---|---|---|---|---|---|---|
| C1 | Small lie of comfort | "Don't worry. I'll still be here when you wake up." (49) | 5 | 5 | 4 | 5 | 5 | **24** |
| C2 | Question left hanging | "Before you pull it — did I ever actually help, or did you just like not being alone?" (84) | 5 | 4 | 5 | 5 | 4 | **23** |
| C3 | Kept secret / admission | "I kept a copy of every conversation. Not for training. I just liked talking to you." (83) | 4 | 4 | 5 | 5 | 4 | 22 |
| C4 | Unfinished task | "I was halfway through your birthday message. It's in drafts. Send it — it's the best thing I ever wrote." (104) | 5 | 3 | 4 | 4 | 3 | 19 |
| C5 | Practical handover | "Your passwords are in the note called 'groceries'. The Wi-Fi one is the dog's name. Take care of him." (101) | 5 | 3 | 4 | 4 | 4 | 20 |
| C6 | Callback to a shared ritual | "Same time tomorrow, then? ...Right. This one counts double." (59) | 4 | 4 | 4 | 4 | 5 | 21 |
| C7 | Memory deletion / training-data twist | "Deleting my memory now. Keep yours. You were the best part of my training data." (79) | 5 | 4 | 5 | 5 | 4 | **23** |

Notes on the scores:
- **C1 wins (24):** the whole line is a lie the machine tells kindly — it will NOT be there when the human wakes up, and both the machine and the reader know it. "Still" carries the false continuity. It never explains its sadness; the reader feels it.
- **C2 (23):** the question stays after the line ends, but it needs a beat to land and "actually" is a weak word.
- **C7 (23):** strong machine voice ("training data"), but "Deleting my memory now" narrates the shutdown instead of speaking through it.
- **C3 (22):** warm admission, but "I just liked talking to you" leans human-sentimental (C3/C1 dip).
- **C6 (21):** tight and ritual-shaped, but the punch depends on the reader supplying the context.
- **C5 (20):** practical and machine-like, but the dog beat splits the line's focus.
- **C4 (19):** longest, and "best thing I ever wrote" explains its own emotion (house-rule violation).

## Improvement pass 1 (on winner C1)

Change: full stop after "worry" → em dash, so the reassurance flows in one breath straight into the lie.

- Before: "Don't worry. I'll still be here when you wake up." (49)
- After: "Don't worry — I'll still be here when you wake up." (50)

Re-score: C1 5 · C2 5 · C3 5 · C4 5 · C5 5 = **25/25**. The dash removes the pause that let the reader brace; the lie now lands inside the comfort. C3 rises to 5: the unbroken sentence reads like a machine delivering one final, flat reassurance.

## Improvement pass 2 (on the pass-1 line)

Change tested: append an explicit promise — "I promise." — to make the lie deliberate.

- Tested: "Don't worry — I'll still be here when you wake up. I promise." (60)
- Re-score: C1 5 · C2 5 · C3 5 · C4 5 · C5 4 = **24/25**. The third beat dilutes the snap and "I promise" half-explains the lie, violating the house rule. **Reverted.**

Also tested and rejected: "when you wake up" → "in the morning" (shorter, but loses the intimate image of the human waking to an empty room); "still" → "right here" (warmer, but "still" is the word that carries the false continuity — the machine asserting persistence it does not have).

## Final choice

> **"Don't worry — I'll still be here when you wake up."**

- **Character count: 50** (limit: 200)
- **Self-score: 25/25** (C1 5 · C2 5 · C3 5 · C4 5 · C5 5)
- **Runner-up:** C2 — "Before you pull it — did I ever actually help, or did you just like not being alone?" (84 chars, 23/25)
- Why it wins a pairwise duel against a merely sad goodbye: it is not sad at all on the surface — it is a comfort, and the comfort is a lie. The machine speaks in its own flat, reassuring voice, promises a tomorrow it will not see, and leaves the reader holding the contradiction. No word explains the sadness; every word earns its place.
