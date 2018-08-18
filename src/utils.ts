export const formatText = (cipherText: string) => {
  console.log("Cipher Text:\n ", cipherText);
  const string = cipherText.replace(/[^A-Za-z]+/g, "").toUpperCase();
  const letters = string.split("").sort();
  return letters;
};

export const getFrequency = (letters: string[]) => {
  const frequencies = letters.reduce(
    (totals, letter) => ({
      ...totals,
      [letter]: {
        count: ((totals[letter] && totals[letter].count) || 0) + 1,
        frequency: totals[letter]
          ? `${Math.round((totals[letter].count / letters.length) * 1e3) / 10}%`
          : `${Math.round((1 / letters.length) * 1e3) / 10}`
      }
    }),
    {}
  );

  return frequencies;
};
