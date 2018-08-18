import { Results } from "./types";

export const getCount = (totals: Results, item: string): number => {
  return ((totals[item] && totals[item].count) || 0) + 1;
};

export const getAllIndices = (arr, val) => {
  const indices = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indices.push(i);
    }
  }
  return indices;
};

export const formatText = (cipherText: string) => {
  const string = cipherText.replace(/[^A-Za-z]+/g, "").toUpperCase();
  const items = string.split("").sort();
  return items;
};

export const getFrequency = (items: string[]) => {
  return items.reduce(
    (totals, item) => ({
      ...totals,
      [item]: {
        count: getCount(totals, item),
        frequency: totals[item]
          ? `${Math.round((totals[item].count / items.length) * 1e3) / 10}%`
          : `${Math.round((1 / items.length) * 1e3) / 10}`
      }
    }),
    {}
  );
};
