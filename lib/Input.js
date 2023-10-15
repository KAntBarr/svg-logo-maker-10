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
        message: 'Input a valid css color name or hex for text color:',
        name: 'textColor',
        default: 'white'
    },
    {
        type: 'input',
        message: 'Input a valid css color name or hex for background color:',
        name: 'color',
        default: 'purple'
    },
];

// let output = [{ 'test': 10 }];

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
                    resolve(response);
                })
                .catch((err) => {
                    reject(err);
                });

        });
    }


}

module.exports = Input;