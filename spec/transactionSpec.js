describe("Transaction", function(){
  var transaction;
  beforeEach(function(){
    transaction = new Transaction();
    jasmine.clock().install();

  });
  afterEach(function() {
      jasmine.clock().uninstall();
    });

  it("should show a balance of £1000 after making a deposit of £1000", function(){
    transaction.moneyDeposit(1000);
    expect(transaction.deposit).toEqual(1000);
  });

  it("should show a balance of £7000 after a withdraw of £2000", function(){
    transaction.moneyDeposit(9000)
    transaction.moneyWithdraw(-2000)
    expect(transaction.withdrawal).toEqual(-2000);
  });
});
