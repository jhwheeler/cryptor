import { getAllIndices, formatText, getFrequency } from "../utils";

describe("Utils", () => {
  it("Gets all indices", () => {
    const arr = ["a", "b", "c", "c"];
    const indices = getAllIndices(arr, "c");
    expect(indices.length).toEqual(2);
    expect(indices).toEqual([2, 3]);
  });

  it("Formats text", () => {
    const toBeFormatted = "#€&\nHello \nWorld\r?!"; // Random characters to be cleaned up
    const formattedString = formatText(toBeFormatted);
    expect(formattedString).toEqual("HELLOWORLD");
  });

  it("Gets the frequency of a letter", () => {
    const freq = getFrequency("FOO");
    expect(freq["F"].count).toEqual(1);
    expect(freq["O"].count).toEqual(2);
  });
});
