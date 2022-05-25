console.log("************** DELIVERABLE 01 *********************");

console.log("=== HEAD ===");
const series: string[] = [
  "Stranger things",
  "The Office",
  "Workings Moms",
  "True Detective",
];

const head = (element: string[]): string => {
  const [first] = element;
  return first;
};

console.log(head(series));

console.log("=== TAIL ===");
const tail = (element: string[]): string[] => {
  const [, ...tail] = element;
  return tail;
};

console.log(tail(series));

console.log("=== INIT ===");
const init = (element: string[]): string[] => {
  const [...init] = element;
  return init.slice(0, -1);
};

console.log(init(series));

console.log("=== LAST ===");

const LAST = (element: string[]): string => {
  const [...init] = element;
  return init.pop();
};

console.log(LAST(series));
