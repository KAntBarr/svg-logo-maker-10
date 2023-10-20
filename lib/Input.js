const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        message: 'Choose shape: ',
        name: 'shape',
        default: "Square",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: 'input',
        message: 'Input logo text (3 characters max):',
        name: 'text',
        default: "SVG"
    },
    {
        type: 'input',
        message: 'Input a valid css color name or hex(#000fff) for text color:',
        name: 'textColor',
        default: '#000fff'
    },
    {
        type: 'input',
        message: 'Input a valid css color name or hex(#fff000) for background color:',
        name: 'color',
        default: '#fff000'
    },
];

// let output = [{ 'test': 10 }];

function validate(response) {
    const text = response.text;

    if(text.trim().length > 3)
        response.text = text.slice(0,3);

    return response;
}

class Input {
    constructor() {
        // this.test = 8;
    }

    // static test = 15;

    begin() {
        return new Promise((resolve, reject) => {
            // resolve(['hi']);
            inquirer.prompt(questions)
                .then((response) => {
                    // add input checks heres
                    response = validate(response);
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });

        });
    }


}

module.exports = Input;