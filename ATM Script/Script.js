
let bankStatement = [{description: "Deposit", amount:1000, type: "Income"}, {description: "Groceries", amount: 150, type: "Expense"}, {description: "Rent", amount: 800, type: "Expense"}, {description: "Salary", amount: 3000, type: "Income"}, {description: "Utilities", amount: 200, type: "Expense"}, {description: "Investment", amount: 500, type: "Income"}, {description: "Dining Out", amount: 100, type: "Expense"}, {description: "Freelance Work", amount: 800, type: "Income"}, {description: "Entertainment", amount: 250, type: "Expense"}];
function calculateBalance(bankStatement) {
    let totalIncome = 0;
    let totalExpense = 0;
    let balance = 0;
    for (let i = 0; i < bankStatement.length; i++) {
        if (bankStatement[i].type === "Income") {
            totalIncome += bankStatement[i].amount;
        }
        else if (bankStatement[i].type === "Expense") {
            totalExpense += bankStatement[i].amount;
        }
    }
    balance = totalIncome - totalExpense;
    return {balance: balance, totalExpense: totalExpense, totalIncome: totalIncome};
}

console.log(`Total Income: ${calculateBalance(bankStatement).totalIncome.toFixed(2)}, Total Expense: ${calculateBalance(bankStatement).totalExpense.toFixed(2)}, Balance: ${calculateBalance(bankStatement).balance.toFixed(2)}.`);
function topthreeExpenses(bankStatement) {
    let expenses = bankStatement.filter(transaction => transaction.type === "Expense");
    expenses.sort((a, b) => b.amount - a.amount);
    return expenses.slice(0, 3);
}
console.log("Top 3 Expenses:");
topthreeExpenses(bankStatement).forEach(expense => {
    console.log(`Description: ${expense.description}, Amount: ${expense.amount.toFixed(2)}`);
});
function groupByType(bankStatement) {
    let income = bankStatement.filter(transaction => transaction.type === "Income");
    let expense = bankStatement.filter(transaction => transaction.type === "Expense");
    return {income: income,
         expense: expense};
}
console.log(groupByType(bankStatement));
let action = prompt("What would you like to do? (Deposit, Withdraw, Check Balance, Exit)");
let amount;
let description;
while(true){
    if(action === "Deposit"){
        description = prompt("What is the description of the transaction?");
        amount = parseFloat(prompt("How much would you like to deposit?"));
        bankStatement.push({description: description, amount: amount, type: "Income"});
        console.log(bankStatement);
    }
    if(action === "Withdraw"){
        description = prompt("What is the description of the transaction?");
        amount = parseFloat(prompt("How much would you like to withdraw?"));
        bankStatement.push({description: description, amount: amount, type: "Expense"});
        console.log(bankStatement);
    }
    if(action === "Check Balance"){
        alert(`Your balance is ${calculateBalance(bankStatement).balance.toFixed(2)}.`);
        action = prompt("What would you like to do? (Deposit, Withdraw, Check Balance, Exit)")
    }
     else if(action === "Exit"){
        console.log("Thank you for using our banking system. Goodbye!");
        break;
    }
    else{
        console.log("Invalid action. Please try again.");
        action = prompt("What would you like to do? (Deposit, Withdraw, Check Balance, Exit)")
    }
}
