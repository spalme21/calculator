let firstNumber = "0";
let operator = "";
let secondNumber = "0";
let displayValue = "0";

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "X":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            break;
    }
}

const updateDisplay = function() {
    const display = document.querySelector(".display");
    display.textContent = displayValue;
};

const updateNumber = function(e) {
    if (secondNumber === "0") {
        if (e.target.textContent === ".") {
            secondNumber = "0";
        } else {
            secondNumber = "";
        }
    }
    if (e.target.textContent === "." && (secondNumber.indexOf(".") != -1)) {
        return;
    }
    secondNumber += e.target.textContent;
    displayValue = secondNumber;
    updateDisplay();
};

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    if (button.className === "number") {
        console.log(button.textContent);
        button.addEventListener('click', updateNumber);
    };
});

updateDisplay();

