import { readFileSync } from "fs";

const cipherText = readFileSync("./vigenere.txt", "utf-8");
console.log(cipherText);
