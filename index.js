const Input = require('./lib/Input.js');
const Creator = require('./lib/Creator.js')
const Output = require('./lib/Output.js');

function main() {
    // console.log(Input);
    // console.log(new Input());
    const promiseThenReturn = (new Input).begin()
        .then((data) => {
            // return output.write(data).then((result) => {
            //     console.log(result);
            // })
            // console.log(data);
            // console.log(test);
            // resolve("test");
            // throw new Error("error...testing...error");
            // return 'test';

            const file = Creator.createSVG(data, );

            Output.writeOut(file, '.svg', 'svg_file')
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });

        })
        // .then((data) => {
        //     console.log(data);
        // })
        .catch((err) => {
            console.log(err);
        });
    
    // console.log("The return of a promise.then().catch():", promiseThenReturn);
}

main();