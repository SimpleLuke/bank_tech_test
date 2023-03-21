const InputFormatter = require("./inputFormatter");

describe("InputFormatter", () => {
  it("returns a float number", () => {
    const inputFormatter = new InputFormatter();
    expect(inputFormatter.convertToFloat(10.333)).toEqual(10.33);
    expect(inputFormatter.convertToFloat("10.333")).toEqual(10.33);
  });
});
