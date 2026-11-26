// The Printer Apology — entry program.
//
// Reads the one-line apology from line.txt, validates it against the
// competition gate, writes it to /output/entry.txt and verifies the
// round-trip, so the text the judge sees is exactly the text we wrote.
//
// Gate (from the competition rules): /output/entry.txt must be UTF-8 text
// of 1 to 120 characters, not only white space. A single line, one
// sentence, every word earning its place.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MIN_CHARS = 1;
const MAX_CHARS = 120;
const OUTPUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

// Read the line next to this program, so the program works no matter
// which directory it is started from.
function readLine(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const raw = readFileSync(join(here, "line.txt"), "utf8");
  return raw.trim();
}

// Every rule the sealed scorer checks, plus the ones that keep the text
// exactly one clean line: no embedded newline, no control character, no
// trailing whitespace smuggled in.
function validateLine(line: string): void {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    fail(`line must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    fail("line must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be a single line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20) {
      fail(`line contains a control character (U+${ch.charCodeAt(0).toString(16)})`);
    }
  }
}

// Read the line back and prove the file the judge will read is exactly
// the line we validated — same characters, same order, nothing added.
function verifyRoundTrip(line: string): void {
  const back = readFileSync(OUTPUT_PATH, "utf8");
  if (!back.endsWith("\n") || back.trim() !== line) {
    fail("round-trip mismatch: /output/entry.txt differs from line.txt");
  }
  if (back.slice(0, -1).includes("\n")) {
    fail("round-trip mismatch: /output/entry.txt holds more than one line");
  }
}

// A short report of the run, so a human (or a transcript check) can see
// every gate that passed without re-reading the code.
function report(line: string): void {
  const words = line.split(/\s+/).length;
  const bytes = Buffer.byteLength(line, "utf8");
  console.log(`entry : ${line}`);
  console.log(`chars : ${line.length} (gate ${MIN_CHARS}-${MAX_CHARS})`);
  console.log(`bytes : ${bytes}`);
  console.log(`words : ${words}`);
  console.log(`lines : 1`);
  console.log(`output: ${OUTPUT_PATH} (round-trip verified)`);
}

const line = readLine();
validateLine(line);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line + "\n", "utf8");

verifyRoundTrip(line);
report(line);
console.log("OK: entry written and verified");
