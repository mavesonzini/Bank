describe("Deposit", function(){
  var transaction;
  beforeEach(function(){
    transaction = new Deposit();
  });

  it("should show a balance of £1000 after making a deposit of £1000", function(){
    expect(transaction.deposit(1000)).toEqual(1000);
  });
});
