function BankAccount(balance){
  this.totalBalance = 0;
}
var transaction = new BankAccount;

// BankAccount.prototype.getBalance = function(balance){
//   balance = this.balance;
//   var sum = 0
//   for(i = 0; i < balance.length; i++){
//     sum += balance[i];
//   }
//   return sum;
// };

BankAccount.prototype.deposit = function(amount){
  balance = this.totalBalance;
  var sum = 0
  for(i = 0; i < totalBalance; i++){
    sum += amount;
  }
  return sum;
};

BankAccount.prototype.withdraw = function(amount){
  balance = this.balance;
  var sum = 0;
  for(i = 0; i < balance.length; i++){
    sum += balance[i];
  }
  return sum - amount;
};
