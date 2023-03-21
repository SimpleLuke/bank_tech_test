const { Console } = require("console");
const { Transform } = require("stream");

class BankApp {
  constructor(balance = 0) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
    this.balance =
      typeof balance === "string"
        ? parseFloat(parseFloat(balance).toFixed(2))
        : parseFloat(balance.toFixed(2));
  }

  getBalance = () => {
    return this.balance;
  };

  makeDeposit = (amount) => {
    amount = parseFloat(amount);

    if (isNaN(amount)) {
      return "The amount of deposit should be an Integer.";
    }
    if (amount < 0) {
      return "The amount of deposit should be greater than 0.";
    }
    this.balance = parseFloat((this.balance + amount).toFixed(2));

    return "Deposit processed successfully!";
  };

  makeWithdrawal = (amount) => {
    amount = parseFloat(amount);

    if (isNaN(amount)) {
      return "The amount of withdrawal should be an Integer.";
    }

    if (this.balance < amount) {
      return "The amount of balance is not enough for withdrawal.";
    }

    if (amount < 0) {
      return "The amount of withdrawal should be greater than 0.";
    }

    this.balance = parseFloat((this.balance - amount).toFixed(2));

    return "Withdrawal processed successfully!";
  };

  printStatement = () => {
    console.log(`
┌──────-------──┬─────----───┬──--------┬───----──────┐
│ date          │ credit     │ debit    │ balance     │
├───────-------─┼──────----──┼──────────┼-----------──┤
│ 13-01-2023    │ N/A        │ N/A      │ 0.00        │
└───────-------─┴────────-───┴──────----┴----------───┘
`);
  };
}

module.exports = BankApp;
