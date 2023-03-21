const DateFormatter = require("./dateFormatter");
const InputFormatter = require("./inputFormatter");
const Transaction = require("./transaction");

class BankApp {
  constructor(balance = 0) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
    this.startingBalance = balance;
    this.startingDate = new Date();
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

    // this.transaction.unshift({
    //   date: this.getFormattedDate(new Date()),
    //   type: "credit",
    //   amount: amount.toFixed(2),
    //   balance: newBalance.toFixed(2),
    // });

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

    // this.transaction.unshift({
    //   date: this.getFormattedDate(new Date()),
    //   type: "debit",
    //   amount: amount.toFixed(2),
    //   balance: newBalance.toFixed(2),
    // });

    return "Withdrawal processed successfully!";
  };

  printStatement = () => {
    let tableHead = "date || credit || debit || balance";
    let startingRecord = `${this.getFormattedDate(
      this.startingDate
    )} || N/A || N/A || ${this.startingBalance.toFixed(2)}\n`;

    let transactionRecord = "";
    const transactionData = this.transaction.GetTransactionData();
    transactionData.forEach((element) => {
      if (element.type === "debit") {
        transactionRecord += `${element.date} || N/A || ${element.amount} || ${element.balance}\n`;
      }

      if (element.type === "credit") {
        transactionRecord += `${element.date} || ${element.amount} || N/A || ${element.balance}\n`;
      }
    });

    let result = transactionRecord
      ? "\n" +
        tableHead +
        "\n" +
        transactionRecord.trim() +
        "\n" +
        startingRecord
      : "\n" + tableHead + "\n" + startingRecord;

    console.log(result);
  };

  getFormattedDate = (currentTime) => {
    const formattedDate = new DateFormatter().getFormattedDate(currentTime);
    return formattedDate;
  };
}

module.exports = BankApp;
