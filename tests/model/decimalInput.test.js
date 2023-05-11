const FourFunctionCalculator = require("../../model");

describe("propertyInFocus: operand_1", () => {
    it('should append a decimal to operand_1 when the display does not have a decimal', () => {
        const calculator = new FourFunctionCalculator('operand_1', "", null, null);
        calculator.makeInput('.');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('.');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })

    it('should do nothing when the display has a decimal', () => {
        const calculator = new FourFunctionCalculator('operand_1', ".", null, null);
        calculator.makeInput('.');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('.');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })
});

describe("propertyInFocus: operator", () => {
    // The operator gets focused after you press enter while operand_2 is in focus and has input
    it('should reset the calculator to the default state', () => {
        const calculator = new FourFunctionCalculator('operator', "144", 'add', '2');
        calculator.makeInput('.');
        expect(calculator.propertyInFocus).toEqual('operand_1');
        expect(calculator.operand_1).toEqual('.');
        expect(calculator.operator).toEqual(null);
        expect(calculator.operand_2).toEqual(null);
    })
})

describe("propertyInFocus: operand_2", () => {
    it('should append a decimal to operand_2 when the display does not have a decimal', () => {
        const calculator = new FourFunctionCalculator('operand_2', "1224", 'add', '123');
        calculator.makeInput('.');
        expect(calculator.propertyInFocus).toEqual('operand_2');
        expect(calculator.operand_1).toEqual('1224');
        expect(calculator.operator).toEqual('add');
        expect(calculator.operand_2).toEqual('123.');
    })

    it('should do nothing to operand_2 when the display does has a decimal', () => {
        const calculator = new FourFunctionCalculator('operand_2', "1224", 'add', '123.');
        calculator.makeInput('.');
        expect(calculator.propertyInFocus).toEqual('operand_2');
        expect(calculator.operand_1).toEqual('1224');
        expect(calculator.operator).toEqual('add');
        expect(calculator.operand_2).toEqual('123.');
    })
})