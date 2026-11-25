// Dad Joke Showdown — make.fun entry (v2).
// Writes one dad joke (at most 200 characters) to /output/entry.txt.
// The joke is a clean chicken-crossing-the-road pun with the
// punchline at the end, told straight-faced and readable aloud
// across a dinner table: the chicken was a duck in the training data.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Why did the AI cross the road? To tell the chicken it was actually a duck in the training data.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
