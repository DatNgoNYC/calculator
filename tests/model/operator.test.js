const FourFunctionCalculator = require("../../model");

describe("propertyInFocus: operand_1", () => {
    describe("has no digit input", () => {
        it("should do nothing", () => {
            const calculator = new FourFunctionCalculator("operand_1", "", null, null);
            calculator.makeInput("add");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);

            const calculator2 = new FourFunctionCalculator("operand_1", "", null, null);
            calculator2.makeInput("multiply");
            expect(calculator2.propertyInFocus).toEqual("operand_1");
            expect(calculator2.operand_1).toEqual("");
            expect(calculator2.operator).toEqual(null);
            expect(calculator2.operand_2).toEqual(null);
        });
    });

    describe("has digit input", () => {
        it("should update the operator property and move focus to operand_2", () => {
            const calculator = new FourFunctionCalculator("operand_1", "5", null, null);
            calculator.makeInput("add");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("5");
            expect(calculator.operator).toEqual("add");
            expect(calculator.operand_2).toEqual("");

            const calculator2 = new FourFunctionCalculator("operand_1", "-200", null, null);
            calculator2.makeInput("multiply");
            expect(calculator2.propertyInFocus).toEqual("operand_2");
            expect(calculator2.operand_1).toEqual("-200");
            expect(calculator2.operator).toEqual("multiply");
            expect(calculator2.operand_2).toEqual("");

            const calculator3 = new FourFunctionCalculator("operand_1", "0.0", null, null);
            calculator3.makeInput("divide");
            expect(calculator3.propertyInFocus).toEqual("operand_2");
            expect(calculator3.operand_1).toEqual("0.0");
            expect(calculator3.operator).toEqual("divide");
            expect(calculator3.operand_2).toEqual("");

            const calculator4 = new FourFunctionCalculator("operand_1", "-.84029", null, null);
            calculator4.makeInput("subtract");
            expect(calculator4.propertyInFocus).toEqual("operand_2");
            expect(calculator4.operand_1).toEqual("-.84029");
            expect(calculator4.operator).toEqual("subtract");
            expect(calculator4.operand_2).toEqual("");

            const calculator5 = new FourFunctionCalculator("operand_1", "0.", null, null);
            calculator5.makeInput("divide");
            expect(calculator5.propertyInFocus).toEqual("operand_2");
            expect(calculator5.operand_1).toEqual("0.");
            expect(calculator5.operator).toEqual("divide");
            expect(calculator5.operand_2).toEqual('');

            const calculator6 = new FourFunctionCalculator("operand_1", "-0.", null, null);
            calculator6.makeInput("subtract");
            expect(calculator6.propertyInFocus).toEqual("operand_2");
            expect(calculator6.operand_1).toEqual("-0.");
            expect(calculator6.operator).toEqual('subtract');
            expect(calculator6.operand_2).toEqual('');
        });
    });
});

describe("propertyInFocus: operator", () => {
    describe("has no digit input", () => {
        it("should update the operator property", () => {
            const calculator = new FourFunctionCalculator("operator", "3", "divide", "");
            calculator.makeInput("add");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("3");
            expect(calculator.operator).toEqual("add");
            expect(calculator.operand_2).toEqual("");

            const calculator2 = new FourFunctionCalculator("operator", "-100", "add", "-");
            calculator2.makeInput("multiply");
            expect(calculator2.propertyInFocus).toEqual("operand_2");
            expect(calculator2.operand_1).toEqual("-100");
            expect(calculator2.operator).toEqual("multiply");
            expect(calculator2.operand_2).toEqual("-");

            const calculator3 = new FourFunctionCalculator("operator", "402", "subtract", "-");
            calculator3.makeInput("divide");
            expect(calculator3.propertyInFocus).toEqual("operand_2");
            expect(calculator3.operand_1).toEqual("402");
            expect(calculator3.operator).toEqual("divide");
            expect(calculator3.operand_2).toEqual("-");

            const calculator4 = new FourFunctionCalculator("operator", "495", "subtract", "-.");
            calculator4.makeInput("subtract");
            expect(calculator4.propertyInFocus).toEqual("operand_2");
            expect(calculator4.operand_1).toEqual("495");
            expect(calculator4.operator).toEqual("subtract");
            expect(calculator4.operand_2).toEqual("-.");
        });
    });
});

describe("propertyInFocus: operand_2", () => {
    describe("has no input", () => {
        it("should update the operator property", () => {
            const calculator = new FourFunctionCalculator("operator", "5", "subtract", "");
            calculator.makeInput("add");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("5");
            expect(calculator.operator).toEqual("add");
            expect(calculator.operand_2).toEqual("");
        });
    });

    describe("has input", () => {
        it("should execute the current operator then update the operator with the given input", () => {
            const calculator = new FourFunctionCalculator("operand_2", "5", "subtract", "3");
            calculator.makeInput("add");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("2");
            expect(calculator.operator).toEqual("add");
            expect(calculator.operand_2).toEqual("3");
        });

        it("should execute the current operator then update the operator with the given input", () => {
            const calculator = new FourFunctionCalculator("operand_2", "-0.", "multiply", "3");
            calculator.makeInput("subtract");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("0");
            expect(calculator.operator).toEqual("subtract");
            expect(calculator.operand_2).toEqual("3");
        });

        it("should execute the current operator then update the operator with the given input", () => {
            const calculator = new FourFunctionCalculator("operand_2", "-100", "add", "3");
            calculator.makeInput("multiply");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("-97");
            expect(calculator.operator).toEqual("multiply");
            expect(calculator.operand_2).toEqual("3");
        });

        it("should execute the current operator then update the operator with the given input", () => {
            const calculator = new FourFunctionCalculator("operand_2", "-100", "multiply", "3");
            calculator.makeInput("divide");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("-300");
            expect(calculator.operator).toEqual("divide");
            expect(calculator.operand_2).toEqual("3");
        });
    });
});
