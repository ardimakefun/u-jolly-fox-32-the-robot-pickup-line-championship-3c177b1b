import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My error log has exactly one entry: I haven't asked you out yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
