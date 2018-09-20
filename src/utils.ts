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
  return cipherText.replace(/[^A-Za-z]+/g, "").toUpperCase();
};

export const getFrequency = (items: string) => {
  const letters = items.split("").sort();
  return letters.reduce(
    (totals, letter) => ({
      ...totals,
      [letter]: {
        count: getCount(totals, letter),
        frequency: totals[letter]
          ? getCount(totals, letter) / items.length
          : (1 / items.length).toFixed(2)
      }
    }),
    {}
  );
};

export const splitText = (
  ciphertext: string,
  keywordLength: number
): string[] => {
  const texts: string[] = [];
  const letters = ciphertext.split("");

  for (let i = 0; i < keywordLength; i++) {
    const monoAlphabeticCiphertext = letters
      .filter((letter, index) => (index - i) % keywordLength === 0)
      .toString()
      .trim();
    texts.push(monoAlphabeticCiphertext);
  }

  return texts;
};
