class Creator {
    constructor() {

    }

    static createSVG(data) {
        const {shape, text, color} = data;

        let output;

        if(shape === "Circle") {
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`;
        } else if(shape === "Triangle") {
            output = ``;

        } else if(shape === "Square") {
            output = ``;

        }

        return output;
    }
}

module.exports = Creator;