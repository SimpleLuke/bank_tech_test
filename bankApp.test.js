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

    it("returns an integer when the starting amount is a numberic string", () => {
      const bankApp = new BankApp("1000");
      expect(bankApp.getBalance()).toEqual(1000);
    });

    it("returns the amount with only two decimal", () => {
      const bankApp = new BankApp(1000.333);
      expect(bankApp.getBalance()).toEqual(1000.33);
      const bankApp2 = new BankApp("1000.333");
      expect(bankApp2.getBalance()).toEqual(1000.33);
    });
  });

  describe("makeDeposit method", () => {
    it("adds the deposit amount to the balance", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
      bankApp.makeDeposit(100);
      expect(bankApp.getBalance()).toEqual(100);
    });

    it("returns a message when the input is less than 0 and the balance will remain the same", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
      expect(bankApp.makeDeposit(-100)).toEqual(
        "The amount of deposit should be greater than 0."
      );
      expect(bankApp.getBalance()).toEqual(0);
    });

    it("adds the deposit amount to the balance even it is a numberic string", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
      bankApp.makeDeposit("100");
      expect(bankApp.getBalance()).toEqual(100);
    });

    it("returns a message when the input is a non-numberic string and the balance will remain the same", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
      expect(bankApp.makeDeposit("hello")).toEqual(
        "The amount of deposit should be an Integer."
      );
      expect(bankApp.getBalance()).toEqual(0);
    });

    it("allows to adds deposit with decimal number to the balance", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
      bankApp.makeDeposit(100.33);
      expect(bankApp.getBalance()).toEqual(100.33);
      bankApp.makeDeposit("22.22");
      expect(bankApp.getBalance()).toEqual(122.55);
    });

    it("converts the deposit amount with only two decimal", () => {
      const bankApp = new BankApp();
      expect(bankApp.getBalance()).toEqual(0);
      bankApp.makeDeposit(100.3333);
      expect(bankApp.getBalance()).toEqual(100.33);
      bankApp.makeDeposit("22.2222");
      expect(bankApp.getBalance()).toEqual(122.55);
    });

    it("returns a successful message", () => {
      const bankApp = new BankApp();
      expect(bankApp.makeDeposit(100)).toEqual(
        "Deposit processed successfully!"
      );
    });
  });

  describe("makeWithdrawal method", () => {
    it("subtracts the withdrawal amount from the balance", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      bankApp.makeWithdrawal(100);
      expect(bankApp.getBalance()).toEqual(900);
    });

    it("returns a message when the input is less than 0 and the balance will remain the same", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      bankApp.makeWithdrawal(-100);
      expect(bankApp.getBalance()).toEqual(1000);
    });

    it("subtracts the withdrawal amount to the balance even it is a numberic string", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      bankApp.makeWithdrawal("100");
      expect(bankApp.getBalance()).toEqual(900);
    });

    it("returns a message when the input is a non-numberic string and the balance will remain the same", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      expect(bankApp.makeWithdrawal("hello")).toEqual(
        "The amount of withdrawal should be an Integer."
      );
      expect(bankApp.getBalance()).toEqual(1000);
    });

    it("returns a message when the balance is not enough for withdrawal and the balance will remain the same", () => {
      const bankApp = new BankApp(0);
      expect(bankApp.getBalance()).toEqual(0);
      expect(bankApp.makeWithdrawal(100)).toEqual(
        "The amount of balance is not enough for withdrawal."
      );
      expect(bankApp.getBalance()).toEqual(0);
    });

    it("allows to withdrawal with decimal number from the balance", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      bankApp.makeWithdrawal(50.33);
      expect(bankApp.getBalance()).toEqual(949.67);
      bankApp.makeWithdrawal("50.33");
      expect(bankApp.getBalance()).toEqual(899.34);
    });

    it("converts the withdrawal amount with only two decimal", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.getBalance()).toEqual(1000);
      bankApp.makeWithdrawal(50.333);
      expect(bankApp.getBalance()).toEqual(949.67);
      bankApp.makeWithdrawal("50.333");
      expect(bankApp.getBalance()).toEqual(899.34);
    });

    it("returns a successful message", () => {
      const bankApp = new BankApp(1000);
      expect(bankApp.makeWithdrawal(100)).toEqual(
        "Withdrawal processed successfully!"
      );
    });
  });

  describe("printStatement method", () => {
    beforeEach(() => {
      const mockDate1 = new Date("2023-01-13");
      jest.spyOn(global, "Date").mockImplementation(() => mockDate1);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("prints out a table with no starting balance ", () => {
      const bankApp = new BankApp();
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || N/A || N/A || 0.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("prints out a table with starting balance ", () => {
      const bankApp = new BankApp(1000);
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || N/A || N/A || 1000.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("prints out a table with a deposit transaction", () => {
      const bankApp = new BankApp(1000);
      bankApp.makeDeposit(500);
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || 500.00 || N/A || 1500.00
13/01/2023 || N/A || N/A || 1000.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("prints out a table with two deposit transactions", () => {
      const bankApp = new BankApp(1000);
      bankApp.makeDeposit(500);
      bankApp.makeDeposit(1000);
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || 1000.00 || N/A || 2500.00
13/01/2023 || 500.00 || N/A || 1500.00
13/01/2023 || N/A || N/A || 1000.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("prints out a table with a withdrawal transaction", () => {
      const bankApp = new BankApp(1000);
      bankApp.makeWithdrawal(500);
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || N/A || 500.00 || 500.00
13/01/2023 || N/A || N/A || 1000.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("prints out a table with two withdrawal transactions", () => {
      const bankApp = new BankApp(1000);
      bankApp.makeWithdrawal(500);
      bankApp.makeWithdrawal(100);
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || N/A || 100.00 || 400.00
13/01/2023 || N/A || 500.00 || 500.00
13/01/2023 || N/A || N/A || 1000.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("prints out a table with deposit and withdrawal transactions", () => {
      const bankApp = new BankApp(1000);
      bankApp.makeWithdrawal(500);
      bankApp.makeDeposit(100);
      const expectedOutput = `
date || credit || debit || balance
13/01/2023 || 100.00 || N/A || 600.00
13/01/2023 || N/A || 500.00 || 500.00
13/01/2023 || N/A || N/A || 1000.00
`;
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      bankApp.printStatement();
      expect(logSpy).toHaveBeenCalledWith(expectedOutput);
      logSpy.mockRestore();
    });

    it("adds a date to the transaction", () => {});
  });

  describe("getFormattedDate method", () => {
    it("returns a formatted time", () => {
      const bankApp = new BankApp();
      const currentTime = new Date("2023-01-13");
      expect(bankApp.getFormattedDate(currentTime)).toEqual("13/01/2023");
    });
  });
});
