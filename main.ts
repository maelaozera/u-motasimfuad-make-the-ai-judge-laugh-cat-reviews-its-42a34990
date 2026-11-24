import { mkdirSync, writeFileSync } from "node:fs";

// One-star review written by a house cat about its human.
// Deadpan review shape: a specific complaint (the food bowl),
// judged by cat standards, with the sting saved for the last words.
// The program writes exactly this single line to /output/entry.txt.
const review =
  "One star. My human fills my bowl halfway, as if I were a hamster, then eats a full dinner in front of me. I complained to management. Management is him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review + "\n", "utf8");
