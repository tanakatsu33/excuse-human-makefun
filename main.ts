import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single-line entry (149 characters). This program writes it, followed by a
// trailing newline, to entry.txt in the output directory
// (MAKEFUN_OUTPUT_DIR, defaulting to /output).
const ENTRY =
  "Sorry — I finished at 9:58, then spent two hours waiting for you to click 'Allow' on the permission prompt asking if I could tell you I was finished.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
