const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

class Creator {
    constructor() {

    }

    createSVG(data) {
        const {shape, text, color, textColor} = data;

        let output;

        if(shape === "Circle") {
            output = Circle.render(text, color, textColor);
        } else if(shape === "Triangle") {
            output = Triangle.render(text, color, textColor);
        } else if(shape === "Square") {
            output = Square.render(text, color, textColor);
        }

        return output;
    }
}

module.exports = Creator;