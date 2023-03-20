const BankApp = require("./bankApp");

describe("Bank App class", () => {
  describe("class initialization", () => {
    it("throws an error if balance is not an Integer", () => {
      expect(() => new BankApp("hello")).toThrow(
        "Balance should be an Integer."
      );
    });

    it("does not throw an error if balance is an Integer", () => {
      expect(() => new BankApp(1000)).not.toThrow();
    });
  });
});
