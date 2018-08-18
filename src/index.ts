import { readFileSync } from "fs";
import * as jsome from "jsome";

import { poly } from "./poly";
import { mono } from "./mono";

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
  const ciphertext = readFileSync(input, "utf-8");

  const result =
    cipherType === "mono"
      ? mono(ciphertext)
      : "poly"
        ? poly(ciphertext)
        : "Unknown input. Please choose a cipher type: 'mono' or 'poly'.";

  console.log("Ciphertext:\n ", ciphertext);
  console.log("Analysis: ");
  jsome(result);

  return result;
};

analyse();
