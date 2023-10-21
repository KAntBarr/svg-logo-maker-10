const Output = require('../lib/Output.js');

describe('Output', () => {

    describe('Instantiate', () => {
        it('should be an instance of Output class', () => {
            const output = new Output();

            expect(output).toBeInstanceOf(Output);
        });
    });

    describe('Write To File', () => {
        it('calling writeOut on the Output class should return a promise', () => {
            const output = Output.writeOut(1, 1, 1);

            expect(output).toBeInstanceOf(Promise);
        })
    })


});