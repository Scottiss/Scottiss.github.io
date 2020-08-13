function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balnce];
  this.setBalance = function (value) {
    this.balance = value;
  },
    this.updateStatement = function (num) {
      this.statement.push(num);
    },
    this.getStatement = function(){
      return this.statement;
    },
    this.printStatement = function(){
      this.statement.forEach(item => {
        console.log(item);
      })
    },
    this.deposit = function(value){
      let newBal = value +=this.balance;
      this.updateStatement(value);
      this.setBalance(newBal);
    },
    this.withdraw = function(value){
      let newBal = this.balance -+ value;
      this.updateStatement(value)
    }

    
  }
  this.getBalance = function () {
    return this.balance;
    console.log(`Balance: ${this.getBalance()}`);
  };

