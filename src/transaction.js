function Transaction(){
     this.balance = 0;
     this.date = 0;
     this.amount = 0;
     this.deposit = 0;
     this.withdrawal = 0;
}
var transaction = new Transaction;

Transaction.prototype.formatDate = function(){
  var date = new Date;
  var day = date.getDate();
  var month = ("0" + (date.getMonth() + 1)).slice(-2)
  var year = date.getFullYear();
  return `${day}/${month}/${year}`
}

Transaction.prototype.moneyDeposit = function(amount){
this.deposit = amount;
this.date = this.formatDate();
};

Transaction.prototype.moneyWithdraw = function(amount){
  this.withdrawal = amount;
  this.date = this.formatDate();
};
