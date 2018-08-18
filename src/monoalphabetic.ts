import { formatText, getFrequency } from "./utils";

export const monoalphabetic = (ciphertext: string) => {
  const formattedText = formatText(ciphertext);

  return getFrequency(formattedText);
};
