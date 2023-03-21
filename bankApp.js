class BankApp {
  constructor(balance = 0) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
    this.startingBalance = balance;
    this.balance =
      typeof balance === "string"
        ? parseFloat(parseFloat(balance).toFixed(2))
        : parseFloat(balance.toFixed(2));
    this.transaction = [];
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

    this.transaction.unshift({
      date: "13/01/2023",
      type: "debit",
      amount: amount.toFixed(2),
      balance: newBalance.toFixed(2),
    });

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
    let tableHead = "date || credit || debit || balance";
    let startingRecord = `13/01/2023 || N/A || N/A || ${this.startingBalance.toFixed(
      2
    )}\n`;
    let transactionRecord = "";
    this.transaction.forEach((element) => {
      if (element.type === "debit") {
        transactionRecord += `${element.date} || N/A || ${element.amount} || ${element.balance}\n`;
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
}

module.exports = BankApp;
