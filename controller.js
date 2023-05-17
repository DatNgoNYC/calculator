class FourFunctionCalculator {
    /* These are the calculator's state properties */
    #propertyInFocus;
    #operand_1;
    #operator;
    #operand_2;

    constructor(propertyInFocus = "operand_1", operand_1 = "", operator = null, operand_2 = null) {
        this.#propertyInFocus = propertyInFocus;
        this.#operand_1 = operand_1;
        this.#operator = operator;
        this.#operand_2 = operand_2;
    }

    // make an input
    makeInput(input) {
        // chooses next step based on inputType
        switch (this.#getInputType(input)) {
            case "numeric":
                this.#executeNumeric(input);
                break;

            case "decimal":
                this.#executeDecimal();
                break;

            case "pos_neg":
                this.#executePos_Neg();
                break;

            case "operator":
                this.#executeOperator(input);
                break;

            case "CE_AC":
                this.#executeCE_AC();
                break;

            case "enter":
                this.#executeEnter();
                break;
        }
        console.log("input              : " + input);
        console.log("propertyInFocus    : " + this.#propertyInFocus);
        console.log("operand_1          : " + this.#operand_1);
        console.log("operator           : " + this.#operator);
        console.log("operand_2          : " + this.#operand_2);
        console.log("");
    }

    get propertyInFocus() {
        return this.#propertyInFocus;
    }

    get operand_1() {
        return this.#operand_1;
    }

    get operator() {
        return this.#operator;
    }

    get operand_2() {
        return this.#operand_2;
    }

    /* ----------------------- PRIVATE METHODS ---------------------- */

    #executeNumeric(numericInput) {
        // mutate calculator based on property in focus
        switch (this.#propertyInFocus) {
            case "operand_1":
                this.#operand_1 += numericInput;
                break;
            case "operator":
                // when operator is in focus, reset to default state and record numeric input. the operator gets focused when operand_2 was in focus and enter pressed.
                this.#propertyInFocus = "operand_1";
                this.#operand_1 = numericInput;
                this.#operator = null;
                this.#operand_2 = null;
                break;
            case "operand_2":
                this.#operand_2 += numericInput;
                break;
        }
    }

    #executeDecimal() {
        // mutate calculator based on property in focus
        switch (this.#propertyInFocus) {
            case "operand_1":
                if (this.#operand_1.includes(".")) {
                    // do nothing
                } else if (this.#operand_1 === "") {
                    this.#operand_1 += "0.";
                } else {
                    this.#operand_1 += ".";
                }
                break;
            case "operator":
                // when operator is in focus, reset to default state and record decimal input. the operator gets focused when operand_2 was in focus and enter pressed.
                this.#propertyInFocus = "operand_1";
                this.#operand_1 = "0.";
                this.#operator = null;
                this.#operand_2 = null;
                break;
            case "operand_2":
                if (this.#operand_2.includes(".")) {
                    // do nothing
                } else if (this.#operand_1 === "") {
                    this.#operand_2 += "0.";
                } else {
                    this.#operand_2 += ".";
                }
                break;
        }
    }

    #executePos_Neg() {
        // mutate calculator based on property in focus
        switch (this.#propertyInFocus) {
            case "operand_1":
                if (this.#operand_1 === "") {
                    this.#operand_1 = "-0";
                } else if (this.#operand_1.includes("-")) {
                    this.#operand_1 = this.#operand_1.replace("-", "");
                } else {
                    this.#operand_1 = "-" + this.#operand_1;
                }
                break;
            case "operator":
                // when operator is in focus, add/remove negative to operand_1. the operator gets focused when operand_2 was in focus and "enter" is inputted.
                if (this.#operand_1.includes("-")) {
                    this.#operand_1 = this.#operand_1.replace("-", "");
                } else {
                    this.#operand_1 = "-" + this.#operand_1;
                }
                break;
            case "operand_2":
                if (this.#operand_1 === "") {
                    this.#operand_1 = "-0";
                } else if (this.#operand_2.includes("-")) {
                    this.#operand_2 = this.#operand_2.replace("-", "");
                } else {
                    this.#operand_2 = "-" + this.#operand_2;
                }
                break;
        }
    }

    #executeOperator(operatorInput) {
        // mutate calculator based on property in focus
        switch (this.#propertyInFocus) {
            case "operand_1":
                if (this.#operand_1 === "") {
                    // do nothing
                } else {
                    this.#operator = operatorInput;
                    this.#operand_2 = "";
                    this.#propertyInFocus = "operand_2";
                }
                break;
            case "operator":
                // when operator is in focus, you should be able to change the operator property
                this.#operator = operatorInput;
                this.#propertyInFocus = "operand_2";
                this.#operand_2 = "";
                break;
            case "operand_2":
                if (this.#operand_1 === "") {
                    // if there is no input in operand_2 yet you can still change the operator but operand_2 is technically still in focus
                    this.#operator = operatorInput;
                } else {
                    if (this.#operator === "add") {
                        this.#operand_1 = (Number(this.#operand_1) + Number(this.#operand_2)).toString();
                        this.#operator = operatorInput;
                        this.#propertyInFocus = "operand_2";
                    } else if (this.#operator === "subtract") {
                        this.#operand_1 = (Number(this.#operand_1) - Number(this.#operand_2)).toString();
                        this.#operator = operatorInput;
                        this.#propertyInFocus = "operand_2";
                    } else if (this.#operator === "multiply") {
                        this.#operand_1 = (Number(this.#operand_1) * Number(this.#operand_2)).toString();
                        this.#operator = operatorInput;
                        this.#operand_2 = '';
                        this.#propertyInFocus = "operand_2";
                    } else if (this.#operator === "divide") {
                        this.#operand_1 = (Number(this.#operand_1) / Number(this.#operand_2)).toString();
                        this.#operator = operatorInput;
                        this.#operand_2 = '';
                        this.#propertyInFocus = "operand_2";
                    }
                }
        }
    }

    #executeEnter() {
        // mutate calculator based on property in focus
        switch (this.#propertyInFocus) {
            case "operand_1":
                break;
            case "operator":
                // when operator is in focus, repeat the operator and operand_2 operation on operand_1. the operator gets focused when operand_2 was in focus and "enter" is inputted.
                this.#propertyInFocus = "operand_2";
                this.#executeOperator(this.#operator);
                this.#propertyInFocus = "operator";
                break;
            case "operand_2":
                if (this.#operand_2 === "") {
                    // do nothing.
                } else {
                    this.#executeOperator(this.#operator);
                    this.#propertyInFocus = "operator";
                }
        }
    }

    #executeCE_AC() {
        // mutate calculator based on property in focus
        switch (this.#propertyInFocus) {
            case "operand_1":
                if (this.#operand_1 === "") {
                    return;
                } else {
                    this.#operand_1 = "";
                }
                break;
            case "operator":
                this.#operand_1 = "";
                this.#operator = "";
                this.#operand_2 = "";
                this.#propertyInFocus = "operand_1";
                break;
            case "operand_2":
                if (this.#operand_2 === "") {
                    this.#operand_1 = "";
                    this.#operator = null;
                    this.#operand_2 = null;
                    this.#propertyInFocus = "operand_1";
                } else {
                    this.#operand_2 = "";
                }
                break;
        }
    }

    #getInputType(input) {
        const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const operator = ["add", "subtract", "multiply", "divide"];
        const CE_AC = "CE_AC";
        const decimal = ".";
        const pos_neg = "pos_neg";
        const enter = "enter";

        return numeric.includes(input)
            ? "numeric"
            : operator.includes(input)
            ? "operator"
            : CE_AC.includes(input)
            ? "CE_AC"
            : decimal.includes(input)
            ? "decimal"
            : pos_neg.includes(input)
            ? "pos_neg"
            : enter.includes(input)
            ? "enter"
            : false;
    }
}

const calculator = new FourFunctionCalculator("operand_1", "", "", "");

let display = "";
let operand_1 = calculator.operand_1;
let operand_2 = calculator.operand_2;
const buttonNodesList = document.querySelectorAll(".controls-button");
const displayNode = document.querySelector("#display div");
const CE_ACNode = document.querySelector('#CE_AC');

for (let button = 0; button < buttonNodesList.length; button++) {
    const element = buttonNodesList[button];

    element.addEventListener("click", (event) => {
        handleClick(event);
    });
}

/* ____ FUNCTIONS ____ */

function isPropertyChanged() {}

function handleClick(event) {
    // Variables
    let id = event.currentTarget.getAttribute("id");
    if (id.includes("button-") || id.includes("decimal")) {
        id = id.replace("button-", "");
        id = id.replace("decimal", ".");
    }
    calculator.makeInput(id);
    let modelOperand_1 = calculator.operand_1;
    let modelOperand_2 = calculator.operand_2;

    // logic
    if (id === "CE_AC" && calculator.operand_2 === "" && calculator.operand_1 === "") {
        operand_1 == "";
        operand_2 == "";
        updateDisplay("operand_1");
        updateDisplay("CE");
    } else if (id === "CE_AC" && calculator.operand_2 === "" && calculator.operand_1 !== "") {
        operand_2 == "";
        updateDisplay("operand_2");
        updateDisplay("AC");
    } else if (operand_1 !== modelOperand_1) {
        operand_1 = calculator.operand_1;

        updateDisplay("operand_1");
    } else if (operand_2 !== "" && modelOperand_2 === "") {
        return;
    } else if (operand_2 !== modelOperand_2) {
        operand_2 = calculator.operand_2;
        updateDisplay("operand_2");
    }
}

function updateDisplay(updatedOperand) {
    if (updatedOperand === "operand_1") {
        displayNode.textContent = operand_1;
    } else if (updatedOperand === "operand_2") {
        displayNode.textContent = operand_2;
    } else if (updatedOperand === "AC") {
        CE_ACNode.textContent = "AC";
    } else if (updatedOperand === "EC") {
        CE_ACNode.textContent = "EC";
    }
}
