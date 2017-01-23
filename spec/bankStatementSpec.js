describe("BankAccount", function(){
  var transaction;
  beforeEach(function(){
    transaction = new BankAccount();
  });
  it("should show a balance of £1000 after making a deposit of £1000", function(){
    transaction.deposit(1000);
    expect(transaction.getBalance()).toEqual(1000);
  });

  it("should show a balance of £9000 after making a deposit of £8000 more", function(){
    transaction.deposit(1000);
    transaction.deposit(8000);
    expect(transaction.getBalance()).toEqual(9000);
  });

  it("should show a balance of £7000 after a withdraw of £2000", function(){
    transaction.deposit(9000);
    transaction.withdraw(2000);
    expect(transaction.getBalance()).toEqual(7000);
  });
});
