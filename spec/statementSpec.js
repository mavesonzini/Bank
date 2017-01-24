describe("Statement", function(){
  beforeEach(function() {
    account = new AccountStatement();
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    statement = new Statement(account);
  });

  it("requires an account when creating a statement", function(){
    expect(statement.showAccount()).toEqual(account);
  });
});

describe("showing the transactions", function(){
  it("should show the transactions array", function(){
    expect(statement.showTransactions()).toEqual(account.transactions);
  });
});

describe("printing transactions", function(){
  it("top line should be formated correctly", function(){
    expect(statement.printTopLine()).toEqual("  date  ||  credit  ||  debit ||  balance \n");
  });

  it("should output the transactions correctly", function(){
    expect(statement.printTransactions()).toEqual([' 24/01/2017  ||  1000.00 ||    ||  1000.00 ', ' 24/01/2017  ||  2000.00 ||    ||  3000.00 ',' 24/01/2017  ||    || 500.00 ||  2500.00 ']);
  });

  it("should convert the array of transactions into a string", function(){
    expect(statement.printTransactionsToString()).toEqual(' 24/01/2017  ||  1000.00 ||    ||  1000.00 '
                                                          ' 24/01/2017  ||  2000.00 ||    ||  3000.00 '
                                                          ' 24/01/2017  ||    || 500.00 ||  2500.00 ' );
  });
});
