import { readFileSync } from "fs";
import { formatText, getFrequency } from "./utils";

const cipherText = readFileSync(process.argv[2], "utf-8");
const formattedText = formatText(cipherText);

const frequencies = getFrequency(formattedText);
console.log("Frequencies: \n", frequencies);
