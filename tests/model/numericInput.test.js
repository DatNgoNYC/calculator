const FourFunctionCalculator = require("../../model");

describe("propertyInFocus: operand_1", () => {
    it('should append a digit to operand_1 when the display is empty ', () => {
        const calculator = new FourFunctionCalculator('operand_1', "", null, null);
        calculator.makeInput('1');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('1');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })

    it('should append a digit to operand_1 when the display is NOT empty ', () => {
        const calculator = new FourFunctionCalculator('operand_1', "11", null, null);
        calculator.makeInput('1');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('111');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })

    it('should append a digit to operand_1 when the current input is negative ', () => {
        const calculator = new FourFunctionCalculator('operand_1', "-11", null, null);
        calculator.makeInput('1');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('-111');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })
})

describe("propertyInFocus: operator", () => {
    // The operator gets focused after you press enter while operand_2 is in focus and has input
    it('should reset the calculator to the default state', () => {
        const calculator = new FourFunctionCalculator('operator', "144", 'add', '2');
        calculator.makeInput('4');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('4');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })
})

describe("propertyInFocus: operand_2", () => {
    it('should append a digit to operand_2 when the display is empty', () => {
        const calculator = new FourFunctionCalculator('operand_2', "144", 'add', '2');
        calculator.makeInput('4');
        expect(calculator.propertyInFocus).toEqual('operand_2');
        expect(calculator.operand_1).toEqual('144');
        expect(calculator.operator).toEqual('add');
        expect(calculator.operand_2).toEqual('24');
    })
})