class BankApp {
  constructor(balance) {
    if (isNaN(balance)) {
      throw new Error("Balance should be an Integer.");
    }
  }
}

module.exports = BankApp;
