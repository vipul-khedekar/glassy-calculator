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
        if(this.currentOperand === ``) {
            return;
        }
        if(this.currentOperand !== ``) {
            this.compute();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ``;
    }

    compute() {
        let result;
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(previous) || isNaN(current)) {
            return;
        }
        if(this.operator === `+`) {
            result = previous + current;
        }
        if(this.operator === `-`) {
            result = previous - current;
        }
        if(this.operator === `×`) {
            result = previous * current;
        }
        if(this.operator === `÷`) {
            result = previous / current;
        }
        this.currentOperand = result;
        this.operator = ``;
        this.previousOperand = ``;
    }

    delete() {
        this.currentOperand = this.currentOperand.substr(0,this.currentOperand.length-1);
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

equalsButton.addEventListener(`click`, () => {
    calculator.compute();
    calculator.updateDisplay();
});

deleteButton.addEventListener(`click`, () => {
    calculator.delete();
    calculator.updateDisplay();
})