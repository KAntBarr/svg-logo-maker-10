const Square = require('../lib/Square.js');

describe('Shape', () => {

    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square();

            expect(square).toBeInstanceOf(Square);
        });
    });

    describe('Render', () => {
        it('should return a properly formatted string for a square svg xml', () => {
            
            const { color, textColor, text } = {
                color: 'purple',
                textColor: '#ffffff',
                text: 'chi',
            };

            const output = Square.render(text, color, textColor);

            const test = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="55" y="5" width="190" height="190" fill="${color}" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;

            expect(output).toBe(test);
        });

            

    });


});