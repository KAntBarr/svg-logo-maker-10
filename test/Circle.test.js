const Circle = require('../lib/Circle.js');

describe('Circle', () => {

    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);
        });
    });

    describe('Render', () => {
        it('should return a properly formatted string for svg xml', () => {
            
            const { color, textColor, text } = {
                color: 'purple',
                textColor: '#ffffff',
                text: 'chill',
            };

            const output = Circle.render(text, color, textColor);

            expect(output).toBe(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${color}" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
</svg>`);
        });
    });


});