const input = require('./lib/Input.js');
const output = require('./lib/Output.js');

function main() {
    console.log(input);
    input.begin()
        .then((data) => {
            // return output.write(data).then((result) => {
            //     console.log(result);
            // })
            console.log(data);
        });
}

main();