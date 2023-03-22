const DateFormatter = require("./dateFormatter");

describe("DateFormatter", () => {
  it("returns a formattedDate with DD/MM/YYYY format", () => {
    const dateFormatter = new DateFormatter();
    const date = new Date("2023-01-13");
    expect(dateFormatter.getFormattedDate(date)).toEqual("13/01/2023");
  });
});
