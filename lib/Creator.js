class Creator {
    constructor() {

    }

    createSVG(data) {
        const {shape, text, color, textColor} = data;

        let output;

        if(shape === "Circle") {
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${color}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
        } else if(shape === "Triangle") {
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150 0, 300 200, 0 200" fill="${color}"/>

    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;

        } else if(shape === "Square") {
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="55" y="5" width="190" height="190" fill="${color}" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;

        }

        return output;
    }
}

module.exports = Creator;