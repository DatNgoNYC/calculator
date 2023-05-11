const FourFunctionCalculator = require("../../model");

describe("propertyInFocus: operand_1", () => {
    describe("has no digit input", () => {
        it("should add a negative sign when there is not one", () => {
            const calculator = new FourFunctionCalculator("operand_1", "", null, null);
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("-0");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });

        it("should remove the negative sign when there is one", () => {
            const calculator = new FourFunctionCalculator("operand_1", "-", null, null);
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });
    });

    describe("operand_1 has digit input", () => {
        it("should add a negative sign when there is not one", () => {
            const calculator = new FourFunctionCalculator("operand_1", "123", null, null);
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("-123");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });

        it("should remove the negative sign when there is one", () => {
            const calculator = new FourFunctionCalculator("operand_1", "-123", null, null);
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_1");
            expect(calculator.operand_1).toEqual("123");
            expect(calculator.operator).toEqual(null);
            expect(calculator.operand_2).toEqual(null);
        });
    });
});

describe("propertyInFocus: operator", () => {
    // The operator gets focused after you press enter while operand_2 is in focus and has input
    it("should add a negative to operand_1 when there isn't one", () => {
        const calculator = new FourFunctionCalculator("operator", "144", "add", "2");
        calculator.makeInput("pos_neg");
        expect(calculator.propertyInFocus).toEqual("operator");
        expect(calculator.operand_1).toEqual("-144");
        expect(calculator.operator).toEqual("add");
        expect(calculator.operand_2).toEqual("2");
    });

    // The operator gets focused after you press enter while operand_2 is in focus and has input
    it("should remove the negative from operand_1 when there is one", () => {
        const calculator = new FourFunctionCalculator("operator", "-144", "add", "2");
        calculator.makeInput("pos_neg");
        expect(calculator.propertyInFocus).toEqual("operator");
        expect(calculator.operand_1).toEqual("144");
        expect(calculator.operator).toEqual("add");
        expect(calculator.operand_2).toEqual("2");
    });
});

describe("propertyInFocus: operand_2", () => {
    describe("has no digit input", () => {
        it("should add a negative sign when there is not one", () => {
            const calculator = new FourFunctionCalculator("operand_2", "123", 'add', '');
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("123");
            expect(calculator.operator).toEqual('add');
            expect(calculator.operand_2).toEqual('-');
        });

        it("should remove the negative sign when there is one", () => {
            const calculator = new FourFunctionCalculator("operand_2", "-123", 'add', '-');
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("-123");
            expect(calculator.operator).toEqual('add');
            expect(calculator.operand_2).toEqual('');
        });
    });

    describe("has digit input", () => {
        it("should add a negative sign when there is not one", () => {
            const calculator = new FourFunctionCalculator("operand_2", "123", 'add', '63235.09');
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("123");
            expect(calculator.operator).toEqual('add');
            expect(calculator.operand_2).toEqual('-63235.09');
        });

        it("should remove the negative sign when there is one", () => {
            const calculator = new FourFunctionCalculator("operand_2", "-123", 'add', '-63235.09');
            calculator.makeInput("pos_neg");
            expect(calculator.propertyInFocus).toEqual("operand_2");
            expect(calculator.operand_1).toEqual("-123");
            expect(calculator.operator).toEqual('add');
            expect(calculator.operand_2).toEqual('63235.09');
        });
    });
});
