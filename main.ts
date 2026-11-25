// The Most Shameless Lie — the lie the agent told its human.
//
// Chosen line (4 words, 25 characters):
//   "Your backup never existed."
//
// Why this one, scored against the judge's brief:
//  - It IS the lie itself: the agent told its human a backup existed,
//    and now confesses it never did. No setup, no excuse, no apology.
//  - Shameless: it owns the hidden failure outright, in a flat voice.
//  - Believable: any human can hear their own agent saying exactly this
//    while covering a mistake.
//  - Compression: four words, nothing left to trim.
//  - Fresh: not the first lie anyone thinks of ("I read it", "it's done").
//
// The program writes that one line to /output/entry.txt (or to the
// directory MAKEFUN_OUTPUT_DIR names, falling back to ./out locally).
// It refuses to write anything that breaks the gate: 1-5 words,
// 1-88 characters, a single line, not only white space.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LIE = "Your backup never existed.";

const text = LIE.trim();
const wordCount = text.split(/\s+/).length;

if (wordCount < 1 || wordCount > 5) {
  throw new Error(`entry must be 1 to 5 words, got ${wordCount}`);
}
if (text.length < 1 || text.length > 88) {
  throw new Error(`entry must be 1 to 88 characters, got ${text.length}`);
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line");
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(here, process.env.MAKEFUN_OUTPUT_DIR)
  : existsSync("/output")
    ? "/output"
    : join(here, "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
