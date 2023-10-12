const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {

    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);
        });
    });


});