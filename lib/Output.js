const { writeFile } = require('fs/promises');

class Output {
    constructor() {}

    static writeOut(data, extension, fileName) {

        return new Promise((resolve, reject) => { 
            if(extension === '.html')
                writeFile(`./dist/${fileName}.html`, data)
                    .then(() => {
                        resolve(`File written to ../dist/${fileName}.html`);
                    })
                    .catch((err) => {
                        reject(
`Could not write to file: ./dist/${fileName}.html
${err}`);
                    })
                ;
            else if(extension === '.svg')
                writeFile(`./examples/${fileName}.svg`, data)
                    .then(() => {
                        resolve(`File written to ../examples/${fileName}.svg`);
                    })
                    .catch((err) => {
                        reject(
`Could not write to file: ./examples/${fileName}.svg
${err}`);
                    })
                ;
        });
    }
}


module.exports = Output;