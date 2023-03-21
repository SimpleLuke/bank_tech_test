class Transaction {
  constructor() {
    this.transactionData = [];
  }

  createTransaction = (date, type, amount, balance) => {
    this.transactionData.unshift({
      date: date,
      type: type,
      amount: amount.toFixed(2),
      balance: balance.toFixed(2),
    });
  };

  GetTransactionData = () => {
    return this.transactionData;
  };

  getTransactionStatement = (startDate, amount) => {
    let startingRecord = `${startDate} || N/A || N/A || ${amount.toFixed(2)}\n`;

    let transactionRecord = "";
    this.transactionData.forEach((element) => {
      if (element.type === "debit") {
        transactionRecord += `${element.date} || N/A || ${element.amount} || ${element.balance}\n`;
      }

      if (element.type === "credit") {
        transactionRecord += `${element.date} || ${element.amount} || N/A || ${element.balance}\n`;
      }
    });
    return [startingRecord, transactionRecord];
  };
}

module.exports = Transaction;
