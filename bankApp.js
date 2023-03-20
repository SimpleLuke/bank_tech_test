class BankApp {
  constructor(balance = 0) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
    this.balance = balance;
  }

  getBalance = () => {
    return this.balance;
  };
}

module.exports = BankApp;
