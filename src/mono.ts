import { getFrequency } from "./utils";

export const mono = (ciphertext: string) => {
  return getFrequency(ciphertext);
};
