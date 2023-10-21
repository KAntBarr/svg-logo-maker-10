const Shape = require('./Shape.js');

class Triangle extends Shape {
    constructor() {
        super();
    }

    static render(text, color, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 300 200, 0 200" fill="${color}"/>

    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
    }
}

module.exports = Triangle;