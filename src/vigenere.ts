import { readFileSync } from "fs";

interface Statistic {
  count: number;
  distances: number[];
}

type Results = { [sequence: string]: Statistic };

const input = process.argv.length > 2 ? process.argv[2] : "vigenere.txt";
const cipherText = readFileSync(input, "utf-8");

const sortSequences = (limit: number = 4): string[] => {
  const regexString: string = `.{1,${limit}}`;
  const regex: RegExp = new RegExp(regexString, "gi");

  return cipherText.match(regex);
};

const getDistances = (items: string[], item: string): number[] => {
  // TODO: calculate distances between instances of item
  return [0];
};

const getStats = (items: string[]): Results => {
  return items.reduce(
    (totals, item) => ({
      ...totals,
      [item]: {
        count: ((totals[item] && totals[item].count) || 0) + 1,
        distances: getDistances(items, item)
      }
    }),
    {}
  );
};

const filterSingleInstances = (stats: Results) => {
  const nonSingleInstances = Object.keys(stats).filter(
    statistic => stats[statistic].count > 1
  );

  return nonSingleInstances.reduce((obj, key) => {
    obj[key] = stats[key];
    return obj;
  }, {});
};

const sequences = sortSequences(4);
const stats = getStats(sequences);
const filteredStats = filterSingleInstances(stats);

console.log(filteredStats);
