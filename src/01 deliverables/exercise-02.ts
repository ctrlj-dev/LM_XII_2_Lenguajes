console.log("************** DELIVERABLE 02 *********************");

const gamesFromSofware: string[] = [
  "Dark Souls",
  "Elden Ring",
  "Bloodborne",
  "Demons Souls",
];

const gamesCDProjectRed: string[] = ["The Witcher", "Cyberpunk 2077"];

console.log("=== CONCAT ===");

const concat = (a: string[], b: string[]): string[] => {
  const mergedElements = [...a, ...b];
  return mergedElements;
};

console.log(concat(gamesFromSofware, gamesCDProjectRed));

console.log("=== Opcional ===");

const concatMultiple = (...elements: string[][]): string[] => {
  const mergedElements = elements.flat();
  return mergedElements;
};

console.log(concatMultiple(gamesFromSofware, gamesCDProjectRed));
