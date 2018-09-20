import { poly, splitAnalysis } from "../poly";
import fs from "fs";

describe("Polyalphabetic substitution output", () => {
  const ciphertext = fs.readFileSync(
    "samples/polyalphabetic-ciphertext.txt",
    "utf-8"
  );

  it("Finds the repeated sequences in the ciphertext", () => {
    const output = poly(ciphertext);
    const firstSet = output[0];

    expect(output.length).toBe(2);
    expect(firstSet.EFVJ.count).toBe(2);
    expect(firstSet.EFVJ.distances).toEqual([55]);
  });

  it("Analyses each individual alphabet", () => {
    const keywordLength = 5;
    const output = splitAnalysis(ciphertext, keywordLength);
    const { analysis, individualCipherText } = output[0];

    expect(typeof output).toBe("object");
    expect(output.length).toBe(5);
    expect(individualCipherText).toBe(
      "KFJKKWMWFWSNKSKIAAWGFWYSYSJGWJAKDGMHZWGDEJWLSFWWMSSTZEKGSSVWYAEWMLWSWSDGWASKUMDMMATFXIDWWWTHWMMLWWJDWVJDDSAKKLWIWJKDYDUVU"
    );
    expect(analysis.A.count).toBe(7);
    expect(analysis.A.frequency).toBe("5.8%");
  });
});
