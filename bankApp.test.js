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

    it("does not throw an error if balance is an numberic string", () => {
      expect(() => new BankApp("1000")).not.toThrow();
    });
  });

  describe("getBalance method", () => {
    it("returns the starting amount when there is no deposit and withdrawal", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      const bankApp2 = new BankApp(2000);
      expect(bankApp2.getBalance()).toEqual(2000);
    });

    it("returns 0 when there is no starting amount input", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
    });
  });
});
