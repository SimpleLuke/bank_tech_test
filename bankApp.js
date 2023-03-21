const DateFormatter = require("./dateFormatter");
const InputFormatter = require("./inputFormatter");
const Transaction = require("./transaction");

class BankApp {
  constructor(balance = 0) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
    this.startingBalance = balance;
    this.startingDate = this.getFormattedDate(new Date());
    this.balance = new InputFormatter().convertToFloat(balance);
    this.transaction = new Transaction();
    // this.transaction = [];
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
    const newBalance = parseFloat((this.balance + amount).toFixed(2));
    this.balance = newBalance;

    this.transaction.createTransaction(
      this.getFormattedDate(new Date()),
      "credit",
      amount,
      newBalance
    );

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

    const newBalance = parseFloat((this.balance - amount).toFixed(2));
    this.balance = newBalance;

    this.transaction.createTransaction(
      this.getFormattedDate(new Date()),
      "debit",
      amount,
      newBalance
    );

    return "Withdrawal processed successfully!";
  };

  printStatement = () => {
    let tableHead = "date || credit || debit || balance";
    const [startingRecord, transactionRecord] =
      this.transaction.getTransactionStatement(
        this.startingDate,
        this.startingBalance
      );

    let result;
    if (transactionRecord) {
      result = `\n${tableHead}\n${transactionRecord.trim()}\n${startingRecord}`;
    } else {
      result = `\n${tableHead}\n${startingRecord}`;
    }

    console.log(result);
  };

  getFormattedDate = (currentTime) => {
    const formattedDate = new DateFormatter().getFormattedDate(currentTime);
    return formattedDate;
  };
}

module.exports = BankApp;
