const fs = require("fs");

const cipherText = fs.readFileSync("./ciphertext.txt", "utf-8");

const formatText = cipherText => {
  console.log("Cipher Text:\n ", cipherText);
  const string = cipherText.replace(/[^A-Za-z]+/g, "").toUpperCase();
  const letters = string.split("").sort();
  return letters;
};

const getFrequency = string => {
  const frequencies = string.reduce(
    (totals, letter) => ({
      ...totals,
      [letter]: {
        count: ((totals[letter] && totals[letter].count) || 0) + 1,
        frequency: totals[letter]
          ? `${Math.round((totals[letter].count / string.length) * 1e3) / 10}%`
          : `${Math.round((1 / string.length) * 1e3) / 10}`
      }
    }),
    {}
  );

  console.log("Frequencies:\n ", frequencies);
};

const formattedText = formatText(cipherText);

getFrequency(formattedText);
