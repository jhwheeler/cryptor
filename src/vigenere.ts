import { readFileSync } from "fs";

import { Results } from "./types";
import { getCount, getAllIndexes } from "./utils";

const defaultFile = "./samples/vigenere-ciphertext.txt";
const input = process.argv.length > 2 ? process.argv[2] : defaultFile;
const ciphertext = readFileSync(input, "utf-8");

const sortSequences = (limit: number = 4): string[] => {
  const regexString: string = `.{1,${limit}}`;
  const regex: RegExp = new RegExp(regexString, "gi");

  return ciphertext.match(regex);
};

const getDistances = (
  totals: Results,
  sequence: string,
  sequences: string[]
): number[] => {
  let distances: number[] = [];

  const count = getCount(totals, sequence);
  if (count > 1) {
    const positions = getAllIndexes(sequences, sequence);
    distances = positions.reduce((prevPosition, currPosition) => {
      const distance = currPosition - prevPosition;
      distances.push(distance);
      return distances;
    });
  }

  return distances;
};

const getStats = (sequences: string[]): Results => {
  return sequences.reduce(
    (totals, sequence) => ({
      ...totals,
      [sequence]: {
        count: getCount(totals, sequence),
        distances: getDistances(totals, sequence, sequences)
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

// for (let i = 0; i < ciphertext.length / limit - 1; i++) {
// const searchParam = new RegExp(`${sequences[i]}`, "gi");
// const search = ciphertext.match(searchParam);

// results.push(search);
// }
