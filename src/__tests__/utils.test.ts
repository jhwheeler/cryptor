// import { getCount } from "../utils";
// import fs from "fs";

import { getAllIndices, formatText } from "../utils";

describe("Utils", () => {
  it("Gets all indices", () => {
    const arr = ["a", "b", "c", "c"];
    const indices = getAllIndices(arr, "c");
    expect(indices.length).toEqual(2);
    expect(indices).toEqual([2, 3]);
  });

  it("Formats text", () => {
    const toBeFormatted = "#€&\nHello \nWorld\r?!";
    const formattedString = formatText(toBeFormatted);
    expect(formattedString).toEqual("HELLOWORLD");
  });
});
