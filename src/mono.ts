import { formatText, getFrequency } from "./utils";

export const mono = (ciphertext: string) => {
  const formattedText = formatText(ciphertext);

  return getFrequency(formattedText);
};
