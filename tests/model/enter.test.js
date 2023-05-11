const FourFunctionCalculator = require("../../model");

describe("propertyInFocus: operand_1", () => {
    it("should do nothing", () => {
        const calculator = new FourFunctionCalculator("operand_1", "", null, null);
        calculator.makeInput("enter");
        expect(calculator.propertyInFocus).toEqual("operand_1");
        expect(calculator.operand_1).toEqual("");
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    });
});

describe("propertyInFocus: operator", () => {
    it("should execute operator on operand_1 and operand_2. operator gets focus afterwards", () => {
        const calculator = new FourFunctionCalculator("operator", "4", "multiply", "4");
        calculator.makeInput("enter");
        expect(calculator.propertyInFocus).toEqual("operator");
        expect(calculator.operand_1).toEqual("16");
        expect(calculator.operator).toEqual("multiply");
        expect(calculator.operand_2).toEqual("4");
        calculator.makeInput("enter");
        expect(calculator.propertyInFocus).toEqual("operator");
        expect(calculator.operand_1).toEqual("64");
        expect(calculator.operator).toEqual("multiply");
        expect(calculator.operand_2).toEqual("4");
    });
});

describe("propertyInFocus: operand_2", () => {
    describe("does not have input", () => {
        it("should execute operator on operand_1 and operand_2. operator gets focus afterwards", () => {
            const calculator = new FourFunctionCalculator("operator", "4", "add", "4");
            calculator.makeInput("enter");
            expect(calculator.propertyInFocus).toEqual("operator");
            expect(calculator.operand_1).toEqual("8");
            expect(calculator.operator).toEqual("add");
            expect(calculator.operand_2).toEqual("4");
        });

        it("should execute operator on operand_1 and operand_2. operator gets focus afterwards", () => {
            const calculator = new FourFunctionCalculator("operator", "4", "subtract", "4");
            calculator.makeInput("enter");
            expect(calculator.propertyInFocus).toEqual("operator");
            expect(calculator.operand_1).toEqual("0");
            expect(calculator.operator).toEqual("subtract");
            expect(calculator.operand_2).toEqual("4");
            calculator.makeInput("enter");
            expect(calculator.propertyInFocus).toEqual("operator");
            expect(calculator.operand_1).toEqual("-4");
            expect(calculator.operator).toEqual("subtract");
            expect(calculator.operand_2).toEqual("4");
        });

        it("should execute operator on operand_1 and operand_2. operator gets focus afterwards", () => {
            const calculator = new FourFunctionCalculator("operator", "-4", "multiply", "4");
            calculator.makeInput("enter");
            expect(calculator.propertyInFocus).toEqual("operator");
            expect(calculator.operand_1).toEqual("-16");
            expect(calculator.operator).toEqual("multiply");
            expect(calculator.operand_2).toEqual("4");
        });

        it("should execute operator on operand_1 and operand_2. operator gets focus afterwards", () => {
            const calculator = new FourFunctionCalculator("operator", "-4", "divide", "4");
            calculator.makeInput("enter");
            expect(calculator.propertyInFocus).toEqual("operator");
            expect(calculator.operand_1).toEqual("-1");
            expect(calculator.operator).toEqual("divide");
            expect(calculator.operand_2).toEqual("4");
        });
    });
});
