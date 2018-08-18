import { readFileSync } from "fs";
import { formatText, getFrequency } from "./utils";

const input = process.argv.length > 2 ? process.argv[2] : "ciphertext.txt";
const cipherText = readFileSync(input, "utf-8");
const formattedText = formatText(cipherText);

const frequencies = getFrequency(formattedText);
console.log("Frequencies: \n", frequencies);
