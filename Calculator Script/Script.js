function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let Options = document.getElementById("mathOptions").value;
    let result = document.getElementById("result");
    let calculateBtn = document.getElementById("calculate");

    calculateBtn.addEventListener("click", calculate);

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    if (Options === "add" && calculateBtn) {
        result.textContent = `Result: ${num1 + num2}`;
    } else if (Options === "subtract" && calculateBtn) {
        result.textContent = `Result: ${num1 - num2}`;
    } else if (Options === "multiply" && calculateBtn) {
        result.textContent = `Result: ${num1 * num2}`;
    } else if (Options === "divide" && calculateBtn) {
        if (num2 === 0) {
            result.textContent = "Cannot divide by zero.";
        } else {
            result.textContent = `Result: ${num1 / num2}`;
        }
    } else {
        result.textContent = "Please select a valid operation.";
    }



}

calculate();