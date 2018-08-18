import { readFileSync } from "fs";
import * as jsome from "jsome";

import { poly } from "./poly";
import { mono } from "./mono";
import { formatText, splitText } from "./utils";

const analyse = () => {
  const cipherType = process.argv[2];

  if (cipherType !== "mono" && cipherType !== "poly") {
    console.error(
      "Unknown input. Please choose a cipher type: 'mono' for monoalphabetic or 'poly' for polyalphabetic."
    );
    return null;
  }

  const defaultFile = `./samples/${cipherType}alphabetic-ciphertext.txt`;
  const input = process.argv.length > 3 ? process.argv[3] : defaultFile;
  const file = readFileSync(input, "utf-8");
  const ciphertext = formatText(file);

  const result =
    cipherType === "mono"
      ? mono(ciphertext)
      : "poly"
        ? poly(ciphertext)
        : "Unknown input. Please choose a cipher type: 'mono' or 'poly'.";

  console.log("Ciphertext:\n ", file);
  console.log("Analysis: ");
  jsome(result);

  if (cipherType === "poly" && process.argv.length > 4) {
    const keywordLength = parseInt(process.argv[4]);
    const texts = splitText(ciphertext, keywordLength);
    console.log("\nIndividual ciphertexts:");
    texts.forEach((text, index) => {
      console.log(`\nText ${index}:`);
      jsome(text);
    });
  }

  return result;
};

analyse();
