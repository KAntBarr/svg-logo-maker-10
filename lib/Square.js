const Shape = require('./Shape.js');

class Square extends Shape {
    constructor() {
        super();
    }

    static render(text, color, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="55" y="5" width="190" height="190" fill="${color}" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
    }
}

module.exports = Square;