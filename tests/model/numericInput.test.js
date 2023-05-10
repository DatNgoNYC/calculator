import {FourFunctionCalculator} from '../../model';

describe("propertyInFocus: operand_1", () => {
    it('should append a digit to operand_1.', () => {
        const calculator = new FourFunctionCalculator();
        calculator.makeInput('1');
        expect(calculator.operand_1.toEqual('1'));
    })
})