const FourFunctionCalculator = require("../../model");

describe("propertyInFocus: operand_1", () => {
    describe("with no input", () => {
        it("do nothing", () => {
            const calculator = new FourFunctionCalculator("operand_1", "", null, null);
            calculator.makeInput("CE_AC");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });

        it("do nothing", () => {
            const calculator = new FourFunctionCalculator("operand_1", "", null, null);
            calculator.makeInput(null);
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });
    });

    describe("with input", () => {
        it("clear to default state", () => {
            const calculator = new FourFunctionCalculator("operand_1", "-0", null, null);
            calculator.makeInput("CE_AC");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });
    });
});

describe("propertyInFocus: operator", () => {
    it("do nothing", () => {
        const calculator = new FourFunctionCalculator("operator", "123", "add", null);
        calculator.makeInput("CE_AC");
        expect(calculator.propertyInFocus).toEqual("operand_1");
        expect(calculator.operand_1).toEqual("");
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    });
});

describe("propertyInFocus: operand_2", () => {
    describe("has no input", () => {
        it("do nothing", () => {
            const calculator = new FourFunctionCalculator("operand_2", "123", "subtract", "");
            calculator.makeInput("CE_AC");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });
    });

    describe("has input", () => {
        it("clear operand_2 property", () => {
            const calculator = new FourFunctionCalculator("operand_2", "123", "subtract", "431.");
            calculator.makeInput("CE_AC");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("123");
            expect(calculator.operator).toEqual('subtract');
            expect(calculator.operand_2).toEqual('');
        });
    });
});
