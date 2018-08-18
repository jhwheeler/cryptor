import { readFileSync } from "fs";
import * as jsome from "jsome";

import { vigenere } from "./vigenere";
import { monoalphabetic } from "./monoalphabetic";

const cipherType = process.argv[2];

const defaultFile = `./samples/${cipherType}-ciphertext.txt`;
const input = process.argv.length > 3 ? process.argv[3] : defaultFile;
const ciphertext = readFileSync(input, "utf-8");

const result =
  cipherType === "monoalphabetic"
    ? monoalphabetic(ciphertext)
    : "vigenere"
      ? vigenere(ciphertext)
      : "Unknown input. Please choose a cipher type: 'monoalphabetic' or 'vigenere'.";

console.log("Ciphertext:\n ", ciphertext);
console.log("Analysis: ");
jsome(result);
