# Bank App Design

## 1. Problem

```
As a client,
I want to make a deposit to my bank account,
so that I can save money in the bank.

As a client,
I want to make withdrawal from my bank account,
so that I can use my savings.

As a client,
I want to print my account statement,
so that I can view each transaction.

As a programmer,
I want the data can be kept in the memory,
so that I can manipulate the data while the app is running.
```

```
//Expected output for the printed statement

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## 2. Class Interface

I choose to use a class for this programme because I can manipulate the data in the state.

```js
class BankApp {
  constructor(balance) {
    this.balance = balanace; // balance is an Integer
    this.transaction = []; // transaction is an Array
  }

  getBalance() {
    // return an Integer
  }

  makeDeposit(amount) {
    // amount is an Integer
  }

  makeWithdrawal(amount) {
    //amount is an Integer
  }

  printStatement() {
    // print out the bank statement with all transactions
  }
}
```

## 3. Test Examples

!!! Reminder: Add Edge cases !!!

```js
// Examples

// BankApp initialisation
// 1.
const bankApp = new BankApp("hello"); // Error: 'Balance should be an Integer.'

// getBalance method
// 1.
const bankApp = new BankApp(1000);
bankApp.getBalance(); // return 1000

// 2.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0

// 3.
const bankApp = new BankApp("1000");
bankApp.getBalance(); // return 1000

// 4.
const bankApp = new BankApp(100.3333);
bankApp.getBalance(); // return 100.33

// makeDeposit method
// 1.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0
bankApp.makeDeposit(100);
bankApp.getBalance(); // return 100

//2.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0
bankApp.makeDeposit(-100); // return "The amount of deposit should be greater than 0";
bankApp.getBalance(); // return 0

//3.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0
bankApp.makeDeposit("100");
bankApp.getBalance(); // return 100

//4.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0
bankApp.makeDeposit("hello"); // return 'The amount of deposit should be an Integer.'
bankApp.getBalance(); // return 0

//5.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0
bankApp.makeDeposit(100.3333);
bankApp.getBalance(); // return 100.33

//6.
const bankApp = new BankApp();
bankApp.makeDeposit(100); // return 'Deposit made successfully'

// makeWithdrawal method
// 1.
const bankApp = new BankApp(1000);
bankApp.getBalance(); // return 1000
bankApp.makeWithdrawal(100);
bankApp.getBalance(); // return 900

//2.
const bankApp = new BankApp(1000);
bankApp.getBalance(); // return 1000
bankApp.makeDeposit(-100); // return "The amount of withdrawal should be greater than 0";
bankApp.getBalance(); // return 1000

//3.
const bankApp = new BankApp(1000);
bankApp.getBalance(); // return 1000
bankApp.makeDeposit("100");
bankApp.getBalance(); // return 900

//4.
const bankApp = new BankApp(1000);
bankApp.getBalance(); // return 1000
bankApp.makeWithdrawal("hello"); // return 'The amount of withdrawal should be an Integer.'
bankApp.getBalance();

//5.
const bankApp = new BankApp();
bankApp.getBalance(); // return 0
bankApp.makeWithdrawal(100); // return 'The amount of the balance is not enough for withdrawal.'
bankApp.getBalance(); // return 0

//6.
const bankApp = new BankApp();
bankApp.getBalance(1000); // return 1000
bankApp.makeWithdrawal(50.333);
bankApp.getBalance(); // return 949.67

//7.
const bankApp = new BankApp(1000);
bankApp.makeWithdrawal(100); // return 'withdrawal made successfully'

// printStatement method
// 1.
const bankApp = new BankApp(1000); // Initialise the bank account on 13-01-2023
bankApp.printStatement();
/*
┌──────-------──┬─────----───┬──--------┬───----──────┐
│  date         │   credit   │  debit   │     balance │
├───────-------─┼──────----──┼──────────┼-----------──┤
│  13-01-2023   │   N/A      │  N/A     │   1000.00   │
└───────-------─┴────────-───┴──────----┴----------───┘
*/

// 2.
const bankApp = new BankApp(1000);
bankApp.makeDeposit(1000); // When the deposit is made on 14-01-2023
/*
┌──────-------──┬─────----───┬──--------┬───----──────┐
│  date         │   credit   │  debit   │     balance │
├───────-------─┼──────----──┼──────────┼-----------──┤
│  14/01/2023   │     N/A    │ 1000.00  │   2000.00   │ 
│  13-01-2023   │   N/A      │  N/A     │   1000.00   │
└───────-------─┴────────-───┴──────----┴----------───┘
*/

// 3.
const bankApp = new BankApp(1000);
bankApp.makeWithdrawal(1000); // When the withdrawal is made on 15-01-2023
/*
┌──────-------──┬─────----───┬──--------┬───----──────┐
│  date         │   credit   │  debit   │     balance │
├───────-------─┼──────----──┼──────────┼-----------──┤
│  15/01/2023   │   1000.00  │    N/A   │      0.00   │ 
│  13-01-2023   │   N/A      │  N/A     │   1000.00   │
│               │            │          │             │
│               │            │          │             │
└───────-------─┴────────-───┴──────----┴----------───┘
*/

// 4.
const bankApp = new BankApp(1000);

bankApp.makeDeposit(1000); // When the deposit is made on 14-01-2023

bankApp.makeWithdrawal(1000); // When the withdrawal is made on 15-01-2023
/*
┌──────-------──┬─────----───┬──--------┬───----──────┐
│  date         │   credit   │  debit   │     balance │
├───────-------─┼──────----──┼──────────┼-----------──┤
│  15/01/2023   │   1000.00  │    N/A   │   1000.00   │ 
│  14/01/2023   │     N/A    │ 1000.00  │   2000.00   │ 
│  13-01-2023   │   N/A      │  N/A     │   1000.00   │
└───────-------─┴────────-───┴──────----┴----------───┘
*/
```
