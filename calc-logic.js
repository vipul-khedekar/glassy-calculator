const operandButtons = document.querySelectorAll(`[data-operand]`);
const operatorButtons = document.querySelectorAll(`[data-operator]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
const deleteButton = document.querySelector(`[data-delete]`);
const equalsButton = document.querySelector(`[data-equals]`);
const previousDisplayText = document.querySelector(`[data-display-previous]`);
const currentDisplayText = document.querySelector(`[data-display-current]`);

class CALCULATOR {
    constructor(previousDisplayText, currentDisplayText) {
        this.previousDisplayText = previousDisplayText;
        this.currentDisplayText = currentDisplayText;
        this.allClear();
    }

    allClear() {
        this.previousOperand = ``;
        this.currentOperand = ``;
        this.operator = ``
    }

    updateDisplay() {
        this.previousDisplayText.innerText = this.previousOperand + this.operator;
        this.currentDisplayText.innerText = this.currentOperand;
    }

    takeOperand(operand) {
        if(operand === `.` && this.currentOperand.includes(`.`)) {
            return;
        }
        if(this.currentOperand.length <= 10) {
            this.currentOperand = this.currentOperand + operand;
        }
    }

    takeOperator(operator) {
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ``;
    }
}

const calculator = new CALCULATOR(previousDisplayText, currentDisplayText);

allClearButton.addEventListener(`click`, () => {
    calculator.allClear();
    calculator.updateDisplay(); 
});

operandButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
        calculator.takeOperand(button.innerText);
        calculator.updateDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
        calculator.takeOperator(button.innerText);
        calculator.updateDisplay();
    });
});