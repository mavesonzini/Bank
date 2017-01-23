function Withdraw(balance){
     this.balance = 0;
     this.date = new Date;
     this.amount = 0;
}
var transaction = new Withdraw;


Withdraw.prototype.withdraw = function(amount){
  this.amount = amount;
  return this.balance -= amount;
};
