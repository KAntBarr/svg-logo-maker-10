const Creator = require('../lib/Creator.js');
const Circle = require('../lib/Circle.js');
const Triangle = require('../lib/Triangle.js');
const Square = require('../lib/Square.js');

describe('Creator', () => {

    describe('Instantiate', () => {
        it('should be an instance of Creator class', () => {
            const creator = new Creator();

            expect(creator).toBeInstanceOf(Creator);
        });

    });

    describe('Create SVG Output', () => {

        const { color, textColor, text } = {
            color: 'purple',
            textColor: '#ffffff',
            text: 'chi',
        };

        it('should return the output of a circle svg', () => {
            const shape = 'Circle';

            const result = (new Creator()).createSVG({shape, text, color, textColor});

            const test = Circle.render(text, color, textColor);

            expect(result).toBe(test);
        })

        it('should return the output of a triangle svg', () => {
            const shape = 'Triangle';

            const result = (new Creator()).createSVG({shape, text, color, textColor});

            const test = Triangle.render(text, color, textColor);

            expect(result).toBe(test);
        })

        it('should return the output of a square svg', () => {
            const shape = 'Square';

            const result = (new Creator()).createSVG({shape, text, color, textColor});

            const test = Square.render(text, color, textColor);

            expect(result).toBe(test);
        })


    });


});