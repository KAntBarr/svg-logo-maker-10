const Square = require('../lib/Square.js');

describe('Shape', () => {

    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const square = new Square();

            expect(square).toBeInstanceOf(Square);
        });
    });


});