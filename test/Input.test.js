const Input = require('../lib/Input.js');

describe('Input', () => {

    describe('Instantiate', () => {
        it('should be an instance of Input class', () => {
            const input = new Input();

            expect(input).toBeInstanceOf(Input);
        });
    });


});