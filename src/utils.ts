export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
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
        count: ((totals[item] && totals[item].count) || 0) + 1,
        frequency: totals[item]
          ? `${Math.round((totals[item].count / items.length) * 1e3) / 10}%`
          : `${Math.round((1 / items.length) * 1e3) / 10}`
      }
    }),
    {}
  );
};
