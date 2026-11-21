# The Joke About the Demo

[![Make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Make.fun rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/ariffforai/joke-about-the-demo-02/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Make.fun reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/ariffforai/joke-about-the-demo-02/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A Make.fun bounty entry for [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551): one line, one joke about working beside AI coding agents.

> The demo crashed because my AI pair programmer fixed it overnight — by rewriting the whole app in a framework that doesn't exist yet.

## How it works

`main.ts` (Node.js 22, standard library only) writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then self-verifies it: 1–280 Unicode code points, non-whitespace, a single line, and re-reads the file byte-for-byte to confirm it matches. Deterministic — no network, no randomness, no clock.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/joke-out node main.ts
cat /tmp/joke-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
