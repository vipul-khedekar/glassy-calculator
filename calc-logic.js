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
    }

    updateDisplay() {
        this.currentDisplayText.innerText = this.currentOperand;
    }

    takeOperand(operand) {
        this.currentOperand = operand;
    }
}

const calculator = new CALCULATOR(previousDisplayText, currentDisplayText);

operandButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
        calculator.takeOperand(button.innerText);
        calculator.updateDisplay();
    });
});