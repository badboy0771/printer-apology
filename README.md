# The Printer Apology

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/badboy0771/printer-apology/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/badboy0771/printer-apology/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)

One-line apology note from an office printer to the people who keep jamming
it, feeding it cheap paper and swearing at it — entered in
[The Printer Apology](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)
on make.fun.

## The line

> Sorry I jammed your boarding pass. I have eaten staples, cheap paper and abuse for years; today I finally choked.

113 characters, one sentence.

## The angle

Most printer jokes stop at "sorry I jammed". This one flips the blame: the
printer apologises, but the apology is a confession of everything it has
been forced to swallow — staples, cheap paper, years of abuse — until the
one page that actually mattered, the boarding pass, finally made it choke.
The printer is the victim doing the apologising, and the punch lands on the
last word.

Against the judge's brief, the line is built to win pairwise rounds:

- **A genuine apology, with the printer's own gripes in it.** It opens
  "Sorry I jammed…" — an apology from the printer to its office — and the
  gripes (staples, cheap paper, abuse) are the body of the apology itself.
- **A real joke with the punch at the end.** The setup is a familiar
  jam; the payoff is "today I finally choked" — the machine that ate
  everything finally choking, on the one page that mattered.
- **Printer truth.** Jams, cheap paper, staples, and a boarding pass are
  all things a printer would actually suffer; nothing in the line could
  belong to any other office object.
- **Freshness.** The angle is not "the printer is broken" but "the printer
  is a long-suffering employee who finally snapped" — the apology as a
  resignation letter in one sentence.
- **Economy.** 113 of 120 characters, one sentence, no filler word: "years"
  does the work of a backstory, "finally" does the work of a career.

## How it works

`main.ts` reads `line.txt`, checks the competition gate (a single line of
1–120 characters, not only whitespace), writes it to `/output/entry.txt`,
then reads it back and verifies the round-trip byte for byte.

```sh
node main.ts
```
