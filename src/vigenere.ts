import { readFileSync } from "fs";
import { getFrequency } from "./utils";

const input = process.argv.length > 2 ? process.argv[2] : "vigenere.txt";
const cipherText = readFileSync(input, "utf-8");

const results = [];

for (let i = 0; i < cipherText.length; i++) {
  const limit = 4;
  const regexString = `.{1,${limit}}`;
  const regex = new RegExp(regexString, "gi");

  const matches = cipherText.match(regex);
  const searchParam = new RegExp(`${matches[i]}`, "gi");
  const search = cipherText.match(searchParam);

  results.push(search);
}

console.log(results);
