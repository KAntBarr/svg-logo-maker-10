const inquirer = require('inquirer');

class Input {
    constructor() {

    }

    static begin() {
        return new Promise((resolve, reject) => {
            resolve('hi');
        });
    }
}

module.exports = Input;