class FourFunctionCalculator {
    /* These are the calculator's state properties */
    #propertyInFocus;
    #operand_1;
    #operator;
    #operand_2;

    constructor() {
        this.#propertyInFocus = "operand_1";
        this.#operand_1 = "";
        this.#operator = null;
        this.#operand_2 = null;
    }

    // make an input
    makeInput(input) {
        // chooses next step based on inputType
        switch (this.#getInputType(input)) {
            case "numeric":
                this.#executeNumeric(input);
                break;

            case "decimal":
                this.#executeDecimal;
                break;

            case "pos_neg":
                this.#executePos_Neg;
                break;

            case "operator":
                this.#executeOperator(input);
                break;

            case "CE_AC":
                this.#executeCE_AC;
                break;

            case "enter":
                this.#executeEnter;
                break;

            default:
                return /* this.operand_2 === null ? this.#operand_1 : this.#operand_2 */;
        }

        console.log("operand_1 : " + this.#operand_1);
        console.log("operator  : " + this.#operator);
        console.log("operand_2 : " + this.#operand_2);
    }

    /* ----------------------- PRIVATE METHODS ---------------------- */

    #executeNumeric(numericInput) {
        // mutate calculator based on property in focus
        switch (this.#getPropertyInFocus) {
            case "operand_1":
                this.#operand_1 += numericInput;
                break;
            case "operator":
                // when operator is in focus, reset to default state and record numeric input. the operator gets focused when operand_2 was in focus and enter pressed.
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
        switch (this.#getPropertyInFocus) {
            case "operand_1":
                if (this.#operand_1.includes(".")) {
                    // do nothing
                } else {
                    this.#operand_1 += ".";
                }
                break;
            case "operator":
                // when operator is in focus, reset to default state and record decimal input. the operator gets focused when operand_2 was in focus and enter pressed.
                this.operand_1 = '.';
                this.#operator = null;
                this.#operand_2 = null;
                break;
            case "operand_2":
                if (this.#operand_2.includes(".")) {
                    // do nothing
                } else {
                    this.#operand_2 += ".";
                }
                break;
        }
    }

    #executePos_Neg() {
        // mutate calculator based on property in focus
        switch (this.#getPropertyInFocus) {
            case "operand_1":
                if (this.#operand_1.includes("-")) {
                    this.#operand_1.replace("-", "");
                } else {
                    this.#operand_1 = "-" + this.#operand_1;
                }
                break;
            case "operator":
                // when operator is in focus, add/remove negative to operand_1. the operator gets focused when operand_2 was in focus and "enter" is inputted.
                this.#operand_1 = "-" + this.#operand_1;
                break;
            case "operand_2":
                if (this.#operand_2.includes("-")) {
                    this.#operand_2.replace("-", "");
                } else {
                    this.#operand_2 = "-" + this.#operand_2;
                }
                break;
        }
    }

    #executeOperator(operatorInput) {
        // mutate calculator based on property in focus
        switch (this.#getPropertyInFocus) {
            case "operand_1":
                if (this.#operand_1 === "" || this.#operand_1 === "-") {
                    // do nothing
                } else {
                    this.#operator = operatorInput;
                    this.#operand_2 = "";
                }
                break;
            case "operator":
                // when operator is in focus, reset to default state and record decimal input. the operator gets focused when operand_2 was in focus and enter pressed.
                this.#operator = operatorInput;
                this.#operand_2 = "";
                break;
            case "operand_2":
                if (this.#operand_2 === "" || this.#operand_2 === "-") {
                    // if there is no input in operand_2 yet you can still change the operator but operand_2 is technically still in focus
                    this.#operator = operatorInput;
                } else {
                    if (this.#operator === "add") {
                        this.#operand_1 = Number(this.#operand_1) + Number(this.#operand_2);
                        this.#operator = operatorInput;
                        this.#propertyInFocus = "operand_2";
                    } else if (this.#operator === "subtract") {
                        this.#operand_1 = Number(this.#operand_1) - Number(this.#operand_2);
                        this.#operator = operatorInput;
                        this.#propertyInFocus = "operand_2";
                    } else if (this.#operator === "multiply") {
                        this.#operand_1 = Number(this.#operand_1) * Number(this.#operand_2);
                        this.#operator = operatorInput;
                        this.#propertyInFocus = "operand_2";
                    } else if (this.#operator === "divide") {
                        this.#operand_1 = Number(this.#operand_1) / Number(this.#operand_2);
                        this.#operator = operatorInput;
                        this.#propertyInFocus = "operand_2";
                    }
                }
        }
    }

    #executeEnter() {
        // mutate calculator based on property in focus
        switch (this.#getPropertyInFocus) {
            case "operand_1":
                break;
            case "operator":
                // when operator is in focus, repeat the operator and operand_2 operation on operand_1. the operator gets focused when operand_2 was in focus and "enter" is inputted.
                this.#propertyInFocus = "operand_2";
                this.#executeOperator(this.#operator);
                break;
            case "operand_2":
                if (this.#operand_2 === "" || this.#operand_2 === "-") {
                    // do nothing.
                } else {
                    this.#executeOperator(this.#operator);
                }
        }
    }

    #executeCE_AC() {
        // mutate calculator based on property in focus
        switch (this.#getPropertyInFocus) {
            case "operand_1":
                if (this.#operand_1 === "") {
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
                    this.#operator = "";
                    this.#operand_2 = "";
                    this.#propertyInFocus = "operand_1";
                } else {
                    this.#operand_2 = "";
                }
                break;
        }
    }

    /* get the operand property that is in focus */
    get #getPropertyInFocus() {
        return this.#operand_2 !== null ? "operand_2" : this.#operator !== null ? "operator" : "operand_1";
    }

    #getInputType(input) {
        const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const operator = ["add", "subtract", "multiply", "divide"];
        const CE_AC = "CE_AC";
        const decimal = "decimal";
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

const fourFunctionCalculator = new FourFunctionCalculator();
fourFunctionCalculator.makeInput("1");
