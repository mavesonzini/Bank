function Deposit(balance){
     this.balance = 0;
     this.date = new Date;
     this.amount = 0;
}
var transaction = new Deposit;

Deposit.prototype.deposit = function(amount){
  this.amount = amount;
  return this.balance += amount;
};
