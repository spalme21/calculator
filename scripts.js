let firstNumber = "";
let operator = "";
let secondNumber = "0";
let displayValue = "0";
let pressedEquals = false;

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

const operate = function() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "X":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            break;
    };
};

const updateDisplay = function() {
    roundDisplay();
    const display = document.querySelector(".display");
    display.textContent = displayValue;
};

const updateNumber = function(e) {
    if (pressedEquals) {
        clear();
        pressedEquals = false;
    }
    if (secondNumber === "0") {
        if (e.target.textContent === ".") {
            secondNumber = "0";
        } else {
            secondNumber = "";
        }
    }
    if (secondNumber.length >= 13) {
        return;
    }
    if (e.target.textContent === "." && (secondNumber.indexOf(".") != -1)) {
        return;
    }
    secondNumber += e.target.textContent;
    displayValue = secondNumber;
    updateDisplay();
};

const setOperator = function(e) {
    if (!firstNumber) {
        firstNumber = secondNumber;
        operator = e.target.textContent;
        secondNumber = "0";
        updateDisplay();
    } else if (pressedEquals) {
        operator = e.target.textContent;
        secondNumber = "0";
        updateDisplay();
        pressedEquals = false;
    } else {
        let answer = operate();
        displayValue = answer;
        updateDisplay();
        firstNumber = answer;
        operator = e.target.textContent;
        secondNumber = "0";
    }
};

const clear = function() {
    firstNumber = "";
    operator = "";
    secondNumber = "0";
    displayValue = "0";
    updateDisplay();
};

const equals = function() {
    let answer = operate();
    displayValue = answer;
    updateDisplay();
    firstNumber = answer;
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    pressedEquals = true;
};

const roundDisplay = function() {
    displayValue = Math.round(parseFloat(displayValue) * 100) / 100;
}

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    if (button.className === "number") {
        button.addEventListener('click', updateNumber);
    } else if (button.className === "operator") {
        button.addEventListener('click', setOperator);
    } else if (button.id === "clear") {
        button.addEventListener('click', clear);
    } else if (button.id === "=") {
        button.addEventListener('click', equals);
    };
});

updateDisplay();

