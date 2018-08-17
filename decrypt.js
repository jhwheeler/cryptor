const fs = require("fs");

const cipherText = fs.readFileSync("./ciphertext.txt", "utf-8");

const getCount = cipherText => {
  console.log("Cipher Text:\n ", cipherText);
  const string = cipherText.replace(/[^A-Za-z]+/g, "").toUpperCase();
  const letters = string.split("").sort();

  const frequencies = letters.reduce(
    (totals, letter) => ({
      ...totals,
      [letter]: (totals[letter] || 0) + 1
    }),
    {}
  );

  console.log("Frequencies:\n ", frequencies);
};

getCount(cipherText);
