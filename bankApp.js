class BankApp {
  constructor(balance) {
    if (typeof balance !== "number") {
      throw new Error("Balance should be an Integer.");
    }
  }
}

module.exports = BankApp;
