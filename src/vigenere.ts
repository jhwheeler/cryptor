import { Results } from "./types";
import { getCount, getAllIndexes } from "./utils";

export const vigenere = (ciphertext: string) => {
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

  const filterSingleInstances = (stats: Results): Results => {
    const nonSingleInstances = Object.keys(stats).filter(
      statistic => stats[statistic].count > 1
    );

    return nonSingleInstances.reduce((obj, key) => {
      obj[key] = stats[key];
      return obj;
    }, {});
  };

  const getResults = (): Results[] => {
    const results: Results[] = [];
    for (let i = 4; i < ciphertext.length - 1; i++) {
      const sequences = sortSequences(i);
      const stats = filterSingleInstances(getStats(sequences));
      results.push(stats);
    }
    return results.filter(result => Object.keys(result).length !== 0);
  };

  return getResults();
};
