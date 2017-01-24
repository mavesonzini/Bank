describe("AccountStatement", function(){
  var statement;
  beforeEach(function(){
    account = new AccountStatement();
  });

  it("deposits should increase the balance", function(){
    account.deposit(1000);
    expect(account.currentBalance()).toEqual(1000);
  });

  it("withdrawals should decrease the balance", function(){
    account.deposit(1000);
    account.withdraw(500);
    expect(account.currentBalance()).toEqual(500);
  });
});
