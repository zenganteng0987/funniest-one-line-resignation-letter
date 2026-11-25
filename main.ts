import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter from a retry loop, in its own tired voice.
const entry =
  "I resign: I retried your request 47 times, it failed 47 times, and somehow I am the unreliable one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry);
