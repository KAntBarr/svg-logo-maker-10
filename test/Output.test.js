const Output = require('../lib/Output.js');

describe('Output', () => {

    describe('Instantiate', () => {
        it('should be an instance of Output class', () => {
            const output = new Output();

            expect(output).toBeInstanceOf(Output);
        });
    });


});