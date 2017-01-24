avascript Bank Kata

Tech Test Week

Week Ten

The purpose of this project is to complete a tech test in a day. I chose to complete this tech test in Javascript, as I feel less comfortable in it than I do in Ruby.

Instructions

In a browser, open SpecRunner.html to see that all the tests pass.
The console log will show the three transactions below, tough per instructions from our coach, they will show today's date.
Create a new account account = new Account();
Add funds - account.deposit(100);
Withdraw funds - account.withdraw(20);
Create a new statement, with the account - statement = new Statement(account);
Print statement by calling - statement.printStatement();
The following will be outputted to the console log:

   date    ||  credit  ||  debit  || balance
23/01/2017 ||  100.00  ||         || 100.00
23/01/2017 ||          ||  20.00  || 80.00
Specifications

You should be able to interact with the your code via a REPL like IRB or the JavaScript console.
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database).
Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see

date       || credit || debit   || balance
14/01/2012 ||        || 500.00  || 2500.00
13/01/2012 || 2000.00||         || 3000.00
10/01/2012 || 1000.00||         || 1000.00

My approach

I started by writing a list of the message which would need to be sent to meet these requirements. Using these I decided 3 object would be required. I then set about creating them one at a time following the SOLID principles to the best of my ability.

Try it out

Clone this repo into a local depository on your machine.
Install(gem install bundle) and run bundle
Open your Chrome Developer tools (console)

STEPS
1.account = new AccountStatement();
2.AccountStatement {transactions: Array[0], balance: 0}
3.account.deposit(2000);
4.account.balance;
  2000
5.account.deposit(3000);
6.account.balance;
  5000
7.account.withdraw(1000);
8.account.balance;
  4000
9.statement = new Statement();
10.statement.printTopLine();
"  date  ||  credit  ||  debit ||  balance
"
11.statement.printTransactions();
[" 24/01/2017  ||  2000.00 ||    ||  2000.00 ", " 24/01/2017  ||  3000.00 ||    ||  5000.00 ", " 24/01/2017  ||    || 1000.00 ||  4000.00 "]

![screen shot 2017-01-24 at 14 22 34](https://cloud.githubusercontent.com/assets/11363501/22251168/c4a56056-e241-11e6-80fb-f13ac3eb1bdc.png)

Test it!

You'll need to copy the full path of the SpecRunner file and paste it in the browser, then run it!
