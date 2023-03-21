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
}

module.exports = Transaction;
