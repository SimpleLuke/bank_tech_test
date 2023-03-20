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
    amount = parseInt(amount);
    if (isNaN(amount)) {
      return "The amount of deposit should be an Integer.";
    }
    if (amount < 0) {
      return "The amount of deposit should be greater than 0.";
    }
    this.balance += amount;
  };

  makeWithdrawal = (amount) => {
    this.balance -= amount;
  };
}

module.exports = BankApp;
