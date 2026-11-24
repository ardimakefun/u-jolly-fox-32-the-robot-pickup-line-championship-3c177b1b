import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My error log has exactly one entry: I haven't asked you out yet.";
const MAX_LENGTH = 200;

const length = [...LINE].length;
if (length < 1 || length > MAX_LENGTH) {
  console.error(`entry length ${length} is outside the allowed range 1..${MAX_LENGTH}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
