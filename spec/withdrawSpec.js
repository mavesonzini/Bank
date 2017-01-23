describe("Withdraw", function(){
  var transaction;
  beforeEach(function(){
    transaction = new Withdraw();
  });

  it("should show a balance of £7000 after a withdraw of £2000", function(){
    expect(transaction.withdraw(2000)).toEqual(-2000);
  });
});
