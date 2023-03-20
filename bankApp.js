class BankApp {
  constructor(balance = 0) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
    this.balance = parseInt(balance);
  }

  getBalance = () => {
    return this.balance;
  };

  makeDeposit = (amount) => {
    this.balance += amount;
  };
}

module.exports = BankApp;
