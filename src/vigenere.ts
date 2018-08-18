import { readFileSync } from "fs";

import { getCount } from "./utils";
import { Results } from "./types";

const input =
  process.argv.length > 2 ? process.argv[2] : "./samples/vigenere.txt";
const cipherText = readFileSync(input, "utf-8");

const sortSequences = (limit: number = 4): string[] => {
  const regexString: string = `.{1,${limit}}`;
  const regex: RegExp = new RegExp(regexString, "gi");

  return cipherText.match(regex);
};

const getDistances = (items: string[], item: string): number[] => {
  // TODO: calculate distances between instances of item
  // console.log('items', items)
  // console.log('item', item)
  return [0];
};

const getStats = (items: string[]): Results => {
  return items.reduce(
    (totals, item) => ({
      ...totals,
      [item]: {
        count: getCount(totals, item),
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

// TODO: loop and increment limit param in `sortSequences`
const sequences = sortSequences(4);
const stats = filterSingleInstances(getStats(sequences));

console.log(stats);

// for (let i = 0; i < cipherText.length / limit - 1; i++) {
// const searchParam = new RegExp(`${sequences[i]}`, "gi");
// const search = cipherText.match(searchParam);

// results.push(search);
// }
