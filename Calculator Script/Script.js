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

    switch (Options, calculateBtn) {
        case "add" && calculateBtn:
            result.textContent = `Result: ${num1 + num2}`;
            break;
        case "subtract" && calculateBtn:
            result.textContent = `Result: ${num1 - num2}`;
            break;
        case "multiply" && calculateBtn:
            result.textContent = `Result: ${num1 * num2}`;
            break;
        case "divide" && calculateBtn:
            if (num2 === 0) {
                result.textContent = "Cannot divide by zero.";
            } else {
                result.innerHTML = `Result: ${num1 / num2}`;
            }
            break;
        default:
            result.textContent = "Please select a valid operation.";

    }



}

calculate();