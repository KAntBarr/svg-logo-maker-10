const Shape = require('../lib/Shape.js');

describe('Shape', () => {

    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Render', () => {
        it('should return a properly formatted string for a shape', () => {
            
            const { color, textColor, text } = {
                color: 'purple',
                textColor: '#ffffff',
                text: 'chi',
            };

            const output = Shape.render(text, color, textColor);

            const test = ' ';

            expect(output).toBe(test);
        });

            

    });

});