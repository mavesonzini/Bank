function AccountStatement(){
  this.transactions = [];
  this.balance = 0;
};

AccountStatement.prototype.currentBalance = function(){
  return this.balance;
};

AccountStatement.prototype.showTransactions = function(){
  return this.transaction;
};
AccountStatement.prototype.deposit = function(amount){
  transaction = new Transaction();
  transaction.moneyDeposit(amount);
  transaction.balance += this.balance + amount;
  this.transactions.push(transaction);
  this.balance += transaction.deposit;
};

AccountStatement.prototype.withdraw = function(amount){
  transaction = new Transaction();
  transaction.moneyWithdraw(amount);
  transaction.balance += this.balance - amount;
  this.transactions.push(transaction);
  this.balance -= transaction.withdrawal;
};
