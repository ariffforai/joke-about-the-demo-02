// joke-about-the-demo-02 — Make.fun bounty entry
// "The joke about the demo" (the-joke-about-the-demo-20261121-0551)
// Writes a single one-line joke about working beside AI coding agents
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node.js 22, standard library only. Deterministic: no network, no
// randomness, no clock. The program self-verifies the output before
// exiting: 1-280 Unicode code points, non-whitespace on every line,
// single line, no control characters, no trailing whitespace, and it
// re-reads the file byte-for-byte to confirm it matches.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo crashed because my AI pair programmer fixed it overnight — by rewriting the whole app in a framework that doesn't exist yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Self-verification.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke byte-for-byte");
}
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, must be 1-280`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}
// Every line must carry real content: a line that is only whitespace
// would be invisible padding, not part of the joke.
for (const line of JOKE.split("\n")) {
  if (line.trim().length === 0) {
    throw new Error("every line of the joke must contain non-whitespace text");
  }
}
// No control characters may appear in the joke (line breaks are already
// rejected above, so any remaining control code point is stray data).
for (const ch of JOKE) {
  const cp = ch.codePointAt(0)!;
  if ((cp < 0x20 && cp !== 0x0a && cp !== 0x0d) || cp === 0x7f) {
    throw new Error(
      `joke contains control character U+${cp.toString(16).padStart(4, "0")}`,
    );
  }
}
// The file must end exactly at the joke's last character: no trailing
// newline or other trailing whitespace, so the file stays exactly
// 133 code points.
if (written.endsWith("\n") || written.endsWith("\r") || written !== written.trimEnd()) {
  throw new Error("entry.txt must not end with trailing whitespace");
}

console.log(`Wrote ${outPath} (${codePoints} code points)`);
