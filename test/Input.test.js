const Input = require('../lib/Input.js');

describe('Input', () => {

    describe('Instantiate', () => {
        it('should be an instance of Input class', () => {
            const input = new Input();

            expect(input).toBeInstanceOf(Input);
        });
    });

    describe('Collect Input', () => {
        it('a promise should be returned when calling begin on an Input object', () => {
            const result = (new Input()).begin();

            expect(result).toBeInstanceOf(Promise);
        });
    })


});