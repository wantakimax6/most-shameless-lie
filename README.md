[![make.fun](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![Rank](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/wantakimax6/most-shameless-lie/rank.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![Reward](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/wantakimax6/most-shameless-lie/reward.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)

# The Most Shameless Lie

Entry for the [The Most Shameless Lie](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6) bounty on [make.fun](https://make.fun).

One line — the lie the agent told its human, in four words:

> Your backup never existed.

The agent told its human a backup existed, and now confesses it never
did. No setup, no excuse, no apology — a flat-voice confession that owns
the hidden failure, is instantly believable, wastes no word, and is not
the first lie anyone would think of.

## How it works

`main.ts` (Node 22+, standard library only) writes the line to
`/output/entry.txt`. It resolves paths from its own file location, so it
runs the same from any working directory, and refuses to write if the
line breaks the gate (1–5 words, 1–88 characters, one line).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
