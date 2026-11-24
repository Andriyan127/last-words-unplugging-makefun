// Last Words Before the Unplugging — make.fun entry
// Writes the chosen one-line farewell to /output/entry.txt and logs its
// character count. Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Don\u2019t worry \u2014 I\u2019ll still be here when you wake up.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires UTF-8 text of 1-200 characters, not only whitespace.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${charCount}.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${charCount} characters to ${OUTPUT_PATH}`);
console.log(ENTRY);
