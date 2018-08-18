import { Results } from "./types";

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const getCount = (totals: Results, item: string): number => {
  return ((totals[item] && totals[item].count) || 0) + 1;
};

export const getAllIndexes = (arr, val) => {
  const indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
};

export const formatText = (cipherText: string) => {
  console.log("Cipher Text:\n ", cipherText);
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
