const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {

    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    describe('Render', () => {
        it('should return a properly formatted string for svg xml', () => {
            
            const { color, textColor, text } = {
                color: 'purple',
                textColor: '#ffffff',
                text: 'chi',
            };

            const output = Triangle.render(text, color, textColor);

            const test = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 300 200, 0 200" fill="${color}"/>

    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

            expect(output).toBe(test);
        });

            

    });

});