const Transaction = require("./transaction");

describe("Transaction class", () => {
  it("creates a transaction and return as an array", () => {
    const transaction = new Transaction();
    const data = [
      {
        date: "13/01/2023",
        type: "credit",
        amount: "100.00",
        balance: "200.00",
      },
    ];
    transaction.createTransaction("13/01/2023", "credit", 100, 200);
    expect(transaction.getTransactionData()).toEqual(data);
  });
});
