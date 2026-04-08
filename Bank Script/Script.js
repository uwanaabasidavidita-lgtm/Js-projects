
let balance = 1000;
function deposit(amount){
    balance += amount;
    console.log(`You have deposited ${amount}. Your new balance is ${balance.toFixed(2)}.`);
}
function withdraw(amount){
    if(amount> balance){
        console.log("Insufficient funds.");
    }
    if(amount<= balance){
        balance -= amount;
        console.log(`You have withdrawn ${amount}. Your new balance is ${balance.toFixed(2)}.`);
    }
}
function checkBalance(){
    console.log(`Your current balance is ${balance.toFixed(2)}.`);
}
let action = prompt("What would you like to do? (Deposit, Withdraw, Check Balance, Exit)");
let amount;
while(true){
    if(action === "Deposit"){
        amount = parseFloat(prompt("How much would you like to deposit?"));
        deposit(amount);
        
    }
    if(action === "Withdraw"){
      amount = parseFloat(prompt("How much would you like to withdraw?"));
        withdraw(amount);
        
    }
    if(action === "Check Balance"){
        alert(`Your balance is ${balance.toFixed(2)}.`);
        checkBalance();
        action = prompt("What would you like to do? (Deposit, Withdraw, Check Balance, Exit)");
    }
    else if(action === "Exit"){
        console.log("Thank you for using our banking system. Goodbye!");
        break;
    }
    else{
        console.log("Invalid action. Please try again.");
        action = prompt("What would you like to do? (Deposit, Withdraw, Check Balance, Exit)");
    }
}
