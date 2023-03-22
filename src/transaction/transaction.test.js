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

  it("outputs a statement from transaction data", () => {
    const transaction = new Transaction();
    transaction.createTransaction("13/01/2023", "credit", 1000, 2000);
    const [startingRecord, transactionRecord] =
      transaction.getTransactionStatement("13/01/2023", 1000);
    expect(startingRecord).toEqual("13/01/2023 || N/A || N/A || 1000.00\n");
    expect(transactionRecord).toEqual(
      "13/01/2023 || 1000.00 || N/A || 2000.00\n"
    );
  });
});
