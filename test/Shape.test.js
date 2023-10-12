const Shape = require('../lib/Shape.js');

describe('Shape', () => {

    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });


});