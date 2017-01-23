function BankAccount(balance){
    this.balance = [];
}
var transaction = new BankAccount;

BankAccount.prototype.getBalance = function(balance){
  balance = this.balance;
  totalBalance = 0;
  for(i = 0; i < balance.length; i ++){
    totalBalance += balance[i];
  }
  return totalBalance;
};

BankAccount.prototype.deposit = function(amount){
  balance = this.balance;
  balance.push(amount);
  return balance;
};
