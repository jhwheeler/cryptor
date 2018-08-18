"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const cipherText = fs_1.readFileSync("./ciphertext.txt", "utf-8");
const formatText = (cipherText) => {
    console.log("Cipher Text:\n ", cipherText);
    const string = cipherText.replace(/[^A-Za-z]+/g, "").toUpperCase();
    const letters = string.split("").sort();
    return letters;
};
const getFrequency = (letters) => {
    const frequencies = letters.reduce((totals, letter) => (Object.assign({}, totals, { [letter]: {
            count: ((totals[letter] && totals[letter].count) || 0) + 1,
            frequency: totals[letter]
                ? `${Math.round((totals[letter].count / letters.length) * 1e3) / 10}%`
                : `${Math.round((1 / letters.length) * 1e3) / 10}`
        } })), {});
    console.log("Frequencies:\n ", frequencies);
};
const formattedText = formatText(cipherText);
getFrequency(formattedText);
